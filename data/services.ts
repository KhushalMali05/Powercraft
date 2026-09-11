import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "power-apps",
    title: "Power Apps Development",
    slug: "power-apps-development",
    href: "/services/power-apps-development",
    shortDesc:
      "Custom apps without the custom dev time. Replace spreadsheets and manual tasks with scalable solutions.",
    iconImg: "/assets/images/power-apps-official.png",
    color: "#FF5424",
    tag: "01 / Canvas & Model-Driven",
    highlights: [
      "Custom Canvas & Model-driven Apps",
      "Responsive UI & Mobile Optimization",
      "Dataverse & SharePoint Integrations",
      "Role-based Logic & Access Control",
    ],
  },
  {
    id: "power-automate",
    title: "Power Automate Workflows",
    slug: "power-automate-consulting",
    href: "/services/power-automate-consulting",
    shortDesc:
      "Automate approvals, notifications, and business processes—faster than ever across all your systems.",
    iconImg: "/assets/images/power-automate-official.png",
    color: "#FF5424",
    tag: "02 / Process Automation",
    highlights: [
      "Multi-stage Approval Flows & SLA Timers",
      "Document Routing & PDF Generation",
      "Teams, Outlook & SAP Integrations",
      "ALM Multi-environment Management",
    ],
  },
  {
    id: "power-bi",
    title: "Power BI Dashboards",
    slug: "power-bi-analytics",
    href: "/services/power-bi-analytics",
    shortDesc:
      "Turn data into decisions. We build live dashboards that show what's happening—right now.",
    iconImg: "/assets/images/power-bi-official.png",
    color: "#FF5424",
    tag: "03 / Business Intelligence",
    highlights: [
      "Complex DAX Modeling & Power Query",
      "Executive KPI Control Centers",
      "Embedded Visuals in Power Apps & Teams",
      "Secure Row-Level Security (RLS)",
    ],
  },
  {
    id: "copilot-ai",
    title: "Copilot & AI Integration",
    slug: "microsoft-copilot-ai-integration",
    href: "/services/microsoft-copilot-ai-integration",
    shortDesc:
      "Put generative AI to work in your apps, flows, and dashboards with Microsoft Copilot Studio.",
    iconImg: "/assets/images/copilot-official.png",
    color: "#FF5424",
    tag: "04 / Applied Generative AI",
    highlights: [
      "Custom Copilot Studio Chatbots",
      "AI Prompts & Document Summarization",
      "Smart Field Auto-fill & Optical Extraction",
      "Enterprise AI Security & Data Guardrails",
    ],
  },
  {
    id: "governance-coe",
    title: "Governance & CoE",
    slug: "power-platform-governance",
    href: "/services/power-platform-governance",
    shortDesc:
      "Governance that doesn't get in the way of growth. Environment strategy, DLP, and CoE setup included.",
    iconImg: "/assets/images/governance-official.png",
    color: "#FF5424",
    tag: "05 / Security & Administration",
    highlights: [
      "CoE Starter Kit Deployment & Tuning",
      "Data Loss Prevention (DLP) Policies",
      "Multi-Tenant Environment Architecture",
      "Shadow IT Auditing & Inventorying",
    ],
  },
  {
    id: "training-adoption",
    title: "Training & Adoption",
    slug: "power-platform-training-adoption",
    href: "/services/power-platform-training-adoption",
    shortDesc:
      "People make platforms powerful. We help your users master Power Platform with training that works.",
    iconImg: "/assets/images/training-official.png",
    color: "#FF5424",
    tag: "06 / People Enablement",
    highlights: [
      "Role-based IT Admin & Maker Bootcamps",
      "Citizen Developer Champions Program",
      "Hands-on Labs with Real Company Data",
      "On-demand Video Hubs & App Templates",
    ],
  },
];
