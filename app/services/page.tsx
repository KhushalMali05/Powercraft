import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AppWindow,
  Workflow,
  BarChart3,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { CtaOfferBand } from "@/components/sections/CtaOfferBand";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Microsoft Power Platform Consulting Services | Powercraft",
  description:
    "Explore our complete Microsoft Power Platform consulting services: Power Apps, Power Automate, Power BI, Copilot AI, Governance & CoE, and Training.",
};

const SERVICES_DETAILED = [
  {
    id: "power-apps-development",
    title: "Power Apps Development",
    slug: "power-apps-development",
    color: "#FF5424",
    icon: AppWindow,
    iconImg: "/assets/images/power-apps-official.png",
    tag: "Application Modernization",
    summary:
      "Custom low-code applications built rapidly to replace brittle spreadsheets and paper-based processes with enterprise-grade mobile and desktop tools.",
    bullets: [
      "Custom Canvas & Model-driven Apps",
      "Responsive UI & Native Mobile Optimization",
      "Dataverse, SQL & SharePoint Data Integrations",
      "Role-based Logic, Security & Granular Permissions",
      "AI-enabled Input & Optical Field Detection with Copilot",
    ],
  },
  {
    id: "power-automate-consulting",
    title: "Power Automate Workflows",
    slug: "power-automate-consulting",
    color: "#FF5424",
    icon: Workflow,
    iconImg: "/assets/images/power-automate-official.png",
    tag: "Process Automation",
    summary:
      "Automate approvals, reminders, document workflows, and cross-system notifications across your entire Microsoft 365 and external SaaS stack.",
    bullets: [
      "Multi-stage Approval Flows, Escalations & SLA Timers",
      "Automated Document Generation, PDF Routing & Signing",
      "Native Outlook, Microsoft Teams & SharePoint Webhooks",
      "Scheduled Batch Triggers & Real-time Event Handling",
      "Multi-environment ALM Flow Deployment & Solution Packaging",
    ],
  },
  {
    id: "power-bi-analytics",
    title: "Power BI Dashboards & Analytics",
    slug: "power-bi-analytics",
    color: "#FF5424",
    icon: BarChart3,
    iconImg: "/assets/images/power-bi-official.png",
    tag: "Business Intelligence",
    summary:
      "Turn raw enterprise data into executive clarity. We build lightning-fast data models, automated refreshes, and interactive KPI control towers.",
    bullets: [
      "Data Modeling, Cleansing & Incremental ETL Refreshes",
      "Live Executive Dashboards & Operational KPI Boards",
      "Advanced Power Query & High-Performance DAX Measures",
      "Embedded Visuals inside Power Apps, Teams & SharePoint",
      "Secure Workspace Deployment with Row-Level Security (RLS)",
    ],
  },
  {
    id: "microsoft-copilot-ai-integration",
    title: "Copilot & AI Integration",
    slug: "microsoft-copilot-ai-integration",
    color: "#FF5424",
    icon: Sparkles,
    iconImg: "/assets/images/copilot-official.png",
    tag: "Generative AI Solutions",
    summary:
      "Put generative AI to work directly inside your daily workflows using Microsoft Copilot Studio and pre-built Azure OpenAI models.",
    bullets: [
      "Natural Language App & Workflow Generation",
      "Custom Copilot Studio Chatbots with Enterprise Data Grounding",
      "AI Prompts, Document Summarization & Smart Categorization",
      "AI-assisted Forms & Optical Character Recognition (OCR)",
      "Strict Enterprise Data Privacy & Zero External Data Leakage",
    ],
  },
  {
    id: "power-platform-governance",
    title: "Power Platform Governance & CoE",
    slug: "power-platform-governance",
    color: "#FF5424",
    icon: ShieldCheck,
    iconImg: "/assets/images/sharepoint-official.png",
    tag: "Security & Center of Excellence",
    summary:
      "Enterprise governance that empowers citizen developers instead of suffocating them. Establish security guardrails, DLP, and centralized telemetry.",
    bullets: [
      "Multi-Tenant Environment Strategy (Dev / Test / Prod)",
      "Data Loss Prevention (DLP) & Connector Security Policies",
      "Power Platform Admin Center Configuration & Audit Trails",
      "Microsoft CoE Starter Kit Deployment & Telemetry Dashboard",
      "Application Lifecycle Management (ALM) & Solution Pipelines",
    ],
  },
  {
    id: "power-platform-training-adoption",
    title: "Training & Adoption Enablement",
    slug: "power-platform-training-adoption",
    color: "#FF5424",
    icon: GraduationCap,
    iconImg: "/assets/images/power_logo.png",
    tag: "People Enablement",
    summary:
      "Empower your workforce to build securely. We deliver hands-on maker bootcamps, IT admin coaching, and champion network enablement.",
    bullets: [
      "Role-Based IT Admin & Low-Code Maker Training Pathways",
      "Internal Champion Networks & Community Hackathons",
      "Interactive Workshops with Hands-On Enterprise Use Cases",
      "Custom Documentation, App Blueprints & Governance Specs",
      "Post-Training Office Hours & Architectural Code Reviews",
    ],
  },
];

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink";

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424]" />
              <span className="uppercase tracking-wider font-semibold">SERVICES</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Power Platform Consulting That Drives Results
            </h1>

            <p className="text-lg text-[#C8C0DD] font-body leading-relaxed">
              We help organizations simplify operations, reduce manual effort, and scale innovation—using Microsoft Power Platform. Our consulting services combine low-code agility with enterprise-grade governance and real user enablement.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Services Deep Dive Grid */}
      <section className="py-16 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES_DETAILED.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-12 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] relative overflow-hidden hover:border-white/20 transition-all"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: service.color }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md overflow-hidden"
                      >
                        <img
                          src={service.iconImg}
                          alt={service.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#C8C0DD] leading-relaxed font-body pt-2">
                      {service.summary}
                    </p>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider border border-white/10 transition-colors group"
                      >
                        <span>Detailed Architecture & Specs</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={BOOKING_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#FF5424] hover:underline"
                      >
                        Book Discovery Call →
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#110F22] border border-white/[0.06]">
                    <div className="font-mono text-xs text-[#FF5424] uppercase tracking-wider mb-4 font-semibold">
                      Included Capabilities & Standards
                    </div>
                    <div className="space-y-3">
                      {service.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#FFFFFF]/90"
                        >
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: service.color }}
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Differentiators Band */}
      <section className="py-20 bg-[#16072E] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              What Makes Our Delivery Different
            </h2>
            <p className="text-sm text-[#C8C0DD]">
              Enterprise-level architecture with agile, enablement-first execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#1C0B3B] border border-white/[0.08]">
              <div className="text-sm font-display font-bold text-white mb-2">
                100% Platform Focus
              </div>
              <p className="text-xs text-[#C8C0DD] leading-relaxed">
                Deep specialization in Microsoft Power Platform only—no generic multi-tool distraction.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1C0B3B] border border-white/[0.08]">
              <div className="text-sm font-display font-bold text-white mb-2">
                Enterprise Standards
              </div>
              <p className="text-xs text-[#C8C0DD] leading-relaxed">
                Fortune 500 security rigor and ALM pipelines tailored for SME agility.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1C0B3B] border border-white/[0.08]">
              <div className="text-sm font-display font-bold text-white mb-2">
                Enablement-First
              </div>
              <p className="text-xs text-[#C8C0DD] leading-relaxed">
                We embed training and hackathons in every sprint so your team owns the outcome.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1C0B3B] border border-white/[0.08]">
              <div className="text-sm font-display font-bold text-white mb-2">
                Built-In Governance
              </div>
              <p className="text-xs text-[#C8C0DD] leading-relaxed">
                DLP security and Center of Excellence guardrails deployed from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <section className="py-20 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white mb-2">
              Request a Custom Architecture Proposal
            </h2>
            <p className="text-sm text-[#C8C0DD]">
              Share your business requirements and receive a scoped proposal within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaOfferBand />
    </div>
  );
}
