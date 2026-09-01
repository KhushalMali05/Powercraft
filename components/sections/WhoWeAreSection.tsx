"use client";

import React from "react";
import { ShieldCheck, Cpu, Award, Zap, CheckCircle2 } from "lucide-react";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { motion } from "framer-motion";

const DIFFERENTIATORS = [
  {
    title: "Enablement-First Delivery",
    desc: "We prioritize training and scaling over permanent reliance. When our project finishes, your team owns the capability fully.",
    color: "#FF5424",
  },
  {
    title: "100% Microsoft Power Platform Focus",
    desc: "We specialize exclusively in Power Apps, Automate, BI, and Copilot. We go deep rather than spreading thin across 50 generic tools.",
    color: "#FF5424",
  },
  {
    title: "Enterprise Rigor for Agile Teams",
    desc: "We bring Fortune 500 architecture standards, ALM, and governance principles to lean teams and mid-market organizations.",
    color: "#FF5424",
  },
  {
    title: "Built-In Governance From Day One",
    desc: "Security and DLP policies aren't an afterthought. We implement CoE guardrails concurrently with your very first app rollout.",
    color: "#FF5424",
  },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16072E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Who We Are Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
              <Award className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">WHO WE ARE</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Microsoft-Certified Practitioners Dedicated to Real Results
            </h2>

            <p className="text-base text-[#C8C0DD] leading-relaxed font-body">
              We&apos;re a team of Microsoft-certified professionals with deep experience in enterprise technology, app modernization, and workplace automation. Our founder brings over a decade of leadership in delivery, architecture, and platform enablement.
            </p>

            <p className="text-base text-[#C8C0DD] leading-relaxed font-body">
              We&apos;ve built solutions for global enterprises, but our passion lies in helping lean teams achieve more with less—without compromising governance, security, or agility.
            </p>

            <div className="p-6 rounded-2xl bg-[#1C0B3B] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#FF5424] uppercase tracking-wider font-semibold">
                  Leadership & Core Engineering
                </span>
                <PlaceholderBadge label="Team Roster" />
              </div>
              <p className="text-xs text-[#C8C0DD] leading-relaxed">
                Led by senior Microsoft Power Platform Solution Architects, Certified Power Apps & Power BI Specialists, and Enterprise Governance Leads.
              </p>
            </div>
          </div>

          {/* Right Column: What Makes Us Different Grid */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <span className="font-mono text-xs font-semibold text-[#FF5424] uppercase tracking-widest">
                THE POWERCRAFT DIFFERENCE
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                Why Organizations Trust Powercraft
              </h3>
            </div>

            <div className="space-y-4">
              {DIFFERENTIATORS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-[#1C0B3B] border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-4"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#C8C0DD] leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
