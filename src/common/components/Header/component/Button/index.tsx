"use client";

import React from "react";

type Size = "small" | "medium" | "large";
type Variant = "muted" | "dark" | "poppins";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      children,
      variant = "neutral",
      size = "medium",
      className = "",
      fullWidth,
      ...rest
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 transition-transform active:translate-y-[1px]";

    const sizeClass =
      size === "small"
        ? "px-3 py-1 text-sm"
        : size === "large"
        ? "px-5 py-3 text-lg"
        : "px-4 py-2 text-base";

    const variantClass =
      variant === "primary"
        ? "bg-blue-600 text-white border-transparent"
        : variant === "secondary"
        ? "bg-green-500 text-white border-transparent"
        : "bg-gray-100 text-gray-900 border-gray-300";

    const widthClass = fullWidth ? "w-full" : "inline-flex";

    const classNameFinal = [
      base,
      sizeClass,
      variantClass,
      widthClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");
    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "var(--sds-size-space-200)",
      borderRadius: "var(--sds-size-radius-200)",
    };

    let variantStyle: React.CSSProperties = {};

    const commonBigRounded: React.CSSProperties = {
      borderRadius: "10px",
      padding: "6px 18px",
      fontFamily: "var(--sds-typography-body-font-family)",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
    };

    const variants: Record<string, React.CSSProperties> = {
      muted: {
        ...commonBigRounded,
        border: "1px solid #767676",
        background: "#E3E3E3",
        color: "#1E1E1E",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      dark: {
        ...commonBigRounded,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#2C2C2C",
        color: "#FFFFFF",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      poppins: {
        borderRadius: "8px",
        background: "var(--white, #FFF)",
        color: "#242424",
        fontFamily: "Poppins, var(--sds-typography-body-font-family)",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
      },
    };

    variantStyle = variants[variant] ?? {};

    const btnStyle = { ...baseStyle, ...variantStyle };

    return (
      <button ref={ref} className={classNameFinal} style={btnStyle} {...rest}>
        {text ?? children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
