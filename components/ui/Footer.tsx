import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100424] border-t border-white/[0.08] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Col 1 & 2: Brand and Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />

            <p className="text-sm text-[#C8C0DD] leading-relaxed max-w-sm">
              Enterprise-Grade Microsoft Power Platform Solutions—Built Right, Governed Smart. We empower organizations to automate, analyze, and scale with confidence.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#FF5424] bg-[#FF5424]/10 px-3 py-1.5 rounded-full border border-[#FF5424]/20">
                <span className="w-2 h-2 rounded-full bg-[#FF5424] animate-pulse" />
                Microsoft Certified Consulting Partner
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[#FF5424] uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/" className="text-[#C8C0DD] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[#C8C0DD] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#C8C0DD] hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[#C8C0DD] hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#C8C0DD] hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-[#C8C0DD] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Specialized Services */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[#FF5424] uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8C0DD]">
              <li>
                <Link
                  href="/services/power-apps-development"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Power Apps Dev</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5424]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/power-automate-consulting"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Power Automate Workflows</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5424]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/power-bi-analytics"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Power BI Dashboards</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5424]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/microsoft-copilot-ai-integration"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Copilot & AI Integration</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5424]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/power-platform-governance"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Governance & CoE Setup</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5424]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/power-platform-training-adoption"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Training & Enablement</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5424]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Contact Details */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-[#FF5424] uppercase tracking-widest mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-[#C8C0DD]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FF5424] shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@powercraft.tech"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  contact@powercraft.tech
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5424] shrink-0 mt-0.5" />
                <a
                  href="tel:+32476606476"
                  className="hover:text-white transition-colors"
                >
                  +32 476-606-476
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5424] shrink-0 mt-0.5" />
                <span>Frederik de merodestraat, Belgium</span>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t border-white/[0.06]">
              <a
                href="https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#FF5424] hover:underline flex items-center gap-1"
              >
                Book with Solution Architect →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#C8C0DD]">
          <div>
            © {new Date().getFullYear()} Powercraft. Enterprise-Grade Power Platform Solutions.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-[#FF5424]">ISO / DLP Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
