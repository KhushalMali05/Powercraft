"use client";

import React from "react";
import { StatCounter } from "@/components/ui/StatCounter";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#131124] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5424]/5 via-[#FF5424]/5 to-[#FF5424]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
          <span className="font-mono text-xs font-semibold text-[#C8C0DD] uppercase tracking-widest">
            Measurable Transformation Metrics
          </span>
          <PlaceholderBadge label="Verified Benchmarks" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatCounter
            value={98}
            suffix="%"
            label="Client Retention Rate"
            isPlaceholder={true}
          />
          <StatCounter
            value={150}
            suffix="+"
            label="Power Apps & Automations Delivered"
            isPlaceholder={true}
          />
          <StatCounter
            value={45}
            suffix="+"
            label="Enterprises Enabled with Governance"
            isPlaceholder={true}
          />
          <StatCounter
            value={2500}
            suffix="+"
            label="Users Empowered via Training"
            isPlaceholder={true}
          />
        </div>
      </div>
    </section>
  );
};
