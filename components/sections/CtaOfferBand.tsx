"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink";

export const CtaOfferBand: React.FC = () => {
  return (
    <section className="py-20 bg-[#16072E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#1B1936] via-[#1C0B3B] to-[#121024] border border-white/10 overflow-hidden text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5424]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF5424]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF5424]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">
                READY TO MODERNIZE?
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Let&apos;s Build What Your Team Really Needs
            </h2>

            <p className="text-base sm:text-lg text-[#C8C0DD] font-body leading-relaxed max-w-2xl mx-auto">
              The right platform. The right structure. The right training. We bring it all together—so you can scale without chaos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-[#16072E] font-display font-bold text-sm tracking-wide transition-all hover: flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#16072E]" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-sm tracking-wider border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Solution Architect</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
