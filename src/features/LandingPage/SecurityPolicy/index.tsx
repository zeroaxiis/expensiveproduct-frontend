"use client";

import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";

export default function SecurityPolicy() {
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] text-black mb-4">
              Security & Data Protection
            </h1>
            <p className="text-lg text-gray-600 font-['Poppins']">
              Your security is our top priority
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-700 font-['Poppins']">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Our Security Commitment
              </h2>
              <p className="leading-relaxed">
                At Trovv, we take the security and privacy of your financial
                data extremely seriously. We employ industry-leading security
                measures and best practices to ensure your information remains
                safe, secure, and confidential at all times.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Data Encryption
              </h2>
              <p className="leading-relaxed mb-3">
                We use military-grade encryption to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>In Transit:</strong> All data transmitted between your
                  device and our servers is encrypted using TLS 1.3 (Transport
                  Layer Security)
                </li>
                <li>
                  <strong>At Rest:</strong> Your data is encrypted using AES-256
                  encryption when stored on our servers
                </li>
                <li>
                  <strong>End-to-End Encryption:</strong> Sensitive financial
                  information is encrypted before leaving your device
                </li>
                <li>
                  <strong>Database Encryption:</strong> All databases are
                  encrypted with regular key rotation
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Infrastructure Security
              </h2>
              <p className="leading-relaxed mb-3">
                Our infrastructure is built with security at its core:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Secure, redundant data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Distributed Denial of Service (DDoS) protection</li>
                <li>Network isolation and segmentation</li>
                <li>Intrusion detection and prevention systems</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Access Control
              </h2>
              <p className="leading-relaxed mb-3">
                We implement strict access controls to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Multi-factor authentication (MFA) for all user accounts</li>
                <li>Role-based access control (RBAC) for internal systems</li>
                <li>Principle of least privilege for all access permissions</li>
                <li>Regular access reviews and audits</li>
                <li>Immediate revocation of access upon employee departure</li>
                <li>Secure password policies and requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Compliance & Certifications
              </h2>
              <p className="leading-relaxed mb-3">
                Trovv complies with major security standards and regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>GDPR:</strong> General Data Protection Regulation
                  compliant
                </li>
                <li>
                  <strong>SOC 2 Type II:</strong> Certified for security,
                  availability, and confidentiality
                </li>
                <li>
                  <strong>ISO 27001:</strong> Information security management
                  certified
                </li>
                <li>
                  <strong>PCI DSS:</strong> Payment Card Industry Data Security
                  Standard compliant
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Data Protection Practices
              </h2>
              <p className="leading-relaxed mb-3">
                We follow rigorous data protection practices:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Data Minimization:</strong> We only collect data
                  that's necessary for our services
                </li>
                <li>
                  <strong>Purpose Limitation:</strong> Your data is only used
                  for its intended purpose
                </li>
                <li>
                  <strong>Data Retention:</strong> We retain data only as long
                  as necessary
                </li>
                <li>
                  <strong>Secure Deletion:</strong> Data is securely wiped when
                  no longer needed
                </li>
                <li>
                  <strong>No Third-Party Sharing:</strong> We never sell your
                  data to third parties
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Security Monitoring
              </h2>
              <p className="leading-relaxed mb-3">
                We maintain constant vigilance over our systems:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>24/7 security operations center (SOC)</li>
                <li>Real-time threat detection and response</li>
                <li>Automated security alerts and incident response</li>
                <li>Regular vulnerability scanning</li>
                <li>Log monitoring and analysis</li>
                <li>Security information and event management (SIEM)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Employee Security
              </h2>
              <p className="leading-relaxed mb-3">
                Our team is trained and committed to security:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Background checks for all employees</li>
                <li>Regular security awareness training</li>
                <li>Strict confidentiality agreements</li>
                <li>Limited access to customer data</li>
                <li>Security-first culture and practices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Incident Response
              </h2>
              <p className="leading-relaxed">
                In the unlikely event of a security incident, we have a
                comprehensive incident response plan that includes immediate
                containment, investigation, remediation, and transparent
                communication with affected users. We will notify you promptly
                if your data is compromised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Your Role in Security
              </h2>
              <p className="leading-relaxed mb-3">
                You can help keep your account secure by:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Using a strong, unique password</li>
                <li>Enabling multi-factor authentication</li>
                <li>Never sharing your login credentials</li>
                <li>Keeping your devices and software updated</li>
                <li>Being cautious of phishing attempts</li>
                <li>Logging out when using shared devices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Reporting Security Issues
              </h2>
              <p className="leading-relaxed">
                If you discover a security vulnerability or have security
                concerns, please report them immediately to our security team at
                security@trovv.com. We take all reports seriously and will
                respond promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Questions?
              </h2>
              <p className="leading-relaxed">
                If you have questions about our security practices or data
                protection measures, please contact us at support@trovv.com. We
                are committed to transparency and will be happy to address your
                concerns.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
