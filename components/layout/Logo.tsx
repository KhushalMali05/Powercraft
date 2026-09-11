import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  showText?: boolean;
  textClassName?: string;
  iconOnly?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  size = "md",
  className = "",
  href = "/",
  showText = true,
  textClassName = "",
  iconOnly = false,
  onClick,
}) => {
  // Size mappings
  const sizeDimensions = {
    sm: { box: "w-6 h-6", svg: 24, font: "text-lg" },
    md: { box: "w-8 h-8", svg: 32, font: "text-xl" },
    lg: { box: "w-10 h-10", svg: 40, font: "text-2xl" },
    xl: { box: "w-14 h-14", svg: 56, font: "text-3xl" },
  };

  const currentSize = sizeDimensions[size] || sizeDimensions.md;

  const markContent = (
    <div className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}>
      {/* Powercraft Logo Image */}
      <img
        src="/assets/images/power_logo.png"
        alt="Powercraft Logo"
        style={{ width: currentSize.svg, height: "auto", objectFit: "contain" }}
        className="transition-transform duration-300 group-hover:scale-105 bg-transparent border-none p-0 shadow-none"
      />
    </div>
  );

  if (iconOnly || variant === "mark") {
    if (href) {
      return (
        <Link href={href} onClick={onClick} aria-label="Powercraft Home">
          {markContent}
        </Link>
      );
    }
    return markContent;
  }

  const logoNode = (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {variant === "badge" ? (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-2 flex items-center justify-center backdrop-blur-md shadow-lg group-hover:border-[#FF5424]/40 transition-colors">
          {markContent}
        </div>
      ) : (
        markContent
      )}

      {showText && (
        <span
          className={`font-display font-bold tracking-tight text-white transition-colors group-hover:text-white/90 ${currentSize.font} ${textClassName}`}
        >
          Powercraft
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5424] rounded-lg"
      >
        {logoNode}
      </Link>
    );
  }

  return logoNode;
};
