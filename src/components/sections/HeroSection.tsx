'use client';

import Link from 'next/link';

interface HeroSectionProps {
  onOpenBrief: () => void;
}

const stats = [
  { value: '06', label: 'Yıl deneyim' },
  { value: '140', label: 'Proje' },
  { value: '18M', label: 'Aylık erişim' },
];

export default function HeroSection({ onOpenBrief }: HeroSectionProps) {
  return (
    <section className="relative min-h-[88vh] pt-28 sm:pt-40 pb-14 sm:pb-20 px-5 sm:px-10 lg:px-14 flex flex-col justify-center items-center bg-[#262626] text-[#F6F6F6] overflow-hidden text-center">
      {/* Arka plan videosu — üzerinde düz Espresso katman (gradient yok) */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-20"
          poster="/videos/reels/posters/dior-beach-club.jpg"
        >
          <source src="/videos/reels/dior-beach-club.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#262626]/80" />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center relative z-10 space-y-7 sm:space-y-8">
        <h1 className="text-[40px] xs:text-5xl sm:text-7xl lg:text-[88px] tracking-[-0.04em] leading-[0.94] font-heading max-w-4xl">
          <span className="block">
            <span className="font-black">DİDİM&apos;DE</span>{' '}
            <span className="font-light opacity-80">MARKALARI</span>
          </span>
          <span className="block">
            <span className="font-light opacity-80">DİJİTALDE</span>{' '}
            <span className="font-black">GÜÇLÜ</span>
          </span>
          <span className="text-[#A40001] font-black">BÜYÜTÜYORUZ.</span>
        </h1>

        <p className="text-base sm:text-xl opacity-75 max-w-xl leading-relaxed">
          Marka, prodüksiyon, web ve reklam — tek stüdyoda.
        </p>

        <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 w-full xs:w-auto">
          <button
            onClick={onOpenBrief}
            className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#A40001] text-[#F6F6F6] hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            Görüşme planla
          </button>
          <Link
            href="/referanslar"
            className="px-7 py-3.5 rounded-full text-sm font-bold border border-[#F6F6F6]/25 hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            İşlerimizi gör
          </Link>
        </div>

        <div className="pt-8 grid grid-cols-3 gap-6 sm:gap-16 border-t border-[#F6F6F6]/15 max-w-xl w-full">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-black font-heading">
                {s.value}
                <span className="text-[#A40001]">+</span>
              </div>
              <div className="text-sm opacity-60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
