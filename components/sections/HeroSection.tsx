"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { HeroFlowDiagram } from "@/components/ui/HeroFlowDiagram";

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink";

const TYPEWRITER_TEXT = "Microsoft Power Platform";

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < TYPEWRITER_TEXT.length) {
      // Type next character
      timer = setTimeout(() => {
        setDisplayText(TYPEWRITER_TEXT.slice(0, displayText.length + 1));
      }, 65);
    } else if (!isDeleting && displayText.length === TYPEWRITER_TEXT.length) {
      // Pause at full text for 1.8s before erasing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      // Erase character (faster rate: 35ms)
      timer = setTimeout(() => {
        setDisplayText(TYPEWRITER_TEXT.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      // Pause briefly at empty state for 450ms before re-typing
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 450);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section className="relative pt-32 pb-6 md:pt-36 md:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C0B3B] border border-[#FF5424]/30 text-xs font-mono text-[#FF5424]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5424]" />
              <span className="tracking-wider uppercase font-semibold">
                BEST MICROSOFT POWER PLATFORM PARTNER
              </span>
            </div>

            {/* H1 Headline with Looping Typewriter Effect */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1] min-h-[3.3em]">
              Transform the Way Your Team Works with{" "}
              <span className="bg-gradient-to-r from-[#FF5424] via-[#FF7A54] to-white bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="inline-block w-[3px] h-[0.75em] ml-0.5 bg-[#FF5424] align-baseline animate-pulse rounded-xs" />
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#C8C0DD] leading-relaxed max-w-xl font-body">
              We help businesses automate, analyze, and innovate—faster—with
              enterprise-grade Power Apps, Power Automate, Power BI, and Copilot
              solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-white font-display font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </a>

              <Link
                href="/contact-us"
                className="px-6 py-4 rounded-xl bg-[#1C0B3B] hover:bg-[#1F1E38] text-white text-sm font-display font-medium tracking-wide border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Talk to a Solution Architect</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Signature Animated SVG Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <HeroFlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
