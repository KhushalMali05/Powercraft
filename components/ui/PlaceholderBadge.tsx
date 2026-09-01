import React from "react";

interface PlaceholderBadgeProps {
  label?: string;
  tooltip?: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label = "Placeholder Content",
  tooltip = "Ready for live customer data / real assets before launch",
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#240E4C]/90 text-[#FF5424] border border-[#FF5424]/30  backdrop-blur-xs ${className}`}
      title={tooltip}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5424] animate-pulse" />
      <span>{label}</span>
    </span>
  );
};
