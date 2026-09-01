"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SERVICES_DATA = [
  {
    id: "power-apps",
    title: "Power Apps Development",
    slug: "power-apps-development",
    href: "/services/power-apps-development",
    shortDesc:
      "Custom apps without the custom dev time. Replace spreadsheets and manual tasks with scalable solutions.",
    iconImg: "/assets/images/power-apps-official.png",
    color: "#FF5424",
    tag: "01 / Canvas & Model-Driven",
    highlights: [
      "Custom Canvas & Model-driven Apps",
      "Responsive UI & Mobile Optimization",
      "Dataverse & SharePoint Integrations",
      "Role-based Logic & Access Control",
    ],
  },
  {
    id: "power-automate",
    title: "Power Automate Workflows",
    slug: "power-automate-consulting",
    href: "/services/power-automate-consulting",
    shortDesc:
      "Automate approvals, notifications, and business processes—faster than ever across all your systems.",
    iconImg: "/assets/images/power-automate-official.png",
    color: "#FF5424",
    tag: "02 / Process Automation",
    highlights: [
      "Multi-stage Approval Flows & SLA Timers",
      "Document Routing & PDF Generation",
      "Teams, Outlook & SAP Integrations",
      "ALM Multi-environment Management",
    ],
  },
  {
    id: "power-bi",
    title: "Power BI Dashboards",
    slug: "power-bi-analytics",
    href: "/services/power-bi-analytics",
    shortDesc:
      "Turn data into decisions. We build live dashboards that show what's happening—right now.",
    iconImg: "/assets/images/power-bi-official.png",
    color: "#FF5424",
    tag: "03 / Business Intelligence",
    highlights: [
      "Complex DAX Modeling & Power Query",
      "Executive KPI Control Centers",
      "Embedded Visuals in Power Apps & Teams",
      "Secure Row-Level Security (RLS)",
    ],
  },
  {
    id: "copilot-ai",
    title: "Copilot & AI Integration",
    slug: "microsoft-copilot-ai-integration",
    href: "/services/microsoft-copilot-ai-integration",
    shortDesc:
      "Put generative AI to work in your apps, flows, and dashboards with Microsoft Copilot Studio.",
    iconImg: "/assets/images/copilot-official.png",
    color: "#FF5424",
    tag: "04 / Applied Generative AI",
    highlights: [
      "Custom Copilot Studio Chatbots",
      "AI Prompts & Document Summarization",
      "Smart Field Auto-fill & Optical Extraction",
      "Enterprise AI Security & Data Guardrails",
    ],
  },
  {
    id: "governance-coe",
    title: "Governance & CoE",
    slug: "power-platform-governance",
    href: "/services/power-platform-governance",
    shortDesc:
      "Governance that doesn't get in the way of growth. Environment strategy, DLP, and CoE setup included.",
    iconImg: "/assets/images/governance-official.png",
    color: "#FF5424",
    tag: "05 / Security & Administration",
    highlights: [
      "CoE Starter Kit Deployment & Tuning",
      "Data Loss Prevention (DLP) Policies",
      "Multi-Tenant Environment Architecture",
      "Shadow IT Auditing & Inventorying",
    ],
  },
  {
    id: "training-adoption",
    title: "Training & Adoption",
    slug: "power-platform-training-adoption",
    href: "/services/power-platform-training-adoption",
    shortDesc:
      "People make platforms powerful. We help your users master Power Platform with training that works.",
    iconImg: "/assets/images/training-official.png",
    color: "#FF5424",
    tag: "06 / People Enablement",
    highlights: [
      "Role-based IT Admin & Maker Bootcamps",
      "Citizen Developer Champions Program",
      "Hands-on Labs with Real Company Data",
      "On-demand Video Hubs & App Templates",
    ],
  },
];

export const ServicesGridSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<typeof SERVICES_DATA[number] | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        isMobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop?: boolean };

        if (isDesktop && sectionRef.current && trackRef.current) {
          const viewportWidth = window.innerWidth;
          const firstCard = cardsRef.current[0];
          if (!firstCard) return;

          const cardWidth = firstCard.offsetWidth;
          const gap = window.innerWidth >= 1024 ? 36 : 28;
          const paddingX = Math.max(20, (viewportWidth - cardWidth) / 2);
          const totalX = (SERVICES_DATA.length - 1) * (cardWidth + gap);

          // Apply calculated padding to ensure Card 0 is centered at x = 0
          gsap.set(trackRef.current, {
            paddingLeft: `${paddingX}px`,
            paddingRight: `${paddingX}px`,
            x: 0,
          });

          // Updates scale and opacity of each card according to its distance from viewport center
          const updateEmphasis = () => {
            const centerX = window.innerWidth / 2;
            let closestDist = Infinity;
            let currentActive = 0;

            cardsRef.current.forEach((card, idx) => {
              if (!card) return;
              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const dist = Math.abs(cardCenter - centerX);

              if (dist < closestDist) {
                closestDist = dist;
                currentActive = idx;
              }

              // Card emphasis falloff radius (approx 75% of card width)
              const maxDist = (rect.width || cardWidth) * 0.75;
              const normDist = Math.min(1, dist / maxDist);

              const scale = 1 - 0.15 * normDist; // 1.0 centered down to 0.85 off-center
              const opacity = 1 - 0.4 * normDist; // 1.0 centered down to 0.60 off-center

              gsap.set(card, {
                scale,
                opacity,
                transformOrigin: "center center",
                force3D: true,
              });
            });

            setActiveIndex(currentActive);
          };

          updateEmphasis();

          const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${Math.max(window.innerHeight * 1.5, totalX * 1.1)}`,
            animation: gsap.to(trackRef.current, {
              x: -totalX,
              ease: "none",
            }),
            onUpdate: updateEmphasis,
            onRefresh: updateEmphasis,
          });

          return () => {
            st.kill();
          };
        } else {
          // Clear GSAP properties for mobile or reduced motion fallback
          cardsRef.current.forEach((card) => {
            if (card) {
              gsap.set(card, { clearProps: "all" });
            }
          });
          if (trackRef.current) {
            gsap.set(trackRef.current, { clearProps: "all" });
          }
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-6 lg:py-8 bg-[#FFF7F5] relative overflow-hidden md:h-screen md:max-h-screen md:flex md:flex-col md:justify-between motion-reduce:h-auto motion-reduce:py-24 z-0"
    >
      {/* Background Watermark Logo (Hover Effect) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {SERVICES_DATA.map((service) => {
          const isHovered = hoveredCard?.id === service.id;
          return (
            <div
              key={service.id}
              className="absolute transition-all duration-500 ease-out flex items-center justify-center pointer-events-none"
              style={{
                opacity: isHovered ? 0.28 : 0,
                transform: isHovered ? "scale(1) translateY(0)" : "scale(0.92) translateY(12px)",
                willChange: "opacity, transform",
              }}
            >
              <img
                src={service.iconImg}
                alt=""
                className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] object-contain select-none filter brightness-[0.55] contrast-[1.35] grayscale-[0.15] mix-blend-multiply"
              />
            </div>
          );
        })}
      </div>

      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center shrink-0 mb-4 md:mb-1 lg:mb-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5424]/10 border border-[#FF5424]/30 text-[11px] font-display text-[#FF5424] mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
          <span className="uppercase tracking-wider font-semibold">SERVICES</span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1A0B2E] tracking-tight leading-tight mb-1.5">
          What We Do
        </h2>

        <p className="text-xs sm:text-sm text-[#4A4A5A] font-body leading-relaxed max-w-2xl mx-auto">
          Delivering Scalable Microsoft Power Platform Solutions — Expert Consulting in Power Apps, Power Automate, Power BI, Copilot, and Governance.
        </p>
      </div>

      {/* Horizontal Scroll Track Container */}
      <div className="w-full overflow-hidden py-2 my-auto motion-reduce:overflow-visible motion-reduce:max-w-7xl motion-reduce:mx-auto motion-reduce:px-4 relative z-10">
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none px-4 md:px-0 py-2 scrollbar-none motion-reduce:grid motion-reduce:grid-cols-1 motion-reduce:md:grid-cols-2 motion-reduce:lg:grid-cols-3 motion-reduce:gap-6 motion-reduce:p-0"
        >
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setHoveredCard(service);
                }
              }}
              onMouseLeave={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setHoveredCard(null);
                }
              }}
              className="shrink-0 snap-center group relative select-none w-[86vw] sm:w-[70vw] md:w-[58vw] lg:w-[48vw] xl:w-[42vw] max-w-[580px] min-w-[280px] motion-reduce:w-full motion-reduce:max-w-none"
            >
              <Link
                href={service.href}
                className="block h-full bg-[#FFFFFF] border border-[#1A0B2E]/08 hover:border-[#FF5424]/40 shadow-md hover:shadow-2xl rounded-2xl p-5 sm:p-6 lg:p-7 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top-Edge Accent Border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:h-[4.5px]"
                  style={{ backgroundColor: service.color }}
                />

                <div>
                  {/* Top Bar: Icon */}
                  <div className="mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FFF7F5] border border-[#FF5424]/10 p-2 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                      <img
                        src={service.iconImg}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-[#1A0B2E] group-hover:text-[#FF5424] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4A5A] leading-relaxed mb-4 font-body">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-black/[0.06] mb-4">
                    {service.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="text-xs text-[#2C2C3E] flex items-center gap-2.5"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More link */}
                <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-[#FF5424] group-hover:text-[#E64417] transition-colors pt-2.5 border-t border-black/[0.04]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section Footer & Card Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center shrink-0 mt-3 md:mt-1 lg:mt-2 motion-reduce:mt-14 relative z-10">
        {/* Active Card Indicator Dots & Pill (Desktop horizontal scroll mode) */}
        <div className="hidden md:flex items-center justify-center gap-3 mb-3 motion-reduce:hidden">
          <div className="flex items-center gap-1.5">
            {SERVICES_DATA.map((s, idx) => (
              <span
                key={s.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-8 bg-[#FF5424]"
                    : "w-2 bg-[#FF5424]/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C0B3B] hover:bg-[#25124A] text-white font-display text-xs font-semibold tracking-wider border border-[#1C0B3B]/10 shadow-md hover:shadow-lg transition-all group"
        >
          <span>View All Services & Architectural Specializations</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};




