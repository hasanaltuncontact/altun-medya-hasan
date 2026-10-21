interface StarDividerProps {
  /** Üstteki bölümün rengi */
  from: string;
  /** Alttaki bölümün rengi */
  to: string;
  /** Yıldız rozetinin zemin rengi (zıt renk) */
  badge: string;
  /** Yıldızın rengi */
  star: string;
}

/**
 * Landing page'deki kavisli ayırıcının ALTUN MEDYA yıldızlı versiyonu.
 * Kavisin ucunda zıt renkte bir rozet içinde logomuzun ✦ yıldızı durur.
 */
export default function StarDivider({ from, to, badge, star }: StarDividerProps) {
  return (
    <div className="relative w-full leading-none z-20 -mt-px -mb-px" style={{ backgroundColor: to }} aria-hidden>
      <svg className="w-full h-12 sm:h-20 block" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path d="M 0,0 L 1200,0 C 960,6 750,24 600,76 C 450,24 240,6 0,0 Z" fill={from} />
      </svg>
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
        <div
          className="relative w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]"
          style={{ background: badge, boxShadow: `0 0 0 6px ${to}` }}
        >
          <svg viewBox="671 24 47 47" className="w-6 h-6 sm:w-8 sm:h-8 animate-[pulse_3s_ease-in-out_infinite]">
            <path
              d="M694.61 24.42 C694.61 37.13 704.91 47.42 717.61 47.42 C704.91 47.42 694.61 57.72 694.61 70.42 C694.61 57.72 684.31 47.42 671.61 47.42 C684.31 47.42 694.61 37.13 694.61 24.42 Z"
              fill={star}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Logomuzun yıldızı — tek başına kullanım için */
export function BrandStar({ className = 'w-4 h-4', color = '#A40001' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="671 24 47 47" className={className} aria-hidden>
      <path
        d="M694.61 24.42 C694.61 37.13 704.91 47.42 717.61 47.42 C704.91 47.42 694.61 57.72 694.61 70.42 C694.61 57.72 684.31 47.42 671.61 47.42 C684.31 47.42 694.61 37.13 694.61 24.42 Z"
        fill={color}
      />
    </svg>
  );
}
