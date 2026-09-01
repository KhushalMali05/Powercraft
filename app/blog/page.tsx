import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag, Sparkles } from "lucide-react";
import { CtaOfferBand } from "@/components/sections/CtaOfferBand";

export const metadata: Metadata = {
  title: "Insights & Blog | Powercraft — Power Platform Best Practices",
  description:
    "Explore actionable guides, enterprise governance insights, and architectural playbooks for Microsoft Power Apps, Power Automate, and Power BI.",
};

const BLOG_ARTICLES = [
  {
    id: "power-platform-coe",
    title: "What Is the Power Platform Center of Excellence—and Why You Need One",
    slug: "power-platform-coe",
    category: "Governance & Architecture",
    color: "#FF5424",
    readTime: "6 min read",
    date: "August 2026",
    summary:
      "As citizen development spreads, IT teams face an impossible dilemma: shut down maker creativity or risk unmanaged  IT. Discover how Microsoft's CoE Starter Kit establishes automated security boundaries without slowing down business momentum.",
    topics: ["DLP Policies", "Tenant Architecture", "Maker Telemetry", "ALM Pipelines"],
  },
  {
    id: "powerbi-vs-excel",
    title: "Power BI Dashboards vs Excel Reports: What's Worth the Switch?",
    slug: "powerbi-vs-excel",
    category: "Data & Analytics",
    color: "#FF5424",
    readTime: "5 min read",
    date: "August 2026",
    summary:
      "Spreadsheets are great for ad-hoc math, but terrible for single-source-of-truth enterprise reporting. Here is our practical decision framework on when to keep Excel and when migrating to a managed Power BI data model saves 40+ hours per month.",
    topics: ["DAX Modeling", "Row-Level Security", "Automated ETL", "Executive KPIs"],
  },
  {
    id: "power-automate-use-cases",
    title: "Power Automate Use Cases for Busy HR, Finance, and Ops Teams",
    slug: "power-automate-use-cases",
    category: "Workflow Automation",
    color: "#FF5424",
    readTime: "7 min read",
    date: "August 2026",
    summary:
      "A deep dive into 10 high-ROI workflows you can launch in under 2 weeks—from multi-tier purchase order approvals to automated onboarding document packets and Teams notifications.",
    topics: ["Adaptive Cards", "SLA Timers", "Document Generation", "Teams Integration"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">INSIGHTS & ARTICLES</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Latest Articles & Architecture Guides
            </h1>

            <p className="text-lg text-[#C8C0DD] font-body leading-relaxed">
              Practical strategies, real-world case studies, and engineering breakdowns for Microsoft Power Platform leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="p-8 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover: flex flex-col justify-between group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: article.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: `${article.color}15`,
                        color: article.color,
                        border: `1px solid ${article.color}30`,
                      }}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C8C0DD]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-xl text-white group-hover:text-[#FF5424] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-[#C8C0DD] leading-relaxed mb-6 font-body">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {article.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#16072E] border border-white/5 text-[10px] font-mono text-[#C8C0DD]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C8C0DD]">
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#FF5424] group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaOfferBand />
    </div>
  );
}
