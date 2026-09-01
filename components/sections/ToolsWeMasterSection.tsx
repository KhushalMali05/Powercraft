"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LOGOS = [
  { id: 1, name: "Power Apps", icon: "/assets/images/power-apps-official.png", category: "Low-Code Apps", angle: 0 },
  { id: 2, name: "Power Automate", icon: "/assets/images/power-automate-official.png", category: "Workflows", angle: 32.7 },
  { id: 3, name: "Power BI", icon: "/assets/images/power-bi-official.png", category: "Analytics", angle: 65.4 },
  { id: 4, name: "Copilot Studio", icon: "/assets/images/copilot-official.png", category: "Conversational AI", angle: 98.1 },
  { id: 5, name: "Power Pages", icon: "/assets/images/icon-power-pages.png", category: "Portals", angle: 130.8 },
  { id: 6, name: "Dataverse", icon: "/assets/images/icon-power-platform.png", category: "Data Backbone", angle: 163.5 },
  { id: 7, name: "AI Builder", icon: "/assets/images/copilot-official.png", category: "Applied ML", angle: 196.2 },
  { id: 8, name: "SharePoint", icon: "/assets/images/sharepoint-official.png", category: "Content", angle: 228.9 },
  { id: 9, name: "Dynamics 365", icon: "/assets/images/power_logo.png", category: "ERP & CRM", angle: 261.6 },
  { id: 10, name: "Azure Data", icon: "/assets/images/power-bi-official.png", category: "Cloud Synapse", angle: 294.3 },
  { id: 11, name: "Teams & M365", icon: "/assets/images/icon-power-automate.png", category: "Collaboration", angle: 327 },
];

export const ToolsWeMasterSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const section = sectionRef.current;
    const anchor = anchorRef.current;

    if (!section || !anchor) return;

    if (mediaQuery.matches) {
      gsap.set(anchor, { scale: 1 });
      return;
    }

    // Shrink center anchor continuously from ~240px (scale 2.5) down to ~90px (scale 1.0)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      anchor,
      { scale: 2.4 },
      { scale: 1.0, ease: "none" },
      0
    );

    // Fade and scale in the surrounding oval logo cards
    logoRefs.current.forEach((card) => {
      if (card) {
        tl.fromTo(
          card,
          { opacity: 0.3, scale: 0.8 },
          { opacity: 1, scale: 1, ease: "none" },
          0
        );
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[900px] h-screen bg-[#1A0B2E] py-16 flex items-center justify-center overflow-hidden border-b border-white/[0.06]"
    >
      {/* Toned-down subtle background glow to ensure flat white text legibility without contrast tricks */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-[#3B1573]/20 blur-[130px]" />
      </div>

      {/* 11 Logo Cards in Oval Ring Formation (z-20) */}
      <div
        ref={logoContainerRef}
        className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center"
      >
        {LOGOS.map((logo, index) => {
          // Oval math: rx = 480px, ry = 260px
          const rad = (logo.angle * Math.PI) / 180;
          const x = Math.cos(rad) * 480;
          const y = Math.sin(rad) * 260;

          return (
            <div
              key={logo.id}
              ref={(el) => {
                logoRefs.current[index] = el;
              }}
              className="absolute pointer-events-auto w-[140px] p-3 rounded-2xl bg-[#1C0B3B]/90 border border-white/[0.12] shadow-xl backdrop-blur-md flex flex-col items-center text-center transition-border duration-300 hover:border-[#FF6A1A]/50"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 flex items-center justify-center mb-2 shrink-0">
                <img
                  src={logo.icon}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-xs text-white truncate max-w-[120px]">
                {logo.name}
              </span>
              <span className="font-mono text-[9px] text-[#FF9457] tracking-tight truncate max-w-[120px]">
                {logo.category}
              </span>
            </div>
          );
        })}
      </div>

      {/* Central Anchor: "Powercraft" Wordmark + Orange Labels (z-30) */}
      <div
        ref={anchorRef}
        className="relative z-30 flex flex-col items-center justify-center text-center select-none transform-gpu origin-center"
      >
        <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#FF6A1A] uppercase mb-2">
          TOOLS WE MASTER
        </div>

        {/* Flat Solid White Wordmark */}
        <h2 className="font-display text-[95px] font-extrabold tracking-tight text-[#FFFFFF] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          Powercraft
        </h2>

        <div className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-[#FF9457] uppercase mt-3">
          ONE UNIFIED ENTERPRISE PLATFORM
        </div>
      </div>
    </section>
  );
};
