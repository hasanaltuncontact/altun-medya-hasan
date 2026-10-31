'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenBrief: () => void;
}

const stats = [
  { value: '06', label: 'Yıl deneyim' },
  { value: '140', label: 'Proje' },
  { value: '18M', label: 'Aylık erişim' },
];

/**
 * Giriş: krem sayfa üzerinde alt köşeleri yuvarlatılmış siyah sahne.
 * Alt ortadaki çıkıntıda bir sonraki bölüme kaydıran yuvarlak düğme var.
 */
export default function HeroSection({ onOpenBrief }: HeroSectionProps) {
  const scrollNext = () => {
    document.getElementById('hero-next')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#141414] pb-10 sm:pb-14">
      <div className="relative bg-[#0B0B0B] text-[#F8F0DB] rounded-b-[28px] sm:rounded-b-[56px] overflow-hidden">
        {/* Arka plan videosu */}
        <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-35"
            poster="/videos/reels/posters/dior-beach-club.jpg"
          >
            <source src="/videos/reels/dior-beach-club.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/40 to-[#0B0B0B]/90" />
        </div>

        <div className="relative z-10 min-h-[84svh] sm:min-h-[88vh] max-w-6xl mx-auto px-5 sm:px-10 pt-28 sm:pt-36 pb-20 sm:pb-24 flex flex-col items-center justify-between text-center">
          <div className="flex flex-col items-center gap-5 sm:gap-7">

            <h1 className="text-[38px] xs:text-5xl sm:text-7xl lg:text-[88px] tracking-[-0.04em] leading-[0.94] font-heading max-w-4xl">
              <span className="block">
                <span className="font-black">DİDİM&apos;DE</span>{' '}
                <span className="font-light">MARKALARI</span>
              </span>
              <span className="block">
                <span className="font-light">DİJİTALDE</span>{' '}
                <span className="font-black">GÜÇLÜ</span>
              </span>
              <span className="block font-black">BÜYÜTÜYORUZ.</span>
            </h1>

            <p className="text-[15px] sm:text-lg text-[#F8F0DB]/70 max-w-md leading-relaxed">
              Sosyal medya, video çekimi, web tasarım ve reklam.
            </p>

            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenBrief}
                className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full text-sm font-bold bg-[#F8F0DB] text-[#0B0B0B] hover:bg-white transition-colors"
              >
                Görüşme planla
                <span className="w-8 h-8 rounded-full bg-[#0B0B0B] text-[#F8F0DB] grid place-items-center transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <Link
                href="/referanslar"
                className="px-5 py-3 rounded-full text-sm font-bold border border-[#F8F0DB]/30 hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors"
              >
                İşlerimiz
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-16 w-full max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-4xl font-black font-heading">
                  {s.value}
                  <span className="text-[#F8F0DB]/50">+</span>
                </div>
                <div className="text-[11px] sm:text-sm text-[#F8F0DB]/55 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alt ortadaki çıkıntı + aşağı kaydırma düğmesi */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-14 translate-y-full -mt-px">
        <svg viewBox="0 0 200 44" className="block w-40 sm:w-56 h-9 sm:h-11 -mt-px" aria-hidden>
          <path d="M0 0 C42 0 52 44 100 44 C148 44 158 0 200 0 Z" fill="#0B0B0B" />
        </svg>
      </div>
      <button
        onClick={scrollNext}
        aria-label="Aşağı kaydır"
        className="absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-14 translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0B0B0B] text-[#F8F0DB] border border-[#F8F0DB]/20 grid place-items-center shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors z-10"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      </button>
      <div id="hero-next" />
    </section>
  );
}
