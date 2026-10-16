'use client';

import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenBrief: () => void;
}

export default function HeroSection({ onOpenBrief }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] pt-36 sm:pt-44 pb-20 px-5 sm:px-10 lg:px-14 flex flex-col justify-center items-center bg-[#050505] overflow-hidden text-center">
      {/* ATMOSPHERIC BACKGROUND VIDEO OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-25 scale-105 filter blur-[2px]"
          poster="/videos/reels/posters/dior-beach-club.jpg"
        >
          <source src="/videos/reels/dior-beach-club.mp4" type="video/mp4" />
        </video>
        {/* GRADIENT OVERLAYS FOR MAXIMUM TEXT READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-[#050505]" />
      </div>

      {/* WARM AMBIENT GLOW ACCENT (CENTERED) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] bg-[#B33A06]/[0.12] rounded-full blur-[180px] pointer-events-none z-0" />

      {/* CENTERED HERO CONTENT */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10 space-y-8">
        
        {/* POWERFUL HERO SLOGAN WITH LOGO-INSPIRED BOLD-THIN HARMONY */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[88px] tracking-[-0.04em] leading-[0.94] text-white font-heading max-w-4xl mx-auto">
          <span className="block">
            <span className="font-black">DİDİM&apos;DE</span>{' '}
            <span className="font-light text-white/80">MARKALARI</span>
          </span>
          <span className="block">
            <span className="font-light text-white/80">DİJİTALDE</span>{' '}
            <span className="font-black">GÜÇLÜ</span>
          </span>
          <span className="text-[#FF6B35] font-black inline-block drop-shadow-[0_0_40px_rgba(255,107,53,0.4)]">
            BÜYÜTÜYORUZ.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Stratejik marka danışmanlığı, 4K sinematik prodüksiyon, Next.js web mimarisi, Didim yerel SEO ve Ege&apos;nin en etkili influencer pazarlama ağını kurumsal disiplinle sunuyoruz.
        </p>

        {/* CORPORATE ACTION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenBrief}
            className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] hover:shadow-[0_0_35px_rgba(179,58,6,0.5)] transition-all flex items-center gap-2.5 active:scale-95 shadow-2xl"
          >
            <span>Stratejik Görüşme Planla</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/influencer"
            className="px-7 py-4 text-xs sm:text-sm font-bold tracking-wide bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl transition-all flex items-center gap-2 active:scale-95 backdrop-blur-md"
          >
            <Users className="w-4 h-4 text-[#FF6B35]" />
            <span>İnfluencer Ağını Keşfet</span>
          </Link>
        </div>

        {/* HERO QUICK DISCOVERY LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-mono">
          <Link
            href="/kurumsal/hakkimizda"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Kurumsal</span>
            <span className="text-[#B33A06]">→</span>
          </Link>
          <Link
            href="/referanslar"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Referanslar</span>
            <span className="text-[#B33A06]">→</span>
          </Link>
          <Link
            href="/blog"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Blog</span>
            <span className="text-[#B33A06]">→</span>
          </Link>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>İletişim</span>
            <span className="text-[#B33A06]">↓</span>
          </a>
        </div>

        {/* CORPORATE STATS BAND (CENTERED) */}
        <div className="pt-10 grid grid-cols-3 gap-8 sm:gap-16 border-t border-white/15 max-w-xl mx-auto w-full text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-heading">06<span className="text-[#FF6B35]">+</span></div>
            <div className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Yıl Deneyim</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-heading">140<span className="text-[#FF6B35]">+</span></div>
            <div className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Kurumsal Case</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-heading">18M<span className="text-[#FF6B35]">+</span></div>
            <div className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Aylık Erişim</div>
          </div>
        </div>

      </div>
    </section>
  );
}
