"use client";

import React, { useState } from "react";
import Button from "./component/Button";
import { useBackgroundColor } from "../ChangeBackground";

const NAV_ITEMS = ["Solutions", "Resources", "Pricing", "Contact Us"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { backgroundColor } = useBackgroundColor();

  const isBlackBackground = backgroundColor === "bg-black";
  const headerBgClass = isBlackBackground ? "bg-black" : "bg-white";
  const textColorClass = isBlackBackground ? "text-white" : "text-gray-800";
  const logoColorClass = isBlackBackground ? "text-white" : "text-gray-900";
  const hoverBgClass = isBlackBackground
    ? "hover:bg-zinc-800"
    : "hover:bg-gray-200";
  const hoverTextClass = isBlackBackground
    ? "hover:text-white"
    : "hover:text-gray-900";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <header
        className={`backdrop-blur-3xl transition-colors duration-200 ease-in-out w-full ${headerBgClass}`}
      >
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:flex w-full max-w-[1440px] mx-auto py-4 items-center gap-4 md:gap-10 flex-wrap">
          <div
            className={`flex w-10 justify-center items-center shrink-0 transition-colors duration-200 ${logoColorClass}`}
            aria-label="logo"
          >
            {/* Placeholder logo - replace with real SVG/image */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 12h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <nav
            className="flex justify-end items-start align-top gap-x-1 sm:gap-x-2 gap-y-2 flex-1 flex-wrap font-['Poppins'] font-light"
            aria-label="main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                className={`px-2 sm:px-3 py-1 rounded-xl text-sm sm:text-base transition-colors duration-200 ${textColorClass} ${hoverBgClass} ${hoverTextClass}`}
                href="#"
              >
                {item}
              </a>
            ))}
            <div className="flex w-full sm:w-auto items-center gap-3 shrink-0 h-full mt-2 sm:mt-0 justify-center sm:justify-start">
              <Button text="Sign in" variant="muted" size="small" />
              <Button text="Register" variant="dark" size="small" />
            </div>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 items-center justify-between">
          {/* Logo */}
          <div
            className={`flex w-10 justify-center items-center shrink-0 transition-colors duration-200 ${logoColorClass}`}
            aria-label="logo"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 12h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col gap-1.5 w-8 h-8 justify-center items-center rounded-md transition-colors duration-200 ${hoverBgClass}`}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isBlackBackground ? "bg-white" : "bg-gray-900"
              } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isBlackBackground ? "bg-white" : "bg-gray-900"
              } ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isBlackBackground ? "bg-white" : "bg-gray-900"
              } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 top-16 z-40 overflow-y-auto transition-colors duration-200 ${headerBgClass}`}
        >
          <nav
            className="flex flex-col p-6 gap-4 font-['Poppins'] font-light"
            aria-label="mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                className={`px-4 py-3 rounded-xl text-base text-center transition-colors duration-200 ${textColorClass} ${hoverBgClass} ${hoverTextClass}`}
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button text="Sign in" variant="muted" size="small" />
              <Button text="Register" variant="dark" size="small" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
