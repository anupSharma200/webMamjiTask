import React from 'react';

interface StatBadgeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

export default function StatBadge({ icon, value, label, className = '' }: StatBadgeProps) {
  return (
    <div className={`bg-[#111] border border-[#222] rounded-[6px] py-3 px-3 flex flex-row items-center justify-start gap-3 w-full text-left ${className}`}>
      <div className="text-indigo-300 text-sm flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-bold whitespace-nowrap truncate">{value}</div>
        <div className="text-indigo-300 text-xs whitespace-nowrap truncate">{label}</div>
      </div>
    </div>
  );
}
