"use client";

import React, { useEffect, useRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ScrollShineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  startTrigger?: string;
  endTrigger?: string;
  scrubSpeed?: boolean | number;
  shineGradient?: string;
}

export const ScrollShineCard = React.forwardRef<HTMLDivElement, ScrollShineCardProps>(
  (
    {
      children,
      className = "",
      startTrigger = "top bottom",
      endTrigger = "bottom top",
      scrubSpeed = true,
      shineGradient = "linear-gradient(120deg, transparent 20%, rgba(255,84,36,0.06) 35%, rgba(255,255,255,0.15) 50%, rgba(255,84,36,0.06) 65%, transparent 80%)",
      ...props
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => cardRef.current as HTMLDivElement);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const card = cardRef.current;
      const shine = shineRef.current;
      if (!card || !shine) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        gsap.set(shine, { opacity: 0 });
        return;
      }

      // Direct scroll-linked horizontal sweep (translateX: -120% -> 120%)
      // Freezes instantly when scroll input stops with no loop or fixed duration
      const tween = gsap.fromTo(
        shine,
        { xPercent: -120 },
        {
          xPercent: 120,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: startTrigger,
            end: endTrigger,
            scrub: scrubSpeed,
            id: "card-scroll-shine",
          },
        }
      );

      return () => {
        tween.kill();
        tween.scrollTrigger?.kill();
      };
    }, [startTrigger, endTrigger, scrubSpeed]);

    return (
      <div
        ref={cardRef}
        className={`relative overflow-hidden ${className}`}
        {...props}
      >
        {/* Scroll-Linked Diagonal Light Band Layer */}
        <div
          ref={shineRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 w-[150%] h-full -left-[25%]"
          style={{
            background: shineGradient,
            willChange: "transform",
          }}
        />

        {/* Card Content Layer */}
        <div className="relative z-20 h-full w-full">{children}</div>
      </div>
    );
  }
);

ScrollShineCard.displayName = "ScrollShineCard";
