import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Powercraft — Schedule a Microsoft Power Platform Consultation",
  description:
    "Get in touch with Powercraft. Schedule a consultation or talk directly to a Microsoft Power Platform Solution Architect.",
};

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1C0B3B] border border-[#FF5424]/20 text-xs font-mono text-[#FF5424]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">CONTACT US</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Let&apos;s Build Solutions That Scale
            </h1>

            <p className="text-lg text-[#C8C0DD] font-body leading-relaxed">
              Whether you need rapid Power Apps development, CoE governance implementation, Power BI dashboards, or tailored team training, we&apos;re ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 bg-[#0C0B18] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Booking Card & Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Booking Highlight Box */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1B1936] to-[#141228] border border-[#FF5424]/30 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF5424]/10 text-xs font-mono text-[#FF5424]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>DIRECT ARCHITECT CALENDAR</span>
                </div>

                <h2 className="font-display font-bold text-2xl text-white leading-tight">
                  Book a Free 30-Minute Discovery Session
                </h2>

                <p className="text-xs sm:text-sm text-[#C8C0DD] leading-relaxed">
                  Skip the back-and-forth emails. Pick a live time directly on our Lead Architect&apos;s Microsoft Outlook calendar for a confidential scoping call.
                </p>

                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-[#16072E] font-display font-bold text-xs tracking-wide text-center flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#16072E]" />
                  <span>Open Official Outlook Booking Page</span>
                </a>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <Mail className="w-5 h-5 text-[#FF5424] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase tracking-wider">
                      DIRECT EMAIL
                    </div>
                    <a
                      href="mailto:contact@powercraft.tech"
                      className="font-mono text-sm text-white hover:text-[#FF5424] transition-colors"
                    >
                      contact@powercraft.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <Phone className="w-5 h-5 text-[#FF5424] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase tracking-wider">
                      DIRECT PHONE
                    </div>
                    <a
                      href="tel:+32476606476"
                      className="font-mono text-sm text-white hover:text-[#FF5424] transition-colors"
                    >
                      +32 476-606-476
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-[#FF5424] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase tracking-wider">
                      HEADQUARTERS
                    </div>
                    <div className="font-mono text-sm text-white">
                      Frederik de merodestraat, Belgium
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#1C0B3B] border border-white/[0.06]">
                  <Clock className="w-5 h-5 text-[#FF5424] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-[#C8C0DD] uppercase tracking-wider">
                      SERVICE HOURS & SLA
                    </div>
                    <div className="text-xs text-white/90">
                      Monday – Friday: 08:30 – 18:00 CET
                    </div>
                    <div className="text-[11px] font-mono text-[#FF5424]">
                      Emergency Enterprise SLA Coverage Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="font-mono text-xs font-semibold text-[#FF5424] uppercase tracking-widest">
                  ONLINE INQUIRY
                </span>
                <h2 className="font-display font-bold text-2xl text-white mt-1">
                  Send Project Specs or Inquiries
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
