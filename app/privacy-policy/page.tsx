import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Powercraft",
  description: "Powercraft Privacy Policy and Data Protection standards.",
};

export default function PrivacyPolicyPage() {
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
          <ShieldCheck className="w-6 h-6" />
          <h1 className="font-display font-bold text-3xl text-white">Privacy Policy</h1>
        </div>

        <p className="text-xs font-mono text-[#C8C0DD]">Last updated: August 2026</p>

        <div className="space-y-4 text-sm text-[#C8C0DD] leading-relaxed">
          <h2 className="font-display font-semibold text-lg text-white pt-2">
            1. Overview & Commitment
          </h2>
          <p>
            Powercraft (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of our clients, prospective partners, and visitors. We adhere to European General Data Protection Regulation (GDPR) standards.
          </p>

          <h2 className="font-display font-semibold text-lg text-white pt-2">
            2. Data We Collect
          </h2>
          <p>
            We only collect personal information you explicitly provide when submitting contact inquiries or booking consultation appointments (such as your name, business email, organization, and project requirements).
          </p>

          <h2 className="font-display font-semibold text-lg text-white pt-2">
            3. Client Environment Security
          </h2>
          <p>
            During consulting and implementation engagements, Powercraft operates strictly within your tenant boundaries using role-based access, guest accounts, and Data Loss Prevention (DLP) policies. We do not extract, store, or train AI models on customer proprietary data.
          </p>

          <h2 className="font-display font-semibold text-lg text-white pt-2">
            4. Contact
          </h2>
          <p>
            For privacy-related inquiries, please contact our Data Protection Officer at{" "}
            <a href="mailto:contact@powercraft.tech" className="text-[#FF5424] underline">
              contact@powercraft.tech
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
