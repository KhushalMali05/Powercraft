"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollShineCard } from "@/components/ui/ScrollShineCard";

export const WhyWeExistSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headlineLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const quoteCardRef = useRef<HTMLDivElement>(null);
  const quoteBorderRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const illustrationParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const section = sectionRef.current;
    if (!section) return;

    const validHeadlineLines = headlineLinesRef.current.filter(
      (el): el is HTMLSpanElement => el !== null
    );

    if (mediaQuery.matches) {
      const allElements = [
        pillRef.current,
        ...validHeadlineLines,
        paragraphRef.current,
        quoteCardRef.current,
        ctaRef.current,
        rightColRef.current,
      ].filter(Boolean);

      if (quoteBorderRef.current) gsap.set(quoteBorderRef.current, { scaleY: 1 });
      gsap.set(allElements, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    // Initial hidden states (translateY 35px, opacity 0 for OPPO Find N6 style reveal)
    if (pillRef.current) gsap.set(pillRef.current, { opacity: 0, y: 20 });
    if (validHeadlineLines.length > 0)
      gsap.set(validHeadlineLines, { opacity: 0, y: 35 });
    if (paragraphRef.current) gsap.set(paragraphRef.current, { opacity: 0, y: 20 });
    if (quoteCardRef.current)
      gsap.set(quoteCardRef.current, { opacity: 0, scale: 0.95 });
    if (quoteBorderRef.current)
      gsap.set(quoteBorderRef.current, { scaleY: 0, transformOrigin: "top" });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 0, y: 15 });
    if (rightColRef.current) gsap.set(rightColRef.current, { opacity: 0, x: 40 });

    // 1. Scroll-triggered Entrance Timeline (Triggered once when heading is ~25% into viewport)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current || section,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
        id: "why-we-exist-entrance",
      },
    });

    // Pill label reveal
    if (pillRef.current) {
      tl.to(pillRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    // OPPO Find N6 style line-by-line staggered text reveal (stagger 130ms, power3.out ease)
    if (validHeadlineLines.length > 0) {
      tl.to(
        validHeadlineLines,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }

    // Right column illustration entrance (parallel with headline reveal)
    if (rightColRef.current) {
      tl.to(
        rightColRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
        },
        "<+=0.1"
      );
    }

    // Paragraph reveal
    if (paragraphRef.current) {
      tl.to(
        paragraphRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      );
    }

    // Quote card + orange left border reveal
    if (quoteCardRef.current) {
      tl.to(
        quoteCardRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.25"
      );
    }

    if (quoteBorderRef.current) {
      tl.to(
        quoteBorderRef.current,
        {
          scaleY: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      );
    }

    // CTA link reveal + arrow nudge
    if (ctaRef.current) {
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }

    if (arrowRef.current) {
      tl.to(
        arrowRef.current,
        {
          x: 6,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // 2. Continuous Parallax Scrub for Illustration
    let parallaxSt: ScrollTrigger | undefined;
    if (illustrationParallaxRef.current) {
      const tween = gsap.fromTo(
        illustrationParallaxRef.current,
        { y: 25 },
        {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            id: "why-we-exist-parallax",
          },
        }
      );
      parallaxSt = tween.scrollTrigger;
    }

    return () => {
      tl.kill();
      if (parallaxSt) parallaxSt.kill();
      ScrollTrigger.getById("why-we-exist-entrance")?.kill();
      ScrollTrigger.getById("why-we-exist-parallax")?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Label */}
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5424]/10 border border-[#FF5424]/30 text-xs font-display text-[#FF5424]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
              <span className="uppercase tracking-wider font-semibold">Why We Exist</span>
            </div>

            {/* OPPO Find N6 Style Scroll-Triggered Heading Reveal */}
            <h2
              ref={headingRef}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A0B2E] tracking-tight leading-[1.2]"
            >
              <span className="block overflow-hidden py-0.5">
                <span
                  ref={(el) => {
                    headlineLinesRef.current[0] = el;
                  }}
                  className="inline-block"
                >
                  Innovation should be <span className="text-[#FF5424]">fast</span>,
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span
                  ref={(el) => {
                    headlineLinesRef.current[1] = el;
                  }}
                  className="inline-block"
                >
                  <span className="text-[#FF5424]">secure</span>, and{" "}
                  <span className="text-[#FF5424]">human-</span>
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span
                  ref={(el) => {
                    headlineLinesRef.current[2] = el;
                  }}
                  className="inline-block"
                >
                  <span className="text-[#FF5424]">centered</span>.
                </span>
              </span>
            </h2>

            {/* Paragraph Text */}
            <p
              ref={paragraphRef}
              className="text-base sm:text-lg text-[#4A4A5A] leading-relaxed font-body"
            >
              We&apos;ve seen firsthand how SMEs and enterprises get stuck between overworked IT and underutilized software. We&apos;re here to change that—by blending scalable tech with enablement-first strategy.
            </p>

            {/* Pull Quote Card */}
            <ScrollShineCard
              ref={quoteCardRef}
              className="p-7 rounded-2xl bg-[#1C0B3B] border-y border-r border-white/10 shadow-2xl my-6"
            >
              {/* Animated Left Border */}
              <div
                ref={quoteBorderRef}
                className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF5424] rounded-l-2xl origin-top z-30"
              />

              <Quote className="w-8 h-8 text-[#FF5424]/30 absolute top-4 right-4 z-20" />
              <p className="text-base sm:text-lg font-display font-medium text-white italic leading-snug pl-2 relative z-20">
                &ldquo;We don&apos;t just build apps. We create frameworks that empower your people to solve problems, securely.&rdquo;
              </p>
              <div className="mt-3 text-xs font-mono text-[#FF5424] font-semibold pl-2 relative z-20">
                — The Powercraft Enablement Philosophy
              </div>
            </ScrollShineCard>

            {/* CTA Button */}
            <div ref={ctaRef} className="pt-2">
              <Link
                href="/about-us"
                className="px-6 py-3.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-white font-display font-semibold text-sm tracking-wide shadow-md hover:shadow-lg shadow-[#FF5424]/20 transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight
                  ref={arrowRef}
                  className="w-4 h-4 text-white transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Progress Overview Illustration with Entrance + Parallax */}
          <div
            ref={rightColRef}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div
              ref={illustrationParallaxRef}
              className="w-full flex justify-center items-center"
            >
              <img
                src="/assets/images/Progress-overview-pana.png"
                alt="Illustration of business progress and analytics overview"
                className="w-full max-w-xl lg:max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
