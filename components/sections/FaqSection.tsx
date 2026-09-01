"use client";

import React from "react";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { HelpCircle } from "lucide-react";

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "faq-1",
    question: "What is Microsoft Power Platform and how can it help my business?",
    answer:
      "Microsoft Power Platform is a suite of low-code tools—Power Apps, Power Automate, Power BI, and Copilot Studio—that enables organizations to build custom apps, automate repetitive workflows, analyze enterprise data in real-time, and leverage conversational generative AI to drive productivity without massive engineering timelines.",
  },
  {
    id: "faq-2",
    question: "Why should I choose Powercraft for Power Platform consulting?",
    answer:
      "Powercraft specializes exclusively in the Microsoft Power Platform ecosystem. Rather than delivering black-box code that creates vendor lock-in, we focus on an enablement-first model: we build enterprise-grade solutions, deploy strict Center of Excellence (CoE) security guardrails, and train your internal teams to sustain and scale innovation.",
  },
  {
    id: "faq-3",
    question: "Can Power Platform integrate with our existing systems like SharePoint, SAP, or Dynamics 365?",
    answer:
      "Yes. Power Platform offers over 1,000 pre-built connectors and custom REST API integrations. We routinely integrate solutions with Microsoft 365, SharePoint, Azure SQL, Dynamics 365, Salesforce, SAP, Oracle ERP, and legacy on-premises databases via secure On-Premises Data Gateways.",
  },
  {
    id: "faq-4",
    question: "How long does it take to build and launch a Power Apps solution?",
    answer:
      "Depending on the complexity, a production-ready Power Apps solution is typically designed, tested, governed, and launched in as little as 2 to 6 weeks. Our sprint-based methodology delivers working software incrementally, allowing your business to realize value immediately.",
  },
  {
    id: "faq-5",
    question: "Do you offer training and support for Power Platform users?",
    answer:
      "Absolutely. We offer tailored, role-based enablement programs: IT Admin governance training, Citizen Developer maker bootcamps, and executive analytics workshops. We provide complete documentation, hands-on hackathons, and ongoing architectural advisory.",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0C0B18] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF5424]" />
            <span className="uppercase tracking-wider font-semibold">COMMON QUESTIONS</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-[#C8C0DD] font-body leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our Microsoft Power Platform consulting, delivery timelines, and governance frameworks.
          </p>
        </div>

        <Accordion items={FAQ_ITEMS} defaultOpenId="faq-1" />
      </div>
    </section>
  );
};
