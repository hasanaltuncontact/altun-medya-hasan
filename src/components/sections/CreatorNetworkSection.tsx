'use client';

import { useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { creatorsList } from '@/data/creators';

export default function CreatorNetworkSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollCreators = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="influencer-network" className="py-14 sm:py-24 px-5 sm:px-10 lg:px-14 bg-[#070707] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl tracking-tight text-white leading-tight font-heading">
              <span className="font-black">DOĞRU İÇERİK</span>{' '}
              <span className="font-light text-white/80">ÜRETİCİSİ,</span><br />
              <span className="font-light text-white/80">ÖLÇÜLEBİLİR</span>{' '}
              <span className="font-black text-[#FF6B35]">DÖNÜŞÜM.</span>
            </h2>
            <p className="m-hide text-xs sm:text-sm text-[#8E8E93] mt-2 max-w-xl font-normal leading-relaxed font-mono">
              Ege ve ulusal ölçekte yüksek erişime sahip kreatif içerik üreticilerimiz ve influencer network&apos;ümüzle, markanızı doğru hedef kitleyle buluşturuyor ve yüksek dönüşümlü organik kampanya süreçleri yönetiyoruz.
            </p>
          </div>

          <div className="m-hide flex items-center gap-3">
            <button
              onClick={() => scrollCreators('left')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#B33A06] hover:text-white transition-all active:scale-90"
              aria-label="Önceki Influencer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCreators('right')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#B33A06] hover:text-white transition-all active:scale-90"
              aria-label="Sonraki Influencer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CREATOR TALENT ROSTER SLIDER */}
        <div className="mb-8 sm:mb-16">
          <div className="m-hide flex items-center justify-between mb-6 border-b border-white/10 pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B33A06] font-bold">
              CREATOR TALENT ROSTER
            </span>
            <span className="text-xs font-mono text-[#8E8E93]">Ege &amp; Global Temsilcilikler</span>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 sm:py-4 -mx-5 px-5 sm:-mx-10 sm:px-10"
          >
            {creatorsList.map((creator, index) => (
              <div
                key={creator.id}
                className="snap-start flex-shrink-0 w-[160px] sm:w-[280px] flex flex-col items-center text-center group cursor-pointer"
              >
                {/* STAR CONTAINER WITH INFLUENCER AVATAR */}
                <div className="relative w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] flex items-center justify-center">
                  
                  {/* SOFT ORANGE GLOW BEHIND THE STAR */}
                  <div className="absolute inset-[22%] rounded-full bg-[#B33A06]/40 blur-3xl group-hover:bg-[#FF6B35]/50 transition-colors duration-500" />

                  {/* STAR-WINDOW PORTRAIT (transparent PNG) */}
                  <img
                    src={creator.avatarImage}
                    alt={`${creator.name} (${creator.handle})`}
                    loading="lazy"
                    className={`relative z-10 w-full h-full object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] transform group-hover:scale-105 ${
                      index % 2 === 0 ? 'group-hover:rotate-3' : 'group-hover:-rotate-3'
                    } transition-transform duration-500 ease-out`}
                  />

                  {/* SMALL SPARKLE STAR ICON TOP-RIGHT */}
                  <svg
                    className="absolute top-1 right-2 w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0 C12 6.627 17.373 12 24 12 C17.373 12 12 17.373 12 24 C12 17.373 6.627 12 0 12 C6.627 12 12 6.627 12 0 Z" />
                  </svg>
                </div>

                {/* INFLUENCER META */}
                <div className="mt-2 sm:mt-4 space-y-1">
                  <h3 className="text-base sm:text-xl font-extrabold text-white tracking-tight group-hover:text-[#FF6B35] transition-colors font-heading">
                    {creator.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#FF8A50] font-bold">
                    {creator.handle}
                  </p>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/70 uppercase">
                    {creator.niche ? `${creator.niche} • ${creator.followers}` : `${creator.followers} Takipçi`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#14121A] to-[#0A090D] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono shadow-2xl">
          <div className="m-hide flex items-center gap-3">
            <Users className="w-6 h-6 text-[#FF6B35]" />
            <span className="text-white/90 text-sm font-sans font-medium">
              Ege creator kadromuzla markanızı buluşturmak veya ağımıza katılmak mı istiyorsunuz?
            </span>
          </div>
          <a
            href="/influencer"
            className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-[#B33A06] text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#C84408] transition-all whitespace-nowrap shadow-xl flex items-center gap-2 active:scale-95"
          >
            <span>Tüm İnfluencer Ağını İncele</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

