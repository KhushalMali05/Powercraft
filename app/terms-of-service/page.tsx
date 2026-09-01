import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Powercraft",
  description: "Powercraft Terms of Service and Consulting Agreement Standards.",
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#C8C0DD] hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </Link>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] space-y-6">
        <div className="flex items-center gap-3 text-[#FF5424]">
          <Shield className="w-6 h-6" />
          <h1 className="font-display font-bold text-3xl text-white">Terms of Use</h1>
        </div>

        <p className="text-xs font-mono text-[#C8C0DD]">Last updated: August 2026</p>

        <div className="space-y-4 text-sm text-[#C8C0DD] leading-relaxed">
          <h2 className="font-display font-semibold text-lg text-white pt-2">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using the Powercraft website, scheduling consultations, or utilizing our consulting services, you agree to be bound by these terms.
          </p>

          <h2 className="font-display font-semibold text-lg text-white pt-2">
            2. Intellectual Property & Ownership
          </h2>
          <p>
            All custom Power Apps solutions, flows, and Power BI models engineered specifically for client engagements under paid statements of work (SOW) transfer full ownership to the client upon project completion.
          </p>

          <h2 className="font-display font-semibold text-lg text-white pt-2">
            3. Limitation of Liability
          </h2>
          <p>
            Powercraft provides strategic advisory and low-code engineering according to industry standard Microsoft architectures. Clients retain administrative control of tenant-level security configurations and DLP policies.
          </p>
        </div>
      </div>
    </div>
  );
}
