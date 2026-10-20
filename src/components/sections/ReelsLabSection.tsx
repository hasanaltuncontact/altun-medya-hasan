'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { reelsList, ReelItem } from '@/data/reels';

/** Otomatik kayma hızı (piksel / saniye) */
const AUTO_SCROLL_SPEED = 40;

/* ------------------------------------------------------------------ */
/*  Tek bir reel videosu: ekranda görünürken oynar, görünmezken durur  */
/* ------------------------------------------------------------------ */
function ReelVideo({ reel, muted }: { reel: ReelItem; muted: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  // Sadece ekranda görünen videoları oynat (performans + pil dostu)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [failed]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  // Video dosyası yoksa / yüklenemezse kapak görselini göster
  if (failed) {
    return (
      <img
        src={reel.posterImage}
        alt={reel.title}
        className="w-full h-full object-cover"
        draggable={false}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={reel.videoUrl}
      poster={reel.posterImage}
      muted={muted}
      loop
      playsInline
      autoPlay
      preload="metadata"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover pointer-events-none"
    />
  );
}

/* ------------------------------------------------------------------ */
/*                         ANA BÖLÜM BİLEŞENİ                          */
/* ------------------------------------------------------------------ */
export default function ReelsLabSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Animasyon durumu (re-render tetiklememek için ref)
  const offsetRef = useRef(0);
  const nudgeRef = useRef(0);
  const hoverRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startOffset: 0, moved: false });

  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const unmutedRef = useRef<string | null>(null);
  unmutedRef.current = unmutedId;

  // Sonsuz döngü için liste iki kez arka arkaya basılır
  const loopItems = [...reelsList, ...reelsList];

  const normalize = useCallback((value: number) => {
    const half = (trackRef.current?.scrollWidth ?? 0) / 2;
    if (!half) return value;
    return ((value % half) + half) % half;
  }, []);

  /* ----------------------- Animasyon döngüsü ----------------------- */
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!dragRef.current.active) {
        // Ok butonlarıyla gelen yumuşak itme
        if (Math.abs(nudgeRef.current) > 0.5) {
          const step = nudgeRef.current * 0.12;
          offsetRef.current += step;
          nudgeRef.current -= step;
        } else {
          nudgeRef.current = 0;
          // Fare üzerindeyken veya ses açıkken otomatik kayma durur
          if (!hoverRef.current && !unmutedRef.current && !reduceMotion) {
            offsetRef.current += AUTO_SCROLL_SPEED * dt;
          }
        }
      }

      offsetRef.current = normalize(offsetRef.current);
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [normalize]);

  /* ------------------------- Ok butonları -------------------------- */
  const scroll = (direction: 'left' | 'right') => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    const step = card?.offsetWidth ?? 300;
    nudgeRef.current += direction === 'left' ? -step : step;
  };

  /* ------------------ Sürükleme (mobil + masaüstü) ----------------- */
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startOffset: offsetRef.current,
      moved: false,
    };
    nudgeRef.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const dx = e.clientX - drag.startX;
    if (Math.abs(dx) > 5) {
      drag.moved = true;
      viewportRef.current?.setPointerCapture?.(e.pointerId);
    }
    offsetRef.current = normalize(drag.startOffset - dx);
  };

  const endDrag = () => {
    dragRef.current.active = false;
  };

  /* ---------------------- Kartla etkileşim ------------------------- */
  const handleCardClick = (id: string) => {
    if (dragRef.current.moved) return; // sürükleme tıklama sayılmasın
    setUnmutedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="reels-section" className="py-14 md:py-20 bg-[#070707] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl tracking-tight text-white leading-tight font-heading">
              <span className="font-black">YÜKSEK ETKİLEŞİMLİ</span><br />
              <span className="font-light text-white/80">VİRAL</span>{' '}
              <span className="font-black text-[#FF6B35]">PRODÜKSİYONLAR.</span>
            </h2>
            <p className="m-hide text-xs sm:text-sm text-[#8E8E93] mt-2.5 max-w-xl font-mono leading-relaxed">
              Instagram Reels, TikTok ve YouTube Shorts mecralarında izleyiciyi ilk saniyede yakalayan, dönüşüm odaklı dikey video kurguları. Sesi açmak için videoya dokunun.
            </p>
          </div>

          <div className="m-hide flex items-center gap-3">
            <button
              id="reels-prev-btn"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#B33A06] hover:text-white transition-all active:scale-90"
              aria-label="Sola Kaydır"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="reels-next-btn"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#B33A06] hover:text-white transition-all active:scale-90"
              aria-label="Sağa Kaydır"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* SONSUZ DÖNGÜLÜ, OTOMATİK OYNAYAN REELS ŞERİDİ */}
      <div
        ref={viewportRef}
        className="relative max-w-screen-2xl mx-auto overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => {
          hoverRef.current = false;
          endDrag();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* Kenarlarda yumuşak kararma */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 z-10 bg-gradient-to-r from-[#070707] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 z-10 bg-gradient-to-l from-[#070707] to-transparent" />

        <div ref={trackRef} className="flex w-max will-change-transform py-3">
          {loopItems.map((reel, index) => {
            const isUnmuted = unmutedId === reel.id;

            return (
              // Boşluk "gap" yerine padding ile veriliyor ki iki yarı birebir eşit olsun
              <div key={`${reel.id}-${index}`} className="flex-shrink-0 pr-5 sm:pr-7">
                <div
                  onClick={() => handleCardClick(reel.id)}
                  className={`w-[220px] sm:w-[270px] aspect-[9/16] rounded-2xl sm:rounded-3xl relative overflow-hidden group border transition-all duration-500 shadow-2xl ${
                    isUnmuted
                      ? 'border-[#B33A06] ring-2 ring-[#B33A06]/40'
                      : 'border-white/10 hover:border-white/40'
                  }`}
                >
                  <ReelVideo reel={reel} muted={!isUnmuted} />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.82)_24%,rgba(0,0,0,0.35)_42%,rgba(0,0,0,0)_58%),linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_18%)] p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-full bg-[#B33A06] text-white font-bold text-[11px] flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>{reel.views}</span>
                      </span>

                      <span
                        className={`p-2 rounded-full backdrop-blur-md border border-white/20 transition-colors shadow-lg ${
                          isUnmuted ? 'bg-[#B33A06] text-white' : 'bg-black/70 text-white group-hover:bg-white/20'
                        }`}
                        title={isUnmuted ? 'Sesi Kapat' : 'Sesi Aç'}
                      >
                        {isUnmuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#FF8A50] font-bold uppercase tracking-wider block mb-1">
                        {reel.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#FF6B35] transition-colors leading-snug font-heading">
                        {reel.title}
                      </h3>
                      <p className="text-[11px] text-white/80 mt-1 line-clamp-2 font-mono font-normal">
                        {reel.description}
                      </p>
                    </div>
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
