"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Calendar, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceInterest: "Power Apps Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#FF5424", "#FF5424", "#FF5424", "#FF5424"],
        });
      } catch {
        // fallback if canvas-confetti has environment constraints
      }
    }, 800);
  };

  return (
    <div className="w-full bg-[#1C0B3B] border border-white/[0.08] rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF5424]/10 rounded-full blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 bg-[#FF5424]/20 border border-[#FF5424]/40 rounded-full flex items-center justify-center mx-auto text-[#FF5424] mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-2xl text-white mb-2">
            Message Received!
          </h3>
          <p className="text-[#C8C0DD] max-w-md mx-auto text-sm leading-relaxed mb-8">
            Thank you for reaching out to Powercraft. A Senior Solution Architect will review your requirements and respond within 1 business day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  company: "",
                  serviceInterest: "Power Apps Development",
                  message: "",
                });
              }}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white border border-white/10 transition-colors"
            >
              Send Another Inquiry
            </button>
            <a
              href="https://outlook.office.com/bookwithme/user/989ea18ea91947989703e93af2647104@dbseu.com/meetingtype/RTJzvwTvy0G-vWgoQd-b1A2?anonymous&ep=mlink"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Live Discovery Call Now
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-[#C8C0DD] mb-2 uppercase tracking-wider">
                Your Name <span className="text-[#FF5424]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#16072E] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-hidden focus:border-[#FF5424] focus:ring-1 focus:ring-[#FF5424] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#C8C0DD] mb-2 uppercase tracking-wider">
                Work Email <span className="text-[#FF5424]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#16072E] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-hidden focus:border-[#FF5424] focus:ring-1 focus:ring-[#FF5424] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-[#C8C0DD] mb-2 uppercase tracking-wider">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Logistics"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#16072E] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-hidden focus:border-[#FF5424] focus:ring-1 focus:ring-[#FF5424] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#C8C0DD] mb-2 uppercase tracking-wider">
                Primary Interest
              </label>
              <select
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#16072E] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#FF5424] focus:ring-1 focus:ring-[#FF5424] transition-all"
              >
                <option value="Power Apps Development">Power Apps Development</option>
                <option value="Power Automate Consulting">Power Automate Workflows</option>
                <option value="Power BI Analytics">Power BI Dashboards</option>
                <option value="Copilot & AI Integration">Copilot & Generative AI</option>
                <option value="Power Platform Governance & CoE">Governance & CoE Setup</option>
                <option value="Training & Adoption">Training & Champions Program</option>
                <option value="Comprehensive Modernization">Comprehensive Platform Review</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#C8C0DD] mb-2 uppercase tracking-wider">
              Project Details & Goals <span className="text-[#FF5424]">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about the workflow challenge, systems to integrate, or business outcome you are targeting..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#16072E] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-hidden focus:border-[#FF5424] focus:ring-1 focus:ring-[#FF5424] transition-all resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-[#C8C0DD] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5424]" />
              Response guaranteed within 24 hours
            </span>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF5424] hover:bg-[#E64417] text-white font-display font-bold text-sm tracking-wide transition-all hover: flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
