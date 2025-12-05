"use client";

import { ArrowUpRight, BotIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface ButtonProps {
  text: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  className?: string;
  icon?: React.ReactNode;
  iconSize?: number; // controls default icon size when no custom icon provided
  arrowSize?: number; // controls arrow size on hover
}

const NavigationButton = ({
  href,
  text = "Open",
  icon = undefined,
  target = "_blank",
  className = "",
  iconSize = 18,
  arrowSize = 18,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    initial: (direction: number) => ({
      x: -16 * direction,
      scale: 0,
      filter: "blur(3px)",
      opacity: 0,
    }),
    animate: {
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -16 * direction,
      scale: 0,
      filter: "blur(3px)",
      opacity: 0,
    }),
  };

  return (
    <div className="flex items-start">
      <Link href={href} target={target}>
        <button
          className={cn(
            "flex items-center gap-1 outline-none cursor-pointer hover:text-blue-400 font-medium py-1 px-1",
            className
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MotionConfig transition={{ duration: 0.2, ease: "easeOut" }}>
            <AnimatePresence mode="popLayout" initial={false}>
              {!hovered && (
                <motion.span
                  key={`eye-btn-${text}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  custom={1}
                  className="flex items-center justify-center"
                >
                  {icon ? icon : <BotIcon size={iconSize} />}
                </motion.span>
              )}
              <motion.p
                layout
                className={cn(
                  "text-xs sm:text-sm whitespace-nowrap",
                  hovered && "underline underline-offset-2"
                )}
              >
                {text}
              </motion.p>
              {hovered && (
                <motion.span
                  key={`arrow-btn-${text}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  custom={-1}
                  className="flex items-center justify-center"
                >
                  <ArrowUpRight
                    strokeWidth={2.5}
                    size={arrowSize}
                    className="h-full w-full"
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </MotionConfig>
        </button>
      </Link>
    </div>
  );
};

export default NavigationButton;
