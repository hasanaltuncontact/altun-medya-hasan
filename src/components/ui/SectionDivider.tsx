import React from 'react';

interface SectionDividerProps {
  topBgColor?: string; // Üstteki bölümün rengi
  bottomBgColor?: string; // Alttaki bölümün rengi
}

/**
 * Bölüm geçişi — iki düz renk arasında yumuşak kavisli kesim.
 * Gradient yok; yalnızca palet renkleri (#262626 / #A40001 / #F6F6F6).
 */
export default function SectionDivider({
  topBgColor = '#262626',
  bottomBgColor = '#F6F6F6',
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden leading-none pointer-events-none -mt-px -mb-px"
      style={{ backgroundColor: bottomBgColor }}
    >
      <svg
        className="w-full h-8 sm:h-14 block fill-current"
        style={{ color: topBgColor }}
        viewBox="0 0 1200 70"
        preserveAspectRatio="none"
      >
        <path d="M 0,0 L 1200,0 C 960,6 750,22 600,66 C 450,22 240,6 0,0 Z" />
      </svg>
    </div>
  );
}
