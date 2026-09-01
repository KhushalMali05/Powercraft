"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWindow, Workflow, BarChart3, Sparkles, Layers } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  glowClass: string;
  bgRgba: string;
  borderRgba: string;
  iconImg: string;
  position: { x: number; y: number };
  pathData: string;
  highlightText: string;
}

const NODES: NodeData[] = [
  {
    id: "apps",
    title: "Power Apps",
    subtitle: "Custom Low-Code UI",
    color: "#FF5424",
    glowClass: "",
    bgRgba: "rgba(255, 84, 36, 0.15)",
    borderRgba: "rgba(255, 84, 36, 0.5)",
    iconImg: "/assets/images/power-apps-official.png",
    position: { x: 100, y: 90 },
    pathData: "M 100 90 Q 185 135, 270 230",
    highlightText: "Rapid Canvas & Model-Driven App Delivery",
  },
  {
    id: "automate",
    title: "Power Automate",
    subtitle: "End-to-End Workflows",
    color: "#FF5424",
    glowClass: "",
    bgRgba: "rgba(255, 84, 36, 0.15)",
    borderRgba: "rgba(255, 84, 36, 0.5)",
    iconImg: "/assets/images/power-automate-official.png",
    position: { x: 440, y: 90 },
    pathData: "M 440 90 Q 355 135, 270 230",
    highlightText: "Automated Approvals, Triggers & Syncs",
  },
  {
    id: "sharepoint",
    title: "SharePoint",
    subtitle: "Intranet & Portals",
    color: "#FF5424",
    glowClass: "",
    bgRgba: "rgba(255, 84, 36, 0.15)",
    borderRgba: "rgba(255, 84, 36, 0.5)",
    iconImg: "/assets/images/sharepoint-official.png",
    position: { x: 460, y: 230 },
    pathData: "M 460 230 Q 365 230, 270 230",
    highlightText: "Document Management, Intranet & Lists",
  },
  {
    id: "bi",
    title: "Power BI",
    subtitle: "Real-Time Intelligence",
    color: "#FF5424",
    glowClass: "",
    bgRgba: "rgba(255, 84, 36, 0.15)",
    borderRgba: "rgba(255, 84, 36, 0.5)",
    iconImg: "/assets/images/power-bi-official.png",
    position: { x: 100, y: 380 },
    pathData: "M 100 380 Q 185 325, 270 250",
    highlightText: "DAX Modeling & Executive Dashboards",
  },
  {
    id: "copilot",
    title: "Copilot & AI",
    subtitle: "Generative Assistance",
    color: "#FF5424",
    glowClass: "",
    bgRgba: "rgba(255, 84, 36, 0.15)",
    borderRgba: "rgba(255, 84, 36, 0.5)",
    iconImg: "/assets/images/copilot-official.png",
    position: { x: 440, y: 380 },
    pathData: "M 440 380 Q 355 325, 270 250",
    highlightText: "Copilot Studio, AI Prompts & Field Automation",
  },
];

export const HeroFlowDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[540px] mx-auto aspect-[540/460] select-none">
      {/* SVG Canvas for connective circuits and data pulses */}
      <svg
        viewBox="0 0 540 460"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="grad-apps" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5424" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5424" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad-automate" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5424" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5424" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad-bi" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5424" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5424" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad-copilot" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF5424" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5424" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Ambient background grid pattern */}
        <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.04" />
        </pattern>
        <rect width="540" height="460" fill="url(#dot-grid)" rx="24" />

        {/* Central Core Outer Rings */}
        <circle
          cx="270"
          cy="235"
          r="68"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle
          cx="270"
          cy="235"
          r="84"
          fill="none"
          stroke="rgba(255, 84, 36, 0.2)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />

        {/* Connection Paths (Base & Animated Stroke) */}
        {NODES.map((node, index) => {
          const isActive = activeNode === node.id;
          return (
            <g key={node.id}>
              {/* Static faint path */}
              <path
                d={node.pathData}
                fill="none"
                stroke={node.color}
                strokeOpacity={isActive ? 0.8 : 0.3}
                strokeWidth={isActive ? 2.5 : 1.5}
                strokeDasharray="6 4"
              />

              {/* Animated drawing line on load */}
              <motion.path
                d={node.pathData}
                fill="none"
                stroke={node.color}
                strokeWidth={isActive ? 3 : 2}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.2, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              />

              {/* Looping pulse particle traveling toward center */}
              <motion.circle
                r="4"
                fill={node.color}
                initial={{ offsetDistance: "0%" }}
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.7,
                }}
                style={{
                  offsetPath: `path("${node.pathData}")`,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Central Core: POWERCRAFT ENGINE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative group cursor-pointer">
          <div className="relative w-28 h-28 rounded-full bg-[#16072E] border-2 border-[#FF5424]/40 p-2 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-[#FF5424] flex items-center justify-center mb-1 text-white shrink-0 p-1.5 overflow-hidden">
              <img
                src="/assets/images/power_logo.png"
                alt="Powercraft Logo"
                className="w-full h-full object-contain bg-transparent border-none p-0 shadow-none"
              />
            </div>
            <span className="font-display font-bold text-xs tracking-wider text-white">
              POWERCRAFT
            </span>
          </div>
        </div>
      </motion.div>

      {/* 4 Surrounding Satellite Product Nodes */}
      {NODES.map((node, i) => {
        const isLeft = node.position.x < 270;
        const isTop = node.position.y < 240;

        return (
          <motion.div
            key={node.id}
            initial={{ scale: 0.6, opacity: 0, y: isTop ? -20 : 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className="absolute z-30"
            style={{
              left: `${(node.position.x / 540) * 100}%`,
              top: `${(node.position.y / 460) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#1C0B3B] border transition-all duration-300 cursor-pointer ${node.glowClass}`}
              style={{
                borderColor: activeNode === node.id ? node.color : node.borderRgba,
                backgroundColor: activeNode === node.id ? "#240E4C" : "#1C0B3B",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 overflow-hidden"
              >
                <img
                  src={node.iconImg}
                  alt={node.title}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left whitespace-nowrap">
                <div className="font-display font-semibold text-xs md:text-sm text-white tracking-wide flex items-center gap-1.5">
                  {node.title}
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                </div>
                <div className="font-mono text-[10px] text-[#C8C0DD]">
                  {node.subtitle}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
