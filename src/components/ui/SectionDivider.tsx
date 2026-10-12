import React from 'react';

interface SectionDividerProps {
  topBgColor?: string; // Color of the section above
  bottomBgColor?: string; // Color of the section below
  /**
   * Gradient (düz renk olmayan) bölümler için:
   * 'below' → alttaki bölüm ayırıcının altına kayar (bölümde -mt-10 sm:-mt-16 olmalı)
   * 'above' → üstteki bölüm ayırıcının altına kayar (bölümde -mb-10 sm:-mb-16 olmalı)
   */
  gradientSection?: 'below' | 'above';
}

export default function SectionDivider({
  topBgColor = '#050505',
  bottomBgColor = '#F7F6F2',
  gradientSection,
}: SectionDividerProps) {
  if (gradientSection) {
    const isBelow = gradientSection === 'below';
    return (
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mt-px -mb-px">
        <svg
          className="w-full h-10 sm:h-16 block fill-current"
          style={{ color: isBelow ? topBgColor : bottomBgColor }}
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
        >
          {isBelow ? (
            <path d="M 0,0 L 1200,0 C 960,6 750,22 600,66 C 450,22 240,6 0,0 Z" />
          ) : (
            <path d="M 0,0 C 240,6 450,22 600,66 C 750,22 960,6 1200,0 L 1200,70 L 0,70 Z" />
          )}
        </svg>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mt-px -mb-px"
      style={{ backgroundColor: bottomBgColor }}
    >
      <svg
        className="w-full h-10 sm:h-16 block fill-current"
        style={{ color: topBgColor }}
        viewBox="0 0 1200 70"
        preserveAspectRatio="none"
      >
        <path d="M 0,0 L 1200,0 C 960,6 750,22 600,66 C 450,22 240,6 0,0 Z" />
      </svg>
    </div>
  );
}
