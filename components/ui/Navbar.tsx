"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import {
  AppWindow,
  Workflow,
  BarChart3,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_NAV = [
  {
    name: "Power Apps Development",
    href: "/services/power-apps-development",
    desc: "Custom low-code canvas and model-driven enterprise apps.",
    iconImg: "/assets/images/power-apps-official.png",
    color: "#FF5424",
  },
  {
    name: "Power Automate Workflows",
    href: "/services/power-automate-consulting",
    desc: "Automated business logic, approvals, and system integration.",
    iconImg: "/assets/images/power-automate-official.png",
    color: "#FF5424",
  },
  {
    name: "Power BI Analytics",
    href: "/services/power-bi-analytics",
    desc: "Interactive visual dashboards, DAX modeling, and live metrics.",
    iconImg: "/assets/images/power-bi-official.png",
    color: "#FF5424",
  },
  {
    name: "Copilot & AI Integration",
    href: "/services/microsoft-copilot-ai-integration",
    desc: "Generative AI assistants, prompt engineering, and smart agents.",
    iconImg: "/assets/images/copilot-official.png",
    color: "#FF5424",
  },
  {
    name: "Governance & Center of Excellence",
    href: "/services/power-platform-governance",
    desc: "DLP security, environment strategy, and CoE Starter Kit.",
    iconImg: "/assets/images/governance-official.png",
    color: "#FF5424",
  },
  {
    name: "Training & Adoption Enablement",
    href: "/services/power-platform-training-adoption",
    desc: "Hands-on workshops, citizen dev pathways, and champion coaching.",
    iconImg: "/assets/images/training-official.png",
    color: "#FF5424",
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        if (typeof window !== "undefined" && (window as any).gsap?.plugins?.ScrollTrigger) {
          (window as any).gsap.plugins.ScrollTrigger.refresh();
        }
      }, 500);
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#16072E]/95 backdrop-blur-md border-b border-white/[0.08] py-4 "
          : "bg-[#16072E]/80 backdrop-blur-xs py-5 border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Enhanced P Monogram Emblem */}
        <Logo size="md" onClick={handleLogoClick} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {/* Home Link */}
          <Link
            href="/"
            className={`group relative py-1 text-[15px] font-medium transition-colors duration-200 ease-in-out flex flex-col items-center ${
              isActive("/")
                ? "text-[#FF5424]"
                : "text-[#E1DEEE] hover:text-[#FF5424]"
            }`}
          >
            <span className="relative">
              Home
              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF5424] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out pointer-events-none" />
            </span>
            {isActive("/") && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424] mt-0.5 absolute -bottom-1" />
            )}
          </Link>

          {/* About us Link */}
          <Link
            href="/about-us"
            className={`group relative py-1 text-[15px] font-medium transition-colors duration-200 ease-in-out flex flex-col items-center ${
              isActive("/about-us")
                ? "text-[#FF5424]"
                : "text-[#E1DEEE] hover:text-[#FF5424]"
            }`}
          >
            <span className="relative">
              About us
              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF5424] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out pointer-events-none" />
            </span>
            {isActive("/about-us") && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424] mt-0.5 absolute -bottom-1" />
            )}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`group py-1 text-[15px] font-medium inline-flex items-center gap-1.5 transition-colors duration-200 ease-in-out ${
                isActive("/services")
                  ? "text-[#FF5424]"
                  : "text-[#E1DEEE] hover:text-[#FF5424]"
              }`}
            >
              <span className="relative">
                Services
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF5424] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out pointer-events-none" />
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#FF5424]" : "text-[#C8C0DD] group-hover:text-[#FF5424]"
                }`}
              />
            </Link>

            {/* Mega Dropdown */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full -left-20 w-[580px] p-4 bg-[#1C0B3B] border border-white/10 rounded-2xl backdrop-blur-xl grid grid-cols-2 gap-2 mt-2 z-50"
                >
                  {SERVICES_NAV.map((service) => {
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="p-3 rounded-xl hover:bg-white/5 transition-colors group flex items-start gap-3"
                      >
                        <div
                          className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 mt-0.5 shadow-sm overflow-hidden"
                        >
                          <img
                            src={service.iconImg}
                            alt={service.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-display font-medium text-xs text-white group-hover:text-[#FF5424] transition-colors">
                            {service.name}
                          </div>
                          <p className="text-[11px] text-[#C8C0DD] line-clamp-2 mt-0.5 leading-snug font-body">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-2 mt-1 border-t border-white/[0.06] flex items-center justify-between px-2">
                    <span className="text-[11px] font-mono text-[#C8C0DD]">
                      Looking for custom architecture?
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-mono text-[#FF5424] hover:underline flex items-center gap-1"
                    >
                      View All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Case Study Link */}
          <Link
            href="/case-studies"
            className={`group relative py-1 text-[15px] font-medium transition-colors duration-200 ease-in-out flex flex-col items-center ${
              isActive("/case-studies")
                ? "text-[#FF5424]"
                : "text-[#E1DEEE] hover:text-[#FF5424]"
            }`}
          >
            <span className="relative">
              Case Study
              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF5424] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out pointer-events-none" />
            </span>
            {isActive("/case-studies") && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424] mt-0.5 absolute -bottom-1" />
            )}
          </Link>

          {/* Blog Link */}
          <Link
            href="/blog"
            className={`group relative py-1 text-[15px] font-medium transition-colors duration-200 ease-in-out flex flex-col items-center ${
              isActive("/blog")
                ? "text-[#FF5424]"
                : "text-[#E1DEEE] hover:text-[#FF5424]"
            }`}
          >
            <span className="relative">
              Blog
              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF5424] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out pointer-events-none" />
            </span>
            {isActive("/blog") && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424] mt-0.5 absolute -bottom-1" />
            )}
          </Link>
        </nav>

        {/* Right Action Contact Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact-us"
            className="px-6 py-2.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-white font-medium text-[15px] tracking-normal transition-all hover: hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#1C0B3B] border-b border-white/10 px-4 py-6 overflow-hidden mt-2"
          >
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive("/") ? "text-[#FF5424] bg-white/5" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive("/about-us") ? "text-[#FF5424] bg-white/5" : "text-white"
                }`}
              >
                About us
              </Link>

              <div className="py-2 px-4">
                <div className="text-xs font-mono text-[#C8C0DD] uppercase tracking-wider mb-2">
                  Services
                </div>
                <div className="grid grid-cols-1 gap-2 pl-2 border-l border-white/10">
                  {SERVICES_NAV.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="py-1 text-sm text-[#FFFFFF] hover:text-[#FF5424]"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/case-studies"
                className={`px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive("/case-studies") ? "text-[#FF5424] bg-white/5" : "text-white"
                }`}
              >
                Case Study
              </Link>
              <Link
                href="/blog"
                className={`px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive("/blog") ? "text-[#FF5424] bg-white/5" : "text-white"
                }`}
              >
                Blog
              </Link>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact-us"
                  className="w-full py-3 rounded-xl bg-[#FF5424] text-white font-medium text-base text-center block"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
