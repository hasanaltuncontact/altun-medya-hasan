'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { reelsList } from '@/data/reels';

export default function ReelsLabSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mutedId, setMutedId] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = direction === 'left' ? -300 : 300;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      if (!mutedId) {
        setMutedId(id); // default muted for autoplay compliance
      }
    }
  };

  const toggleAudio = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (mutedId === id) {
      setMutedId(null);
    } else {
      setMutedId(id);
    }
  };

  return (
    <section id="reels-section" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#070707] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION WITH ELEVATED TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
              YÜKSEK ETKİLEŞİMLİ<br />
              <span className="text-[#C8FF00]">VİRAL PRODÜKSİYONLAR.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8E93] mt-2.5 max-w-xl font-mono leading-relaxed">
              Instagram Reels, TikTok ve YouTube Shorts mecralarında izleyiciyi ilk saniyede yakalayan, dönüşüm odaklı dikey video kurguları. Kartlara tıklayarak videoları doğrudan burada izleyebilirsiniz.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-all active:scale-90"
              aria-label="Sola Kaydır"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#C8FF00] hover:text-black transition-all active:scale-90"
              aria-label="Sağa Kaydır"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 7 REELS HORIZONTAL SLIDER WITH INLINE EMBEDDED PLAYERS */}
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 -mx-5 px-5 sm:-mx-10 sm:px-10"
        >
          {reelsList.map((reel) => {
            const isPlaying = playingId === reel.id;
            const isMuted = mutedId === reel.id;

            return (
              <div
                key={reel.id}
                onClick={() => togglePlay(reel.id)}
                className={`snap-start flex-shrink-0 w-[240px] sm:w-[280px] aspect-[9/16] rounded-2xl sm:rounded-3xl relative overflow-hidden group cursor-pointer border transition-all duration-500 shadow-2xl ${
                  isPlaying
                    ? 'border-[#C8FF00] ring-2 ring-[#C8FF00]/40 scale-[1.02]'
                    : 'border-white/10 hover:border-white/40'
                }`}
              >
                {/* VIDEO OR POSTER IMAGE */}
                {isPlaying ? (
                  <video
                    src={reel.videoUrl}
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={reel.posterImage}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />
                )}

                {/* OVERLAY GRADIENT & CONTROLS */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
                  
                  {/* TOP BADGES & AUDIO TOGGLE */}
                  <div className="flex items-center justify-between text-xs font-mono pointer-events-auto">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[#C8FF00] font-bold text-[11px] flex items-center gap-1.5">
                      {isPlaying && (
                        <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-ping" />
                      )}
                      <span>{reel.views}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {isPlaying && (
                        <button
                          onClick={(e) => toggleAudio(e, reel.id)}
                          className="p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white hover:text-[#C8FF00] transition-colors"
                          title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-3.5 h-3.5" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5 text-[#C8FF00]" />
                          )}
                        </button>
                      )}

                      <span className="p-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-[#C8FF00] group-hover:text-black transition-colors shadow-lg">
                        {isPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM REEL META & PLAYING STATUS */}
                  <div>
                    <span className="text-[10px] font-mono text-[#C8FF00] font-bold uppercase tracking-wider block mb-1">
                      {reel.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#C8FF00] transition-colors leading-snug font-heading">
                      {reel.title}
                    </h3>
                    <p className="text-[11px] text-white/70 mt-1 line-clamp-2 font-mono font-normal">
                      {reel.description}
                    </p>

                    {isPlaying && (
                      <div className="mt-3 pt-2 border-t border-white/20 flex items-center gap-2 text-[10px] font-mono text-[#C8FF00]">
                        <Sparkles className="w-3 h-3 animate-spin" />
                        <span>Gömülü Canlı Oynatılıyor</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

