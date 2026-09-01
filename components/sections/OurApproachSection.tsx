"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Award, Target, BookOpen, Scaling } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Solve a Real Problem",
    subtitle: "Rapid Delivery & Value First",
    desc: "We identify high-friction bottlenecks and build high-impact Power Apps, automated flows, and real-time dashboards in 2–4 weeks.",
    icon: Target,
    color: "#FF5424",
  },
  {
    step: "02",
    title: "Teach Your Team",
    subtitle: "Enablement & Skill Transfer",
    desc: "We don't keep secrets or hoard IP. We train your makers and IT admins with role-based bootcamps and customized playbooks.",
    icon: BookOpen,
    color: "#FF5424",
  },
  {
    step: "03",
    title: "Scale the Solution",
    subtitle: "Governance & Enterprise CoE",
    desc: "We establish Center of Excellence (CoE) guardrails, automated DLP security, and ALM pipelines so your team innovates safely.",
    icon: Scaling,
    color: "#FF5424",
  },
];

export const OurApproachSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0C0B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
            <span className="uppercase tracking-wider font-semibold">METHODOLOGY</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Our Approach: Solve. Teach. Scale.
          </h2>

          <p className="text-base sm:text-lg text-[#C8C0DD] font-body leading-relaxed">
            We partner with business and IT teams to replace black-box consulting with transparent enablement and architectural excellence.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-8 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-xl font-bold px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: `${s.color}15`,
                        color: s.color,
                        border: `1px solid ${s.color}30`,
                      }}
                    >
                      {s.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${s.color}10`, color: s.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {s.title}
                  </h3>
                  <div className="text-xs font-mono text-[#FF5424] mb-4">
                    {s.subtitle}
                  </div>

                  <p className="text-sm text-[#C8C0DD] leading-relaxed font-body">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs font-mono text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: s.color }} />
                  <span>Enterprise-grade standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
