"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const numberStr = String(index + 1).padStart(2, "0");

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-[#240E4C] border-[#FF5424]/40 "
                : "bg-[#1C0B3B]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#200B44]"
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF5424] transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4 pr-4">
                <span className="font-mono text-xs font-semibold text-[#FF5424] bg-[#FF5424]/10 px-2.5 py-1 rounded-md border border-[#FF5424]/20 shrink-0">
                  {numberStr}
                </span>
                <span className="font-display font-medium text-base md:text-lg text-white">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                  isOpen
                    ? "bg-[#FF5424]/20 text-[#FF5424] border-[#FF5424]/40"
                    : "bg-white/5 text-[#C8C0DD] border-white/10"
                }`}
              >
                <Plus className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-[#C8C0DD] leading-relaxed border-t border-white/[0.04]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
