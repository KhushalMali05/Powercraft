import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AppWindow,
  Workflow,
  BarChart3,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { CtaOfferBand } from "@/components/sections/CtaOfferBand";
import { ContactForm } from "@/components/ui/ContactForm";

interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  color: string;
  icon: React.ElementType;
  summary: string;
  heroPitch: string;
  features: { title: string; desc: string }[];
  deliverables: string[];
  techStack: string[];
}

const SERVICES_REGISTRY: Record<string, ServiceDetail> = {
  "power-apps-development": {
    slug: "power-apps-development",
    title: "Power Apps Development & Modernization",
    category: "Rapid Low-Code Applications",
    color: "#FF5424",
    icon: AppWindow,
    heroPitch:
      "Replace fragile spreadsheets, paper forms, and slow custom dev with high-performance Canvas and Model-driven applications tailored to your exact business logic.",
    summary:
      "We design responsive, intuitive Power Apps that seamlessly connect with Dataverse, SharePoint, SQL, and enterprise ERPs like SAP and Dynamics 365, delivering production apps in 2 to 6 weeks.",
    features: [
      {
        title: "Canvas & Model-Driven Apps",
        desc: "Tailored pixel-perfect UI for mobile field workers or complex relational Dataverse forms for back-office administrators.",
      },
      {
        title: "Enterprise Dataverse & ERP Integrations",
        desc: "Direct connectors to Microsoft 365, SAP, Salesforce, Oracle, and on-premises SQL databases with zero data silos.",
      },
      {
        title: "Offline-First & Mobile Optimization",
        desc: "Field-ready mobile apps with local caching, barcode scanning, signature capture, and automatic cloud synchronization.",
      },
      {
        title: "Role-Based Security & Audit Trails",
        desc: "Granular permissions, Entra ID authentication, row-level data access, and automated change history logging.",
      },
    ],
    deliverables: [
      "Custom Canvas / Model-Driven Solution Package",
      "Dataverse Schema & Relational Entity Architecture",
      "Role-Based Access Control Matrix",
      "User Acceptance Testing (UAT) Scripts & Admin Documentation",
    ],
    techStack: ["Power Apps", "Dataverse", "SharePoint", "Power FX", "Azure Entra ID"],
  },
  "power-automate-consulting": {
    slug: "power-automate-consulting",
    title: "Power Automate Workflow Automation",
    category: "Intelligent Process Automation",
    color: "#FF5424",
    icon: Workflow,
    heroPitch:
      "Eliminate repetitive manual tasks, automate multi-level approvals, and synchronize data across disparate cloud and legacy software systems.",
    summary:
      "We build reliable, self-healing automated cloud and desktop flows that reduce cycle times from days to minutes, complete with error alerting and SLA monitoring.",
    features: [
      {
        title: "Multi-Tier Approval Architectures",
        desc: "Dynamic parallel approvals, manager escalations, out-of-office delegations, and Microsoft Teams actionable cards.",
      },
      {
        title: "Automated Document Processing & PDF Generation",
        desc: "Generate custom invoices, contracts, and audit reports from templates, route for e-signatures, and archive automatically.",
      },
      {
        title: "Cross-System Webhooks & Event Triggers",
        desc: "Seamless synchronization between Outlook, SharePoint, Teams, SAP, Zendesk, and custom REST API endpoints.",
      },
      {
        title: "Automated Error Handling & Telemetry",
        desc: "Built-in try-catch scopes, Slack/Teams failure alerts, retry logic, and run-history dashboards.",
      },
    ],
    deliverables: [
      "Production-Ready Power Automate Cloud Flows",
      "Automated Teams Adaptive Card Approval Cards",
      "Failure Notification & Retry Logic Architecture",
      "ALM Solution Export with Environment Variables",
    ],
    techStack: ["Power Automate", "Microsoft Teams", "SharePoint", "JSON Webhooks", "Azure Logic Apps"],
  },
  "power-bi-analytics": {
    slug: "power-bi-analytics",
    title: "Power BI Dashboards & Enterprise Analytics",
    category: "Real-Time Business Intelligence",
    color: "#FF5424",
    icon: BarChart3,
    heroPitch:
      "Transform disparate spreadsheets and siloed databases into intuitive, live executive dashboards that drive faster decision-making.",
    summary:
      "Our Microsoft-certified Power BI specialists build scalable star-schema data models, complex DAX calculations, and pixel-perfect interactive visuals.",
    features: [
      {
        title: "Complex DAX Modeling & Data Cleansing",
        desc: "High-performance data models, calculated measures, time-intelligence comparisons (YoY, MoM), and automated Power Query ETL.",
      },
      {
        title: "Executive & Operational KPI Command Centers",
        desc: "Interactive dashboards with drill-through navigation, mobile layouts, and scheduled automated data refresh cycles.",
      },
      {
        title: "Embedded Analytics in Power Apps & Teams",
        desc: "Embed live reports directly inside your line-of-business Power Apps or Microsoft Teams channels for contextual insights.",
      },
      {
        title: "Row-Level Security (RLS) & Workspace Governance",
        desc: "Ensure executives, regional managers, and frontline staff see only the specific data partitions they are authorized to view.",
      },
    ],
    deliverables: [
      "Optimized Star-Schema Power BI Semantic Model (.pbix)",
      "Executive Summary & Operational Drill-Down Reports",
      "Automated Gateway & Data Refresh Configuration",
      "Row-Level Security (RLS) Configuration Matrix",
    ],
    techStack: ["Power BI", "DAX", "Power Query (M)", "Azure SQL", "Fabric"],
  },
  "microsoft-copilot-ai-integration": {
    slug: "microsoft-copilot-ai-integration",
    title: "Microsoft Copilot & Generative AI Integration",
    category: "Applied Artificial Intelligence",
    color: "#FF5424",
    icon: Sparkles,
    heroPitch:
      "Deploy custom AI assistants and generative Copilots directly into your Power Apps, Teams, and workflows with enterprise-grade data security.",
    summary:
      "We leverage Microsoft Copilot Studio and Azure OpenAI to build context-aware assistants that query your SharePoint knowledge bases, summarize documents, and draft responses.",
    features: [
      {
        title: "Custom Copilot Studio AI Agents",
        desc: "Conversational agents grounded in your internal SharePoint documents, policies, and ERP databases with strict privacy controls.",
      },
      {
        title: "Generative AI Inside Power Apps",
        desc: "Natural language querying, intelligent form auto-completion, and automatic optical character recognition (OCR) for receipts/invoices.",
      },
      {
        title: "AI Prompt Engineering & Summarization",
        desc: "Automated ticket categorization, sentiment analysis, email draft synthesis, and multi-lingual translation pipelines.",
      },
      {
        title: "Strict Enterprise AI Guardrails",
        desc: "Ensure company data is never used to train public models, enforcing tenant-isolated Azure OpenAI compliance.",
      },
    ],
    deliverables: [
      "Custom Microsoft Copilot Studio Bot Configuration",
      "Grounded Knowledge Source Integration (SharePoint / Dataverse)",
      "Prompt Optimization Blueprints & Fallback Logic",
      "AI Safety, Privacy & Hallucination Mitigation Guidelines",
    ],
    techStack: ["Copilot Studio", "Azure OpenAI", "Power Apps AI Builder", "Dataverse"],
  },
  "power-platform-governance": {
    slug: "power-platform-governance",
    title: "Power Platform Governance & Center of Excellence",
    category: "Enterprise Security & Administration",
    color: "#FF5424",
    icon: ShieldCheck,
    heroPitch:
      "Govern your Power Platform ecosystem at enterprise scale without choking maker innovation, using the Microsoft CoE Starter Kit and strict DLP policies.",
    summary:
      "We deploy multi-environment architectures (Dev, Test, Prod), automate environment provisioning, eliminate  IT risks, and provide complete audit telemetry.",
    features: [
      {
        title: "Microsoft CoE Starter Kit Deployment",
        desc: "Full telemetry dashboard monitoring all apps, flows, makers, and connectors across your entire Microsoft 365 tenant.",
      },
      {
        title: "Data Loss Prevention (DLP) Policies",
        desc: "Enforce strict security boundaries preventing organizational data from leaking to unapproved consumer connectors.",
      },
      {
        title: "Application Lifecycle Management (ALM)",
        desc: "Automated solution packaging, Git/Azure DevOps integration, and managed solution deployment pipelines.",
      },
      {
        title: "Automated Maker Onboarding & Auditing",
        desc: "Self-service app submission workflows, compliance assessments, and orphan app cleanup automations.",
      },
    ],
    deliverables: [
      "Production CoE Starter Kit Environment & Power BI Dashboard",
      "Tenant DLP Policy Architecture & Connector Classifications",
      "Environment Strategy Blueprint (Dev / Stage / Prod)",
      "ALM Pipeline Setup & Azure DevOps / GitHub Workflow",
    ],
    techStack: ["Power Platform CoE", "Power Platform Admin Center", "Azure DevOps", "DLP Policies"],
  },
  "power-platform-training-adoption": {
    slug: "power-platform-training-adoption",
    title: "Power Platform Training & Adoption Enablement",
    category: "Organizational Capability Building",
    color: "#FF5424",
    icon: GraduationCap,
    heroPitch:
      "Empower your workforce with hands-on maker bootcamps, IT governance training, and an internal Champions network that drives sustained innovation.",
    summary:
      "We turn curious employees into productive citizen developers through real-world scenario workshops, reusable component libraries, and personalized coaching.",
    features: [
      {
        title: "Role-Based Maker & Admin Bootcamps",
        desc: "Custom curricula tailored for business makers (HR, Finance, Ops) and IT Administrators covering best practices from day one.",
      },
      {
        title: "Internal Champions Program & Hackathons",
        desc: "Design structured 1-day or multi-week hackathons where participants solve actual company workflow bottlenecks.",
      },
      {
        title: "On-Demand Playbooks & Blueprints",
        desc: "Pre-built UI template libraries, Power FX formula cheatsheets, and step-by-step video tutorials branded for your organization.",
      },
      {
        title: "Maker Office Hours & Code Reviews",
        desc: "Bi-weekly drop-in architectural reviews with our senior solution architects to unblock maker projects securely.",
      },
    ],
    deliverables: [
      "Custom Branded Training Playbook & Video Recordings",
      "Starter UI Template Kit & Reusable Power Apps Components",
      "Hackathon Framework & Scoring Matrix",
      "30/60/90 Day Maker Adoption & Skill Progression Roadmap",
    ],
    techStack: ["Power Apps", "Power Automate", "Power BI", "Champions Network", "LMS Integration"],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES_REGISTRY).map((slug) => ({ slug }));
}

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = SERVICES_REGISTRY[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <Link
                href="/services"
                className="text-xs font-mono text-[#C8C0DD] hover:text-white transition-colors"
              >
                Services
              </Link>
              <span className="text-white/20 font-mono">/</span>
              <span
                className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${service.color}15`,
                  color: service.color,
                  border: `1px solid ${service.color}30`,
                }}
              >
                {service.category}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mt-1"
                style={{
                  backgroundColor: `${service.color}20`,
                  color: service.color,
                  border: `1px solid ${service.color}40`,
                }}
              >
                <Icon className="w-7 h-7" />
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                {service.title}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#FFFFFF]/90 font-body leading-relaxed max-w-3xl">
              {service.heroPitch}
            </p>

            <p className="text-base text-[#C8C0DD] font-body leading-relaxed max-w-3xl">
              {service.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-[#16072E] font-display font-bold text-xs tracking-wide transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Scoping Session</span>
              </a>

              <Link
                href="/contact-us"
                className="px-6 py-3.5 rounded-xl bg-[#1C0B3B] hover:bg-[#1E1C38] text-white font-mono text-xs tracking-wider border border-white/10 transition-colors"
              >
                Talk to Solution Architect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-semibold text-[#FF5424] uppercase tracking-widest">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-1">
              What We Engineer & Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((f, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] relative hover:border-white/20 transition-all"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold mb-4"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#C8C0DD] leading-relaxed font-body">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Technology Stack */}
      <section className="py-20 bg-[#16072E] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Deliverables */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#1C0B3B] border border-white/[0.08]">
              <h3 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#FF5424]" />
                <span>Standard Project Deliverables</span>
              </h3>
              <div className="space-y-4">
                {service.deliverables.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-xl bg-[#110F22] border border-white/[0.06] flex items-start gap-3"
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-sm text-white/90 font-mono">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Architecture */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-[#FF5424]" />
                  <span>Integrated Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-[#16072E] border border-white/10 text-xs font-mono text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#C8C0DD] leading-relaxed">
                  All solutions adhere to Microsoft official ALM best practices, with tenant DLP enforcement and role-based permissions standard.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6">
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-[#16072E] font-display font-bold text-xs tracking-wide text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 30-Min Architecture Discovery</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive In-Page Contact */}
      <section className="py-20 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-white mb-2">
              Ready to Discuss {service.title}?
            </h2>
            <p className="text-sm text-[#C8C0DD]">
              Send your project specs to receive estimated timeline and sprint architecture.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaOfferBand />
    </div>
  );
}
