import React from "react";
import type { Metadata } from "next";
import { StatsSection } from "@/components/sections/StatsSection";
import { OurApproachSection } from "@/components/sections/OurApproachSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaOfferBand } from "@/components/sections/CtaOfferBand";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Sparkles, Quote, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Powercraft — Microsoft Power Platform Consulting",
  description:
    "Empowering Enterprises with Microsoft Power Platform Expertise — Strategy, Governance, and Scalable Solutions That Drive Digital Transformation.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">ABOUT US</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Power Platform Consulting for Modern Teams
            </h1>

            <p className="text-lg text-[#C8C0DD] font-body leading-relaxed">
              Empowering Enterprises with Microsoft Power Platform Expertise — Strategy, Governance, and Scalable Solutions That Drive Digital Transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-16 bg-[#0C0B18] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF5424]/10 text-xs font-mono text-[#FF5424] mb-6">
                <span>OUR MISSION</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                To simplify technology and empower people.
              </h2>
              <p className="text-sm sm:text-base text-[#C8C0DD] leading-relaxed font-body">
                We believe digital transformation should be accessible, secure, and scalable—even for teams without a full IT department. That&apos;s why we built a Power Platform consultancy rooted in enablement, not just development.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C0B3B] border border-white/[0.08] relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF5424]/10 text-xs font-mono text-[#FF5424] mb-6">
                <span>OUR VISION</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Democratized, governed enterprise innovation.
              </h2>
              <p className="text-sm sm:text-base text-[#C8C0DD] leading-relaxed font-body">
                To build a future where every business team is equipped with safe, enterprise-governed digital tools—democratizing automation, accelerating productivity, and eliminating manual bottlenecks across entire organizations.
              </p>
            </div>
          </div>

          {/* Why We Exist Narrative & Pull Quote */}
          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#131124] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs text-[#FF5424] uppercase tracking-widest font-semibold">
                WHY WE EXIST
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Pairing Technology with True Enablement
              </h3>
              <p className="text-sm text-[#C8C0DD] leading-relaxed font-body">
                We started this firm after seeing too many Power Platform projects fall short—not because of technical limitations, but because people weren&apos;t enabled to use the tools effectively. Whether it&apos;s a low-code app, automated workflow, or AI-enabled dashboard, success comes from pairing solutions with education, governance, and thoughtful rollout.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#1C0B3B] border-l-4 border-l-[#FF5424] border border-white/5">
              <Quote className="w-6 h-6 text-[#FF5424] mb-2" />
              <p className="font-display text-lg text-white font-medium italic">
                &ldquo;We don&apos;t just ship solutions. We equip teams to grow beyond us.&rdquo;
              </p>
              <div className="text-xs font-mono text-[#C8C0DD] mt-3">
                — Powercraft Founding Principle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Approach (Solve, Teach, Scale) */}
      <OurApproachSection />

      {/* Who We Are & What Makes Us Different */}
      <WhoWeAreSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Block Section on About Page */}
      <section className="py-24 bg-[#0C0B18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
                <span className="uppercase tracking-wider font-semibold">CONTACT</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Get In Touch
              </h2>

              <p className="text-sm text-[#C8C0DD] leading-relaxed font-body">
                Let&apos;s discuss your project and see how we can turn it into an amazing experience for your teams and customers.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <Mail className="w-5 h-5 text-[#FF5424] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase">EMAIL</div>
                    <a
                      href="mailto:contact@powercraft.tech"
                      className="font-mono text-sm text-white hover:text-[#FF5424] transition-colors"
                    >
                      contact@powercraft.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <Phone className="w-5 h-5 text-[#FF5424] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase">CONTACT</div>
                    <a
                      href="tel:+32476606476"
                      className="font-mono text-sm text-white hover:text-[#FF5424] transition-colors"
                    >
                      +32 476-606-476
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-[#FF5424] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase">ADDRESS</div>
                    <div className="font-mono text-sm text-white">
                      Frederik de merodestraat, Belgium
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Working Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CtaOfferBand />
    </div>
  );
}
