"use client";

import React from "react";
import Button from "./component/Button";

const NAV_ITEMS = [
  "Products",
  "Solutions",
  "Community",
  "Resources",
  "Pricing",
  "Contact",
  "Link",
];

export default function Header() {
  return (
    <header className="w-80% backdrop-blur-3xl bg-white  border-b-2 border-zinc-400 mx-28 my-4 flex justify-center rounded-[10px]">
      <div className="flex w-full px-20 py-4 items-center gap-10 flex-wrap rounded-[10px]">
        <div
          className="flex w-10 justify-center items-center text-gray-900"
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
          className="flex justify-end items-start align-top gap-x-2 gap-y-2 flex-1 flex-wrap"
          aria-label="main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              className={`text-gray-800 px-3 py-1 rounded-xl height-full hover:bg-gray-200 hover:text-gray-900 transition-colors `}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex w-[202px] items-center gap-3 shrink-0 h-full">
          <Button text="Sign in" variant="muted" size="small" />
          <Button text="Register" variant="dark" size="small" />
        </div>
      </div>
    </header>
  );
}
