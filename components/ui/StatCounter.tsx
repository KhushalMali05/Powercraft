"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in seconds
  label: string;
  isPlaceholder?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = "+",
  prefix = "",
  duration = 2,
  label,
  isPlaceholder = false,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // easeOutExpo function
      const progress = frame / totalFrames;
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(start + (end - start) * easeProgress);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="flex items-center justify-center font-mono font-bold text-3xl md:text-5xl text-white tracking-tight group-hover:text-[#FF5424] transition-colors">
        <span>{prefix}</span>
        <span>{count.toLocaleString()}</span>
        <span className="text-[#FF5424] ml-0.5">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-[#C8C0DD] font-body flex items-center justify-center gap-1.5">
        <span>{label}</span>
      </div>
      {isPlaceholder && (
        <div className="mt-1">
          <span className="inline-block text-[10px] font-mono text-[#FF5424]/80 bg-[#FF5424]/10 px-2 py-0.5 rounded">
            Target KPI
          </span>
        </div>
      )}
    </div>
  );
};
