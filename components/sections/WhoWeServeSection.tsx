"use client";

import React from "react";
import Link from "next/link";
import { Building, Cpu, Users2, Globe2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AUDIENCES = [
  {
    id: 1,
    title: "Small & Mid-Sized Businesses (SMEs)",
    desc: "Scale automation rapidly without the multi-million dollar overhead of custom full-stack software development.",
    icon: Building,
    color: "#FF5424",
  },
  {
    id: 2,
    title: "Internal IT & Digital Teams",
    desc: "Clear your backlog, delegate low-code development safely to business users, and establish strict DLP guardrails.",
    icon: Cpu,
    color: "#FF5424",
  },
  {
    id: 3,
    title: "Operations, HR & Finance Teams",
    desc: "Eliminate repetitive manual spreadsheet data entry, automate multi-step approvals, and gain live reporting.",
    icon: Users2,
    color: "#FF5424",
  },
  {
    id: 4,
    title: "Microsoft-Focused Enterprises",
    desc: "Govern at enterprise scale with multi-tenant Center of Excellence (CoE) architecture and robust ALM pipelines.",
    icon: Globe2,
    color: "#FF5424",
  },
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#16072E] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
              <span className="uppercase tracking-wider font-semibold">ECOSYSTEM</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Who We Serve
            </h2>
          </div>
          <Link
            href="/about-us"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono text-[#FF5424] hover:underline"
          >
            <span>Learn More About Our Client Partnerships</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#1C0B3B] border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C8C0DD] leading-relaxed font-body">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
