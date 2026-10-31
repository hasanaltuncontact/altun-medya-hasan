'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section id="influencer-network" className="py-14 sm:py-24 px-5 sm:px-10 lg:px-14 bg-[#0B0B0B] text-[#F8F0DB] overflow-hidden border-t border-[#F8F0DB]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl tracking-tight text-[#F8F0DB] leading-tight font-heading">
              <span className="font-black">DOĞRU İÇERİK</span>{' '}
              <span className="font-light text-[#F8F0DB]/80">ÜRETİCİSİ,</span><br />
              <span className="font-light text-[#F8F0DB]/80">ÖLÇÜLEBİLİR</span>{' '}
              <span className="font-black text-accent">DÖNÜŞÜM.</span>
            </h2>
            <p className="m-hide text-xs sm:text-sm text-[#F8F0DB]/55 mt-2 max-w-xl font-normal leading-relaxed font-medium">
              Ege ve ulusal ölçekte yüksek erişime sahip kreatif içerik üreticilerimiz ve influencer network&apos;ümüzle, markanızı doğru hedef kitleyle buluşturuyor ve yüksek dönüşümlü organik kampanya süreçleri yönetiyoruz.
            </p>
          </div>

          <div className="m-hide flex items-center gap-3">
            <button
              onClick={() => scrollCreators('left')}
              className="w-11 h-11 rounded-full bg-[#F8F0DB]/5 border border-[#F8F0DB]/15 flex items-center justify-center hover:bg-accent hover:text-onAccent transition-all active:scale-90"
              aria-label="Önceki Influencer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCreators('right')}
              className="w-11 h-11 rounded-full bg-[#F8F0DB]/5 border border-[#F8F0DB]/15 flex items-center justify-center hover:bg-accent hover:text-onAccent transition-all active:scale-90"
              aria-label="Sonraki Influencer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CREATOR TALENT ROSTER SLIDER */}
        <div className="mb-8 sm:mb-16">
          <div className="hidden">
            <span className="text-sm font-bold text-accent">
              CREATOR TALENT ROSTER
            </span>
            <span className="text-xs font-medium text-[#F8F0DB]/55">Ege &amp; Global Temsilcilikler</span>
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
                  
                  {/* DÜZ ZEMİN DAİRE */}
                  <div className="absolute inset-[14%] rounded-full bg-accent text-onAccent" />

                  {/* STAR-WINDOW PORTRAIT (transparent PNG) */}
                  <img
                    src={creator.avatarImage}
                    alt={`${creator.name} (${creator.handle})`}
                    loading="lazy"
                    className={`relative z-10 w-full h-full object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] transform group-hover:scale-105 ${
                      index % 2 === 0 ? 'group-hover:rotate-3' : 'group-hover:-rotate-3'
                    } transition-transform duration-500 ease-out`}
                  />


                </div>

                {/* INFLUENCER META */}
                <div className="mt-2 sm:mt-4 space-y-1">
                  <h3 className="text-base sm:text-xl font-extrabold text-[#F8F0DB] tracking-tight font-heading">
                    {creator.name}
                  </h3>
                  <p className="text-sm text-[#F8F0DB]/60">
                    {creator.followers} takipçi
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BAR */}
        <div className="flex justify-center">
          <a
            href="/influencer"
            className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-accent text-onAccent text-sm font-bold hover:bg-[#F8F0DB] hover:text-[#0B0B0B] transition-colors"
          >
            Tüm influencer ağını gör
          </a>
        </div>
      </div>
    </section>
  );
}

