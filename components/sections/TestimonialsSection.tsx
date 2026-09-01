"use client";

import React from "react";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { Quote, Star, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIAL_SLOTS = [
  {
    id: 1,
    role: "VP of Digital Operations",
    industry: "Industrial Manufacturing",
    quote:
      "Powercraft helped us consolidate 14 disparate inspection spreadsheets into a single high-performance Power App with automated SAP integration. Delivery took 4 weeks instead of the 6 months quoted internally.",
    focusArea: "Power Apps & SAP Sync",
    rating: 5,
  },
  {
    id: 2,
    role: "Head of Enterprise Architecture",
    industry: "Financial Services",
    quote:
      "Establishing our Power Platform Center of Excellence (CoE) with Powercraft eliminated our  IT concerns while unlocking safe citizen development for over 300 business analysts.",
    focusArea: "CoE & DLP Governance",
    rating: 5,
  },
  {
    id: 3,
    role: "Chief Financial Officer",
    industry: "European Supply Chain",
    quote:
      "The automated reporting dashboards and approval flows built by Powercraft save our finance team over 60 hours every month. Real-time data visibility has completely transformed executive meetings.",
    focusArea: "Power BI & Automate",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0C0B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
            <span className="uppercase tracking-wider font-semibold">TESTIMONIALS</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            What Leaders Say About Us
          </h2>

          <p className="text-base sm:text-lg text-[#C8C0DD] font-body leading-relaxed mb-4">
            Real client experiences from leaders scaling digital workflows with Microsoft Power Platform.
          </p>

          <PlaceholderBadge
            label="Client Quote Slot — Ready for Verified Feedback"
            tooltip="Live site had generic demo names; replaced with structured enterprise testimonial slots"
          />
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_SLOTS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] relative flex flex-col justify-between hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Focus Area */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#FF5424]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF5424]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#FF5424] bg-[#FF5424]/10 px-2 py-0.5 rounded border border-[#FF5424]/20">
                    {t.focusArea}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#FF5424]/30 mb-3" />

                <p className="text-sm text-[#FFFFFF]/90 leading-relaxed font-body italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#232044] border border-white/10 flex items-center justify-center text-[#FF5424]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-medium text-xs text-white">
                    {t.role}
                  </div>
                  <div className="font-mono text-[11px] text-[#C8C0DD]">
                    {t.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
