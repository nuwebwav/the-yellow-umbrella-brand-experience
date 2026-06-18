import React from "react";
import { cn } from "@/lib/utils";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("h-full w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tilted umbrella handle rod */}
      <path
        d="M95 55 L145 160"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      
      {/* Umbrella tip */}
      <circle cx="145" cy="160" r="3" fill="currentColor" />
      
      {/* Umbrella handle hook at top-left */}
      <path
        d="M95 55 C90 42 78 44 75 50 C71 57 77 64 84 60 C90 56 88 48 82 51"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M93 54 C89 44 80 46 78 51"
        stroke="#FBDF4E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Umbrella Canopy - open, tilted down-right, catching gifts */}
      {/* Outer yellow dome */}
      <path
        d="M75 125 C100 155 140 162 145 160 C150 150 178 105 185 85 C187 80 180 77 175 83 C155 105 115 120 75 125 Z"
        fill="#FBDF4E"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Inner white canopy */}
      <path
        d="M76 123 C105 115 145 100 173 83 C168 95 143 135 125 145 C105 140 85 130 76 123 Z"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Canopy stitches/rib lines */}
      <path
        d="M125 145 C135 125 150 110 165 95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
      />
      <path
        d="M125 145 C115 128 100 120 88 118"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* FLOATING GIFTS */}

      {/* Gift 1: Cyan box with red ribbon/bow */}
      <g transform="translate(50, 75) rotate(-22)">
        <rect x="0" y="0" width="22" height="18" rx="2" fill="#38BDF8" stroke="currentColor" strokeWidth="2" />
        {/* Ribbon */}
        <line x1="11" y1="0" x2="11" y2="18" stroke="#EF4444" strokeWidth="2.5" />
        <line x1="0" y1="9" x2="22" y2="9" stroke="#EF4444" strokeWidth="2.5" />
        {/* Bow loops */}
        <path d="M11 0 C4 -8 7 -12 11 0 C15 -12 18 -8 11 0" fill="#EF4444" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* Gift 2: Green box with blue ribbon */}
      <g transform="translate(108, 62) rotate(15)">
        <rect x="0" y="0" width="14" height="24" rx="2" fill="#84CC16" stroke="currentColor" strokeWidth="2" />
        {/* Ribbon */}
        <line x1="7" y1="0" x2="7" y2="24" stroke="#38BDF8" strokeWidth="2" />
        <line x1="0" y1="12" x2="14" y2="12" stroke="#38BDF8" strokeWidth="2" />
        {/* Bow */}
        <path d="M7 0 C3 -5 5 -8 7 0 C9 -8 11 -5 7 0" fill="#38BDF8" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* Gift 3: Red box with yellow ribbon */}
      <g transform="translate(85, 95) rotate(5)">
        <rect x="0" y="0" width="16" height="16" rx="2" fill="#EF4444" stroke="currentColor" strokeWidth="2" />
        {/* Ribbon */}
        <line x1="8" y1="0" x2="8" y2="16" stroke="#FBDF4E" strokeWidth="2" />
        <line x1="0" y1="8" x2="16" y2="8" stroke="#FBDF4E" strokeWidth="2" />
        {/* Bow */}
        <path d="M8 0 C4 -5 6 -7 8 0 C10 -7 12 -5 8 0" fill="#FBDF4E" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* Gift 4: Yellow box with green ribbon/leaf */}
      <g transform="translate(38, 108) rotate(-5)">
        <rect x="0" y="0" width="16" height="22" rx="2" fill="#FBDF4E" stroke="currentColor" strokeWidth="2" />
        {/* Ribbon */}
        <line x1="8" y1="0" x2="8" y2="22" stroke="#84CC16" strokeWidth="2" />
        {/* Sprout/Leaf loop */}
        <path d="M8 0 C3 -6 8 -10 8 0 C8 -10 13 -6 8 0" fill="#84CC16" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* Gift 5: Small orange/yellow box with red bow */}
      <g transform="translate(138, 75) rotate(-10)">
        <rect x="0" y="0" width="16" height="10" rx="1.5" fill="#FBDF4E" stroke="currentColor" strokeWidth="1.8" />
        <line x1="8" y1="0" x2="8" y2="10" stroke="#EF4444" strokeWidth="1.8" />
        <path d="M8 0 C5 -4 6 -6 8 0 C10 -6 11 -4 8 0" fill="#EF4444" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* CONFETTI SPRINKLES */}
      <path d="M30 65 Q33 60 36 63" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M96 68 Q100 66 102 70" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M68 90 Q72 87 75 91" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M142 98 Q145 95 148 97" stroke="#FBDF4E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M22 88 Q24 84 27 87" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-10 w-10 shrink-0">
        <LogoIcon className="text-ink" />
      </div>
      <div className="flex flex-col justify-center leading-none text-left select-none text-ink">
        <span className="text-[10px] font-normal tracking-[0.15em] lowercase opacity-60">the</span>
        <span className="font-display text-xl font-bold tracking-tight -mt-0.5">Yellow</span>
        <span className="text-[11px] font-semibold tracking-wider -mt-0.5 lowercase opacity-80">ummbrella</span>
      </div>
    </div>
  );
}
