import React from 'react';
import { BrandStar } from './StarDivider';

interface SectionDividerProps {
  topBgColor?: string; // Üstteki bölümün rengi
  bottomBgColor?: string; // Alttaki bölümün rengi
  /** Geçişin ortasında logomuzun ✦ yıldızlı rozeti */
  star?: boolean;
  className?: string;
}

/**
 * Bölüm geçişi — alttaki bölüm, yuvarlak üst köşeli bir "katman" olarak
 * üsttekinin üzerine biner. Yalnızca logo renkleri (siyah / krem).
 */
export default function SectionDivider({
  topBgColor = '#0B0B0B',
  bottomBgColor = '#F8F0DB',
  star = false,
  className = '',
}: SectionDividerProps) {
  if (topBgColor.toLowerCase() === bottomBgColor.toLowerCase()) return null;

  return (
    <div
      aria-hidden
      className={`relative w-full pointer-events-none -mt-px -mb-px ${className}`}
      style={{ backgroundColor: topBgColor }}
    >
      <div
        className="h-7 sm:h-12 rounded-t-[28px] sm:rounded-t-[56px]"
        style={{ backgroundColor: bottomBgColor }}
      />
      {star && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full grid place-items-center"
            style={{ background: bottomBgColor, boxShadow: `0 0 0 5px ${topBgColor}` }}
          >
            <BrandStar
              className="w-4 h-4 sm:w-5 sm:h-5"
              color={bottomBgColor.toUpperCase() === '#F8F0DB' ? topBgColor : '#F8F0DB'}
            />
          </div>
        </div>
      )}
    </div>
  );
}
