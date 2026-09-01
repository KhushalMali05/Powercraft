import React from "react";
import type { Metadata } from "next";
import { CaseStudiesSection, CASE_STUDIES } from "@/components/sections/CaseStudiesSection";
import { CtaOfferBand } from "@/components/sections/CtaOfferBand";
import { CheckCircle2, TrendingUp, Sparkles, Building2, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Client Results | Powercraft",
  description:
    "Explore how organizations transformed their workflows, reporting, and governance with Powercraft's Microsoft Power Platform solutions.",
};

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink";

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">SUCCESS STORIES</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Real Results Delivered with Power Platform
            </h1>

            <p className="text-lg text-[#C8C0DD] font-body leading-relaxed">
              Read how our clients cut manual reporting times, eliminated  IT, accelerated citizen development, and achieved measurable ROI across departments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Studies Grid */}
      <CaseStudiesSection />

      {/* Deep-Dive Methodology & Delivery Standards */}
      <section className="py-20 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs text-[#FF5424] uppercase tracking-widest font-semibold">
                OUR PROVEN DELIVERY FRAMEWORK
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                How We Guarantee Repeatable ROI
              </h2>
              <p className="text-sm text-[#C8C0DD] leading-relaxed font-body">
                Every engagement follows an agile sprint model with embedded governance, comprehensive user acceptance testing, and direct maker enablement to ensure your team never gets left with unmaintainable solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5424]" />
                  <span>2–4 Week Iterative Sprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5424]" />
                  <span>Documented Architecture & DLP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5424]" />
                  <span>Hands-On Maker Hackathons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5424]" />
                  <span>Zero Vendor Lock-In Transfer</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-[#16072E] font-display font-bold text-xs tracking-wide transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Your Project ROI</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaOfferBand />
    </div>
  );
}
