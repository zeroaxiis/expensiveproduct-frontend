"use client";

import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";
import { FeatureCards } from "./cards";

export default function Footer() {
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  return (
    <footer ref={sectionRef} className="bg-white text-black py-16 sm:py-20">
      <Container className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Title and Social Icons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] text-black leading-tight">
              Expensive Product
            </h1>

            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3 flex-shrink-0">
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,400px)_1fr] gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-14 lg:mb-16">
            {/* Left Column - Subtitle and Button */}
            <div className="flex flex-col justify-between gap-6 lg:gap-8">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-light font-['Poppins'] leading-tight text-black">
                Diversify portfolio with high returns now
              </h4>

              <div className="relative inline-flex items-center justify-center gap-4 group w-fit">
                <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  role="button"
                  className="relative inline-flex items-center justify-center text-sm sm:text-base rounded-xl bg-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 whitespace-nowrap cursor-pointer"
                  title="Get Started"
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

            {/* Right Column - Feature Cards */}
            <FeatureCards />
          </div>
        </div>

        {/* Bottom Section - Links */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8 lg:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Products */}
            <div>
              <h4 className="text-base font-semibold mb-4 font-['Poppins'] text-black">
                Products
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Expensive Product
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-base font-semibold mb-4 font-['Poppins'] text-black">
                About
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Expensive Product
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-base font-semibold mb-4 font-['Poppins'] text-black">
                Important Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Investor Awareness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-['Poppins']"
                  >
                    Risk Disclosure & Disclaimers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
