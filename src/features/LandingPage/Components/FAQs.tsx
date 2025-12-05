"use client";

import { useState } from "react";
import Image from "next/image";
import { BotIcon, Mail } from "lucide-react";
import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";
import NavigationButton from "@/src/app/components/navigation-button";

const faqData = [
  {
    id: 1,
    question:
      "I have already invested in mutual funds, equity, and FDs. Why should I invest in bonds?",
    answer:
      "Bonds provide diversification and stable returns, reducing portfolio risk. They offer predictable income and act as a hedge against market volatility.",
  },
  {
    id: 2,
    question:
      "I have already invested in mutual funds, equity, and FDs. Why should I invest in bonds?",
    answer:
      "Bonds provide diversification and stable returns, reducing portfolio risk. They offer predictable income and act as a hedge against market volatility.",
  },
  {
    id: 3,
    question:
      "I have already invested in mutual funds, equity, and FDs. Why should I invest in bonds?",
    answer:
      "Bonds provide diversification and stable returns, reducing portfolio risk. They offer predictable income and act as a hedge against market volatility.",
  },
  {
    id: 4,
    question:
      "I have already invested in mutual funds, equity, and FDs. Why should I invest in bonds?",
    answer:
      "Bonds provide diversification and stable returns, reducing portfolio risk. They offer predictable income and act as a hedge against market volatility.",
  },
  {
    id: 5,
    question:
      "I have already invested in mutual funds, equity, and FDs. Why should I invest in bonds?",
    answer:
      "Bonds provide diversification and stable returns, reducing portfolio risk. They offer predictable income and act as a hedge against market volatility.",
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<number | null>(null);
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Container className="bg-white py-12 sm:py-16 lg:py-20 rounded-2xl mb-16 sm:mb-20 lg:mb-24">
      <section
        ref={sectionRef}
        className="w-full max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - FAQs */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-['Poppins']">
              FAQs
            </h2>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-2xl overflow-hidden bg-white  transition-all duration-200 hover:shadow-md border-b border-black"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={openId === faq.id ? true : false}
                  >
                    <span className="text-sm sm:text-base font-normal text-gray-800 font-['Poppins'] flex-1">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 text-gray-600 transition-transform duration-200 ${
                        openId === faq.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openId === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5 sm:px-8 sm:pb-6 pt-0">
                      <p className="text-sm sm:text-base text-gray-600 font-['Poppins'] font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image and Contact Card */}
          <div className="w-full lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-lg">
              {/* Image */}
              <div className="w-full aspect-square max-w-md mx-auto mb-6 relative">
                <Image
                  src="/FAQs.png"
                  alt="Contact illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Contact section */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 font-['Poppins']">
                  Want to Know more?
                </h3>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 font-['Poppins']">
                  Connect with us now!
                </p>
                <p className="text-sm text-gray-600 mb-6 font-['Poppins'] font-light">
                  It may take a day to week, but it&apos;ll be done properly
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <NavigationButton
                    href=""
                    text="Chat With Us"
                    icon={<BotIcon size={18} />}
                    className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 text-base"
                    target="_self"
                  />
                  <NavigationButton
                    href="mailto:"
                    text="Email Us"
                    icon={<Mail size={18} />}
                    className="px-6 py-3 bg-white text-black border-2 border-black rounded-xl hover:bg-gray-50 transition-colors duration-200 text-base"
                    target="_self"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
