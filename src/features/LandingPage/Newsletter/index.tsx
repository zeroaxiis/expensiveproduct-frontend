"use client";

import { useState } from "react";
import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";

export default function Newsletter() {
  const sectionRef = useSectionVisibility("bg-white", 0.5);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] text-black mb-4">
              Stay Updated
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-['Poppins']">
              Subscribe to our newsletter for the latest updates, tips, and
              exclusive offers
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200">
            <div className="mb-8">
              <svg
                className="w-16 h-16 mx-auto text-black mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-semibold font-['Poppins'] text-black mb-3">
                Join Our Community
              </h2>
              <p className="text-gray-600 font-['Poppins']">
                Get weekly insights, product updates, and financial tips
                delivered to your inbox
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-['Poppins'] text-gray-900"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 font-['Poppins'] whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-green-800 font-semibold font-['Poppins'] flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Successfully subscribed!
                </p>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4 font-['Poppins']">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black font-['Poppins'] mb-2">
                Weekly Tips
              </h3>
              <p className="text-sm text-gray-600 font-['Poppins']">
                Expert financial advice delivered every week
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black font-['Poppins'] mb-2">
                Exclusive Offers
              </h3>
              <p className="text-sm text-gray-600 font-['Poppins']">
                First access to new features and special deals
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black font-['Poppins'] mb-2">
                Product Updates
              </h3>
              <p className="text-sm text-gray-600 font-['Poppins']">
                Stay informed about new features and improvements
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
