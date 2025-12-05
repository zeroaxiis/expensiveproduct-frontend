"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";
import { MovingBorderButton } from "@/src/app/components/moving-border-button";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <Container className="bg-white rounded-2xl py-4 sm:py-12 px-0 text-white">
      <main
        ref={sectionRef}
        className={`${poppins.className} flex items-start justify-center py-4 sm:py-16 px-0 mt-16 sm:mt-20 lg:mt-24 `}
      >
        <section
          className={`w-full max-w-full flex flex-col lg:flex-row gap-4 sm:gap-8 items-stretch ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } transition-all duration-1000 ease-out`}
        >
          {/* Left text column */}
          <div className="w-full lg:w-3/5 flex-1 flex items-center rounded-2xl box-border px-4 sm:px-6 lg:px-10 py-6 sm:py-8 bg-black/10 backdrop-blur-md border-2 border-white/20 shadow-lg min-h-[400px] lg:min-h-[660px]">
            <div className="w-full lg:w-4/5 flex flex-col">
              <h2 className="text-[#1E1E1E] text-2xl sm:text-3xl lg:text-[44px] leading-tight lg:leading-[1.05] font-medium m-0">
                Revolutionize Your Money through AI solution with
              </h2>
              <h3 className="text-[#1E1E1E] text-5xl sm:text-3xl lg:text-[72px] leading-tight lg:leading-[1.05] font-extrabold m-0 text-inner-shadow font-['Alkatra']">
                Trovv
              </h3>

              <p className="pt-6 sm:pt-10 lg:pt-15 text-[#595959] text-base sm:text-lg lg:text-[19px] font-medium w-full">
                Empowering your financial journey with cutting-edge technology,
                seamless transactions, and smarter investments.
              </p>
              <div className="mt-8 sm:mt-16 lg:mt-40">
                {/* Get Started Today Button */}
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    role="button"
                    className="group relative inline-flex items-center justify-center text-sm sm:text-base rounded-xl bg-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 whitespace-nowrap"
                    title="payment"
                    href="#"
                  >
                    Get Started Today
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height="10"
                      width="10"
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path
                        d="M0 5h7"
                        className="transition opacity-0 group-hover:opacity-100"
                      ></path>
                      <path
                        d="M1 1l4 4-4 4"
                        className="transition group-hover:translate-x-[3px]"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="w-full lg:w-2/5 flex-none rounded-2xl overflow-hidden flex flex-col justify-center items-center bg-neutral-900 min-h-[500px] lg:min-h-[660px]">
            <div className="w-full h-full relative overflow-visible rounded-2xl min-h-[500px] lg:min-h-[660px]">
              {/* Contact button - top right */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                <div className="rounded-lg p-[2px] bg-gradient-to-r">
                  <button
                    type="button"
                    className="bg-white text-black rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg focus:outline-none cursor-default hover:cursor-pointer transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    Contact us
                  </button>
                </div>
              </div>

              {/* AI Chatbot button - bottom left */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-20 group">
                <MovingBorderButton
                  type="button"
                  className="flex items-center bg-black lg:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out overflow-hidden lg:pr-0 pr-4 sm:pr-6 lg:group-hover:pr-4 lg:group-hover:pr-6"
                >
                  {/* Circular icon container */}
                  <div className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white lg:bg-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 2H13V1H11V2H7C5.34315 2 4 3.34315 4 5V8C4 10.7614 6.23858 13 9 13H15C17.7614 13 20 10.7614 20 8V5C20 3.34315 18.6569 2 17 2ZM11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5ZM16 7.5C16 8.32843 15.3284 9 14.5 9C13.6716 9 13 8.32843 13 7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5ZM4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  {/* Text that slides in from left */}
                  <span className="whitespace-nowrap text-white text-xs sm:text-sm font-medium lg:max-w-0 max-w-xs lg:group-hover:max-w-xs transition-all duration-500 ease-out overflow-hidden ml-3 lg:ml-0 lg:group-hover:ml-3">
                    Discover How We Can Help You!
                  </span>
                </MovingBorderButton>
              </div>

              {/* Right content image */}
              <Image
                src="/HeroSection.png"
                alt="Trovv Hero"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default LandingPage;
