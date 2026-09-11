"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

import { CASE_STUDIES } from "@/data/case-studies";
export { CASE_STUDIES };


const HIGHLIGHT_CHIPS = [
  { text: "Cut invoice approval times from 3 days to 3 hours", icon: Clock, color: "#FF5424" },
  { text: "Saved 60+ hours/month with automated reporting", icon: TrendingUp, color: "#FF5424" },
  { text: "Reduced  IT by 40% with CoE implementation", icon: ShieldCheck, color: "#FF5424" },
  { text: "Tripled platform adoption in 90 days with training", icon: Users, color: "#FF5424" },
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16072E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
            <span className="uppercase tracking-wider font-semibold">CASE STUDY</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Results We&apos;ve Delivered
          </h2>

          <p className="text-base sm:text-lg text-[#C8C0DD] font-body leading-relaxed">
            Real Results with Microsoft Power Platform — Success Stories in Power Apps, Power Automate, Power BI, Copilot, and Governance.
          </p>
        </div>

        {/* Highlight Metrics Chips Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {HIGHLIGHT_CHIPS.map((chip, idx) => {
            const Icon = chip.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1C0B3B] border border-white/[0.06]"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${chip.color}15`,
                    color: chip.color,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-medium text-white/90 leading-tight">
                  {chip.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* 3 Featured Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover: flex flex-col justify-between group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: cs.color }}
              />

              <div>
                {/* Header Tag + Client Sector */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: `${cs.color}15`,
                      color: cs.color,
                      border: `1px solid ${cs.color}30`,
                    }}
                  >
                    {cs.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#C8C0DD]">
                    {cs.clientType}
                  </span>
                </div>

                {/* Big Headline Stat Pill */}
                <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-[#16072E] border border-white/10 text-xs font-mono font-bold text-[#FF5424]">
                  ⭐ {cs.headlineStat}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF5424] transition-colors mb-3 leading-snug">
                  {cs.title}
                </h3>

                {/* Narrative Summary */}
                <p className="text-sm text-[#C8C0DD] leading-relaxed mb-6 font-body">
                  {cs.summary}
                </p>

                {/* Specific Key Outcomes */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                  {cs.outcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="text-xs text-[#FFFFFF]/80 flex items-start gap-2"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 shrink-0"
                        style={{ color: cs.color }}
                      />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-mono text-[#C8C0DD]">
                  {cs.timeframe}
                </span>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#FF5424] group-hover:underline"
                >
                  <span>Read Full Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider border border-white/10 transition-all group"
          >
            <span>Explore All Client Case Studies & Architecture Notes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
