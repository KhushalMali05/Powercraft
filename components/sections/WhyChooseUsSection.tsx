"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Layers, Handshake, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    id: 1,
    title: "Always Stay Human-Centered",
    desc: "We design for the people doing the actual work every day. Intuitive interfaces, simplified inputs, and zero technical jargon ensure adoption happens immediately.",
    icon: Users,
    color: "#FF5424",
    badge: "Pillar 01",
  },
  {
    id: 2,
    title: "Practice Full-Stack Design",
    desc: "From robust Dataverse and SQL architectures to high-performance canvas interfaces and automated triggers, we build solutions engineered to scale with your business.",
    icon: Layers,
    color: "#FF5424",
    badge: "Pillar 02",
  },
  {
    id: 3,
    title: "Embrace Co-Creation",
    desc: "We build alongside your internal stakeholders rather than behind closed doors, actively transferring skills, best practices, and knowledge during every single sprint.",
    icon: Handshake,
    color: "#FF5424",
    badge: "Pillar 03",
  },
  {
    id: 4,
    title: "Inclusive Growth & Governance",
    desc: "Empower citizen developers across HR, Ops, and Finance without risking security. We establish automated DLP boundaries, ALM pipelines, and CoE telemetry.",
    icon: ShieldCheck,
    color: "#FF5424",
    badge: "Pillar 04",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16072E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
            <span className="uppercase tracking-wider font-semibold">THE POWERCRAFT ADVANTAGE</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Why Choose Powercraft
          </h2>

          <p className="text-base sm:text-lg text-[#C8C0DD] font-body leading-relaxed">
            We bridge the gap between enterprise IT rigor and low-code speed through a tested 4-pillar methodology.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-2xl bg-[#1C0B3B] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover: flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        color: pillar.color,
                        border: `1px solid ${pillar.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#C8C0DD]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FF5424] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#C8C0DD] leading-relaxed font-body">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <div
                    className="h-1 rounded-full w-8 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: pillar.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
