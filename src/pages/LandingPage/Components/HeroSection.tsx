"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import BlackHole from "./BlackHole";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      className={`${poppins.className} flex items-center justify-center py-16 px-6`}
    >
      <section
        className={`w-[90%] h-[660px]  max-w-none flex gap-8 items-stretch ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } transition-all duration-1000 ease-out`}
      >
        {/* Left text column */}
        <div className="w-3/5 flex-1 flex items-center rounded-2xl box-border px-10 bg-black/10 backdrop-blur-md border-2 border-white/20 shadow-lg">
          <div className="w-4/5 flex flex-col ">
            <h2 className="text-[#1E1E1E] text-[44px] leading-[1.05] font-medium m-0">
              Revolutionize Your Money through AI solution with
            </h2>
            <h3 className="text-[#1E1E1E] text-[44px] leading-[1.05] font-extrabold m-0 text-inner-shadow">
              Expensive Product
            </h3>

            <p className="pt-15 text-[#595959] text-[19px] font-medium w-full ">
              Empowering your financial journey with cutting-edge technology,
              seamless transactions, and smarter investments.
            </p>
            <div className="mt-40">
              {/* Get Started Today Button */}
              <div className="relative inline-flex items-center justify-center gap-4 group">
                <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-linear-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  role="button"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
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
        <div className="flex-none w-2/5 rounded-2xl overflow-hidden flex flex-col justify-center items-center bg-neutral-900">
          <div className="w-full h-full relative overflow-hidden rounded-2xl">
            {/* Contact button*/}
            <div className="absolute top-4 right-4 z-20">
              <div className="rounded-lg p-[2px] bg-gradient-to-r">
                <button
                  type="button"
                  className="bg-white text-black rounded-md px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg focus:outline-none cursor-default hover:cursor-pointer transition-transform duration-150 hover:-translate-y-0.5"
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* Right content image will be added here */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
