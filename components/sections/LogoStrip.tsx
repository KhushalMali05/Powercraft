"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LETTERS = ["P", "o", "w", "e", "r", "c", "r", "a", "f", "t"];

// Controlled scatter offsets per letter
const SCATTER_OFFSETS = [
  { x: -40, y: -25, rot: -14 }, // P
  { x: -30, y: 22, rot: 15 },   // o
  { x: -25, y: -18, rot: -10 }, // w
  { x: -18, y: 20, rot: 12 },   // e
  { x: -20, y: -24, rot: -15 }, // r
  { x: 18, y: 22, rot: 11 },    // c
  { x: 22, y: -20, rot: -12 },  // r
  { x: 28, y: 24, rot: 14 },    // a
  { x: 32, y: -16, rot: -10 },  // f
  { x: 38, y: 20, rot: 13 },    // t
];

export const LogoStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      letterRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, {
            opacity: 1,
            color: "#FFFFFF",
            filter: "blur(0px)",
            x: 0,
            y: 0,
            rotation: 0,
          });
        }
      });
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    // Set initial scattered state for all letters
    letterRefs.current.forEach((el, index) => {
      if (el) {
        const offset = SCATTER_OFFSETS[index % SCATTER_OFFSETS.length];
        gsap.set(el, {
          opacity: 0.08,
          color: "#3B1573",
          filter: "blur(3px)",
          x: offset.x,
          y: offset.y,
          rotation: offset.rot,
        });
      }
    });

    const validLetters = letterRefs.current.filter(Boolean);
    const total = validLetters.length;
    const duration = 0.5; // Each letter takes 0.5 timeline units to complete
    const stagger = (1 - duration) / (total - 1); // (1 - 0.5) / 9 = 0.05555... ensures letter 9 finishes at exactly 1.0

    // ScrollTrigger #1: Pin LogoStrip section for 100vh and scrub letter assembly timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: "+=100vh",
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        id: "wordmark-assembly",
      },
    });

    tl.to(validLetters, {
      opacity: 1,
      color: "#FFFFFF",
      filter: "blur(0px)",
      x: 0,
      y: 0,
      rotation: 0,
      duration: duration,
      stagger: stagger,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getById("wordmark-assembly")?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-16 border-y border-white/[0.06] bg-[#1A0B2E] overflow-hidden flex items-center justify-center relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center relative">
        <h2 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-extrabold tracking-tight leading-none inline-flex items-center justify-center">
          {LETTERS.map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                letterRefs.current[i] = el;
              }}
              className="inline-block"
              style={{
                willChange: "transform, opacity, filter, color",
              }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

