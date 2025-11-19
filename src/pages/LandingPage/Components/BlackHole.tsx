"use client";

import { useEffect, useRef, useState } from "react";

export default function BlackHole() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  // auto-rotate is enabled permanently; no React state or UI toggle required

  useEffect(() => {
    let mounted = true;
    let rafId: number | null = null;
    let renderer: any = null;
    let scene: any = null;
    let camera: any = null;
    let composer: any = null;
    let controls: any = null;
    let cleanup = () => {};

    (async () => {
      try {
        // Import three and addons dynamically. Requires `three` as a dependency.
        const THREE = await import("three");
        const { OrbitControls } = await import(
          "three/examples/jsm/controls/OrbitControls.js"
        );
        const { EffectComposer } = await import(
          "three/examples/jsm/postprocessing/EffectComposer.js"
        );
        const { RenderPass } = await import(
          "three/examples/jsm/postprocessing/RenderPass.js"
        );
        const { UnrealBloomPass } = await import(
          "three/examples/jsm/postprocessing/UnrealBloomPass.js"
        );
        const { ShaderPass } = await import(
          "three/examples/jsm/postprocessing/ShaderPass.js"
        );

        if (!mounted) return;

        // Constants
        const BLACK_HOLE_RADIUS = 1.3;
        const DISK_INNER_RADIUS = BLACK_HOLE_RADIUS + 0.2;
        const DISK_OUTER_RADIUS = 8.0;
        const DISK_TILT_ANGLE = Math.PI / 3.0;

        // Scene, Camera, Renderer
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020104, 0.025);

        camera = new THREE.PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          0.1,
          4000
        );
        // Start zoomed and from above for a top-down opening view.
        // Position Y higher than the disk so we view from above (not below).
        camera.position.set(0, 4.5, 6.5);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        // Fallbacks for a couple renderer properties if not exposed in older three versions
        try {
          (renderer as any).outputColorSpace =
            (THREE as any).SRGBColorSpace ?? (renderer as any).outputEncoding;
          (renderer as any).toneMapping =
            (THREE as any).ACESFilmicToneMapping ??
            (renderer as any).toneMapping;
        } catch (e) {}
        renderer.toneMappingExposure = 1.2;

        const container = containerRef.current!;
        container.appendChild(renderer.domElement);

        // Postprocessing
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        // Initialize sizes from the component container so the projection
        // and postprocessing match the embedded layout (keeps the BH centered)
        const rect = container.getBoundingClientRect();
        const initWidth = Math.max(1, Math.floor(rect.width));
        const initHeight = Math.max(1, Math.floor(rect.height));
        camera.aspect = initWidth / initHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(initWidth, initHeight, false);

        const bloomPass = new UnrealBloomPass(
          new THREE.Vector2(initWidth, initHeight),
          0.8,
          0.7,
          0.8
        );
        composer.addPass(bloomPass);

        const lensingShader: any = {
          uniforms: {
            tDiffuse: { value: null },
            blackHoleScreenPos: { value: new THREE.Vector2(0.5, 0.5) },
            lensingStrength: { value: 0.12 },
            lensingRadius: { value: 0.3 },
            aspectRatio: { value: initWidth / initHeight },
            chromaticAberration: { value: 0.005 },
          },
          vertexShader:
            "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
          fragmentShader: `
            uniform sampler2D tDiffuse;
            uniform vec2 blackHoleScreenPos;
            uniform float lensingStrength;
            uniform float lensingRadius;
            uniform float aspectRatio;
            uniform float chromaticAberration;
            varying vec2 vUv;
            
            void main() {
                vec2 screenPos = vUv;
                vec2 toCenter = screenPos - blackHoleScreenPos;
                toCenter.x *= aspectRatio;
                float dist = length(toCenter);
                
                float distortionAmount = lensingStrength / (dist * dist + 0.003);
                distortionAmount = clamp(distortionAmount, 0.0, 0.7);
                float falloff = smoothstep(lensingRadius, lensingRadius * 0.3, dist);
                distortionAmount *= falloff;
                
                vec2 offset = normalize(toCenter) * distortionAmount;
                offset.x /= aspectRatio;
                
                vec2 distortedUvR = screenPos - offset * (1.0 + chromaticAberration);
                vec2 distortedUvG = screenPos - offset;
                vec2 distortedUvB = screenPos - offset * (1.0 - chromaticAberration);
                
                float r = texture2D(tDiffuse, distortedUvR).r;
                float g = texture2D(tDiffuse, distortedUvG).g;
                float b = texture2D(tDiffuse, distortedUvB).b;
                
                gl_FragColor = vec4(r, g, b, 1.0);
            }`,
        };
        const lensingPass = new ShaderPass(lensingShader);
        composer.addPass(lensingPass);

        // Controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.035;
        controls.rotateSpeed = 0.4;
        // Keep automatic rotation enabled permanently (no UI toggle)
        controls.autoRotate = true;
        // Slightly slower auto-rotate for a calm effect
        controls.autoRotateSpeed = 0.06;
        // Target center and restrict polar angle to upper hemisphere so
        // orbiting/auto-rotate cannot go below the disk (prevents bottom view)
        controls.target.set(0, 0, 0);
        // 0 = straight up, PI/2 = equator; clamp to [0.1, PI/2]
        controls.minPolarAngle = 0.1;
        controls.maxPolarAngle = Math.PI / 2;
        controls.minDistance = 2.0;
        controls.maxDistance = 100;
        controls.enablePan = false;
        controls.update();
        // auto-rotate is enabled and stays on; no further sync needed

        // Starfield
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 150000;
        const starPositions = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);
        const starSizes = new Float32Array(starCount);
        const starTwinkle = new Float32Array(starCount);
        const starFieldRadius = 2000;
        const starPalette = [
          new THREE.Color(0x88aaff),
          new THREE.Color(0xffaaff),
          new THREE.Color(0xaaffff),
          new THREE.Color(0xffddaa),
          new THREE.Color(0xffeecc),
          new THREE.Color(0xffffff),
          new THREE.Color(0xff8888),
          new THREE.Color(0x88ff88),
          new THREE.Color(0xffff88),
          new THREE.Color(0x88ffff),
        ];

        for (let i = 0; i < starCount; i++) {
          const i3 = i * 3;
          const phi = Math.acos(-1 + (2 * i) / starCount);
          const theta = Math.sqrt(starCount * Math.PI) * phi;
          const radius = Math.cbrt(Math.random()) * starFieldRadius + 100;

          starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
          starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          starPositions[i3 + 2] = radius * Math.cos(phi);

          const starColor =
            starPalette[Math.floor(Math.random() * starPalette.length)].clone();
          starColor.multiplyScalar(Math.random() * 0.7 + 0.3);
          starColors[i3] = starColor.r;
          starColors[i3 + 1] = starColor.g;
          starColors[i3 + 2] = starColor.b;
          starSizes[i] = THREE.MathUtils.randFloat(0.6, 3.0);
          starTwinkle[i] = Math.random() * Math.PI * 2;
        }

        starGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(starPositions, 3)
        );
        starGeometry.setAttribute(
          "color",
          new THREE.BufferAttribute(starColors, 3)
        );
        starGeometry.setAttribute(
          "size",
          new THREE.BufferAttribute(starSizes, 1)
        );
        starGeometry.setAttribute(
          "twinkle",
          new THREE.BufferAttribute(starTwinkle, 1)
        );

        const starMaterial = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uPixelRatio: { value: renderer.getPixelRatio() },
          },
          vertexShader: `
            uniform float uTime;
            uniform float uPixelRatio;
            attribute float size;
            attribute float twinkle;
            varying vec3 vColor;
            varying float vTwinkle;
            
            void main() {
                vColor = color;
                vTwinkle = sin(uTime * 2.5 + twinkle) * 0.5 + 0.5;
                
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
          fragmentShader: `
            varying vec3 vColor;
            varying float vTwinkle;
            
            void main() {
                float dist = distance(gl_PointCoord, vec2(0.5));
                if (dist > 0.5) discard;
                
                float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                alpha *= (0.2 + vTwinkle * 0.8);
                
                gl_FragColor = vec4(vColor, alpha);
            }
        `,
          transparent: true,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Event horizon + black hole
        const eventHorizonGeom = new THREE.SphereGeometry(
          BLACK_HOLE_RADIUS * 1.05,
          128,
          64
        );
        const eventHorizonMat = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uCameraPosition: { value: camera.position },
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
          fragmentShader: `
            uniform float uTime;
            uniform vec3 uCameraPosition;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
                vec3 viewDirection = normalize(uCameraPosition - vPosition);
                float fresnel = 1.0 - abs(dot(vNormal, viewDirection));
                fresnel = pow(fresnel, 2.5);
                
                vec3 glowColor = vec3(1.0, 0.4, 0.1);
                float pulse = sin(uTime * 2.5) * 0.15 + 0.85;
                
                gl_FragColor = vec4(glowColor * fresnel * pulse, fresnel * 0.4);
            }
        `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        });

        const eventHorizon = new THREE.Mesh(eventHorizonGeom, eventHorizonMat);
        scene.add(eventHorizon);

        const blackHoleGeom = new THREE.SphereGeometry(
          BLACK_HOLE_RADIUS,
          128,
          64
        );
        const blackHoleMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const blackHoleMesh = new THREE.Mesh(blackHoleGeom, blackHoleMat);
        blackHoleMesh.renderOrder = 0;
        scene.add(blackHoleMesh);

        const diskGeometry = new THREE.RingGeometry(
          DISK_INNER_RADIUS,
          DISK_OUTER_RADIUS,
          256,
          128
        );
        const diskMaterial = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0.0 },
            uColorHot: { value: new THREE.Color(0xffffff) },
            uColorMid1: { value: new THREE.Color(0xff7733) },
            uColorMid2: { value: new THREE.Color(0xff4477) },
            uColorMid3: { value: new THREE.Color(0x7744ff) },
            uColorOuter: { value: new THREE.Color(0x4477ff) },
            uNoiseScale: { value: 2.5 },
            uFlowSpeed: { value: 0.22 },
            uDensity: { value: 1.3 },
          },
          vertexShader: `
            varying vec2 vUv;
            varying float vRadius;
            varying float vAngle;
            void main() {
                vUv = uv;
                vRadius = length(position.xy);
                vAngle = atan(position.y, position.x);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
          fragmentShader: `
            uniform float uTime;
            uniform vec3 uColorHot;
            uniform vec3 uColorMid1;
            uniform vec3 uColorMid2;
            uniform vec3 uColorMid3;
            uniform vec3 uColorOuter;
            uniform float uNoiseScale;
            uniform float uFlowSpeed;
            uniform float uDensity;

            varying vec2 vUv;
            varying float vRadius;
            varying float vAngle;

            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
            
            float snoise(vec3 v) {
                const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                vec3 i  = floor(v + dot(v, C.yyy) );
                vec3 x0 = v - i + dot(i, C.xxx) ;
                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min( g.xyz, l.zxy );
                vec3 i2 = max( g.xyz, l.zxy );
                vec3 x1 = x0 - i1 + C.xxx;
                vec3 x2 = x0 - i2 + C.yyy;
                vec3 x3 = x0 - D.yyy;
                i = mod289(i);
                vec4 p = permute( permute( permute( 
                         i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                       + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                       + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                float n_ = 0.142857142857;
                vec3  ns = n_ * D.wyz - D.xzx;
                vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                vec4 x_ = floor(j * ns.z);
                vec4 y_ = floor(j - 7.0 * x_ );
                vec4 x = x_ *ns.x + ns.yyyy;
                vec4 y = y_ *ns.x + ns.yyyy;
                vec4 h = 1.0 - abs(x) - abs(y);
                vec4 b0 = vec4( x.xy, y.xy );
                vec4 b1 = vec4( x.zw, y.zw );
                vec4 s0 = floor(b0)*2.0 + 1.0;
                vec4 s1 = floor(b1)*2.0 + 1.0;
                vec4 sh = -step(h, vec4(0.0));
                vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                vec4 a1 = b1.xzyw + s1.xzyw + s1.xzyw*sh.zzww ;
                vec3 p0 = vec3(a0.xy,h.x);
                vec3 p1 = vec3(a0.zw,h.y);
                vec3 p2 = vec3(a1.xy,h.z);
                vec3 p3 = vec3(a1.zw,h.w);
                vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
                p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
            }

            void main() {
                float normalizedRadius = smoothstep(${DISK_INNER_RADIUS.toFixed(
                  2
                )}, ${DISK_OUTER_RADIUS.toFixed(2)}, vRadius);
                
                float spiral = vAngle * 3.0 - (1.0 / (normalizedRadius + 0.1)) * 2.0;
                vec2 noiseUv = vec2(vUv.x + uTime * uFlowSpeed * (2.0 / (vRadius * 0.3 + 1.0)) + sin(spiral) * 0.1, vUv.y * 0.8 + cos(spiral) * 0.1);
                float noiseVal1 = snoise(vec3(noiseUv * uNoiseScale, uTime * 0.15));
                float noiseVal2 = snoise(vec3(noiseUv * uNoiseScale * 3.0 + 0.8, uTime * 0.22));
                float noiseVal3 = snoise(vec3(noiseUv * uNoiseScale * 6.0 + 1.5, uTime * 0.3));
                
                float noiseVal = (noiseVal1 * 0.45 + noiseVal2 * 0.35 + noiseVal3 * 0.2);
                noiseVal = (noiseVal + 1.0) * 0.5;
                
                vec3 color = uColorOuter;
                color = mix(color, uColorMid3, smoothstep(0.0, 0.25, normalizedRadius));
                color = mix(color, uColorMid2, smoothstep(0.2, 0.55, normalizedRadius));
                color = mix(color, uColorMid1, smoothstep(0.5, 0.75, normalizedRadius));
                color = mix(color, uColorHot, smoothstep(0.7, 0.95, normalizedRadius));
                
                color *= (0.5 + noiseVal * 1.0);
                float brightness = pow(1.0 - normalizedRadius, 1.0) * 3.5 + 0.5;
                brightness *= (0.3 + noiseVal * 2.2);
                
                float pulse = sin(uTime * 1.8 + normalizedRadius * 12.0 + vAngle * 2.0) * 0.15 + 0.85;
                brightness *= pulse;
                
                float alpha = uDensity * (0.2 + noiseVal * 0.9);
                alpha *= smoothstep(0.0, 0.15, normalizedRadius);
                alpha *= (1.0 - smoothstep(0.85, 1.0, normalizedRadius));
                alpha = clamp(alpha, 0.0, 1.0);

                gl_FragColor = vec4(color * brightness, alpha);
            }
        `,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });

        const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
        accretionDisk.rotation.x = DISK_TILT_ANGLE;
        accretionDisk.renderOrder = 1;
        scene.add(accretionDisk);

        // Small info fade
        setTimeout(() => {
          const info = document.getElementById("info");
          if (info) info.style.opacity = "0";
        }, 5000);

        // Resize handling: observe the container size so the renderer & camera
        // always match the component's actual layout (keeps black hole centered)
        let resizeTimeout: any;
        const resizeObserver = new ResizeObserver(() => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            if (!container) return;
            const r = container.getBoundingClientRect();
            const w = Math.max(1, Math.floor(r.width));
            const h = Math.max(1, Math.floor(r.height));
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h, false);
            composer.setSize(w, h);
            try {
              (bloomPass as any).resolution.set(w, h);
            } catch (e) {}
            try {
              (lensingPass as any).uniforms.aspectRatio.value = w / h;
            } catch (e) {}
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          }, 100);
        });
        resizeObserver.observe(container);

        const clock = new THREE.Clock();
        const blackHoleScreenPosVec3 = new THREE.Vector3();

        function animate() {
          rafId = requestAnimationFrame(animate);
          const elapsedTime = clock.getElapsedTime();
          const deltaTime = clock.getDelta();

          (diskMaterial as any).uniforms.uTime.value = elapsedTime;
          (starMaterial as any).uniforms.uTime.value = elapsedTime;
          (eventHorizonMat as any).uniforms.uTime.value = elapsedTime;
          (eventHorizonMat as any).uniforms.uCameraPosition.value.copy(
            camera.position
          );

          blackHoleScreenPosVec3.copy(blackHoleMesh.position).project(camera);
          try {
            (lensingPass as any).uniforms.blackHoleScreenPos.value.set(
              (blackHoleScreenPosVec3.x + 1) / 2,
              (blackHoleScreenPosVec3.y + 1) / 2
            );
          } catch (e) {}

          controls.update();

          stars.rotation.y += deltaTime * 0.003;
          stars.rotation.x += deltaTime * 0.001;

          accretionDisk.rotation.z += deltaTime * 0.005;

          composer.render(deltaTime);
        }

        animate();

        cleanup = () => {
          if (typeof resizeObserver !== "undefined" && resizeObserver) {
            try {
              resizeObserver.disconnect();
            } catch {}
          }
          if (rafId) cancelAnimationFrame(rafId);
          if (composer && (composer as any).dispose) {
            try {
              (composer as any).dispose();
            } catch {}
          }
          if (renderer) {
            try {
              if ((renderer as any).forceContextLoss)
                (renderer as any).forceContextLoss();
            } catch {}
            try {
              if (renderer.domElement && renderer.domElement.remove)
                renderer.domElement.remove();
            } catch {}
          }
        };
      } catch (e: any) {
        console.error("Failed to initialize three.js visual:", e);
        if (mounted) setError(String(e.message ?? e));
      }
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div>
            <p className="mb-2">Visualization failed to load.</p>
            <p className="text-sm opacity-80">{error}</p>
            <p className="mt-3 text-xs opacity-70">
              Run `npm install three` if needed.
            </p>
          </div>
        </div>
      ) : null}
      <div ref={containerRef} className="w-full h-full" />

      {/* Auto-rotate permanently enabled; UI toggle removed */}
    </div>
  );
}
