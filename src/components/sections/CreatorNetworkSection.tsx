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
    <section id="influencer-network" className="py-20 sm:py-24 px-5 sm:px-10 lg:px-14 bg-[#0E0E0E] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
              DOĞRU İÇERİK ÜRETİCİSİ,<br />
              <span className="text-[#C8FF00]">ÖLÇÜLEBİLİR DÖNÜŞÜM.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8E93] mt-2 max-w-xl font-normal leading-relaxed font-mono">
              Ege ve ulusal ölçekte yüksek erişime sahip kreatif içerik üreticilerimiz ve influencer network&apos;ümüzle, markanızı doğru hedef kitleyle buluşturuyor ve yüksek dönüşümlü organik kampanya süreçleri yönetiyoruz.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollCreators('left')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-all active:scale-90"
              aria-label="Önceki Influencer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCreators('right')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-all active:scale-90"
              aria-label="Sonraki Influencer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CREATOR TALENT ROSTER SLIDER */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8FF00] font-bold">
              CREATOR TALENT ROSTER
            </span>
            <span className="text-xs font-mono text-[#8E8E93]">Ege &amp; Global Temsilcilikler</span>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 -mx-5 px-5 sm:-mx-10 sm:px-10"
          >
            {creatorsList.map((creator, index) => (
              <div
                key={creator.id}
                className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] flex flex-col items-center text-center group cursor-pointer"
              >
                {/* STAR CONTAINER WITH INFLUENCER AVATAR */}
                <div className="relative w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] flex items-center justify-center">
                  
                  {/* NEON LIME 4-POINT STAR BACKGROUND */}
                  <svg
                    className={`absolute inset-0 w-full h-full text-[#C8FF00] drop-shadow-[0_0_35px_rgba(200,255,0,0.35)] transform group-hover:scale-105 ${
                      index % 2 === 0 ? 'group-hover:rotate-6' : 'group-hover:-rotate-6'
                    } transition-all duration-500 ease-out`}
                    viewBox="0 0 300 300"
                    fill="currentColor"
                  >
                    <path d="M150 0 C150 82.84 217.16 150 300 150 C217.16 150 150 217.16 150 300 C150 217.16 82.84 150 0 150 C82.84 150 150 82.84 150 0 Z" />
                  </svg>

                  {/* CIRCULAR PORTRAIT INSIDE THE STAR */}
                  <div className="relative z-10 w-[170px] h-[170px] sm:w-[195px] sm:h-[195px] rounded-full overflow-hidden border-2 border-black/40 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={creator.avatarImage}
                      alt={creator.name}
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                  </div>

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
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-[#C8FF00] transition-colors font-heading">
                    {creator.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#C8FF00] font-bold">
                    {creator.handle}
                  </p>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#8E8E93] uppercase">
                    {creator.niche} • {creator.followers}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#C8FF00]" />
            <span className="text-white/80">Creator kadromuza katılmak veya iş birliği yapmak mı istiyorsunuz?</span>
          </div>
          <a
            href="mailto:info@altunmedya.com"
            className="px-4 py-2 rounded-xl bg-[#C8FF00] text-black font-bold uppercase tracking-wider hover:bg-[#D4FF28] transition-all"
          >
            Network&apos;e Başvur
          </a>
        </div>
      </div>
    </section>
  );
}

