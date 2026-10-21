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
    <section id="reels-section" className="py-14 md:py-20 bg-[#C3C3C3] text-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl tracking-tight text-[#262626] leading-tight font-heading">
              <span className="font-black">YÜKSEK ETKİLEŞİMLİ</span><br />
              <span className="font-light text-[#262626]/80">VİRAL</span>{' '}
              <span className="font-black text-[#A40001]">PRODÜKSİYONLAR.</span>
            </h2>
            <p className="m-hide text-xs sm:text-sm text-[#262626]/70 mt-2.5 max-w-xl font-medium leading-relaxed">
              Instagram Reels, TikTok ve YouTube Shorts mecralarında izleyiciyi ilk saniyede yakalayan, dönüşüm odaklı dikey video kurguları. Sesi açmak için videoya dokunun.
            </p>
          </div>

          <div className="m-hide flex items-center gap-3">
            <button
              id="reels-prev-btn"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-[#262626] text-[#F6F6F6] flex items-center justify-center hover:bg-[#A40001] transition-all active:scale-90 shadow-md"
              aria-label="Sola Kaydır"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="reels-next-btn"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-[#262626] text-[#F6F6F6] flex items-center justify-center hover:bg-[#A40001] transition-all active:scale-90 shadow-md"
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


        <div ref={trackRef} className="flex w-max will-change-transform py-3">
          {loopItems.map((reel, index) => {
            const isUnmuted = unmutedId === reel.id;

            return (
              // Boşluk "gap" yerine padding ile veriliyor ki iki yarı birebir eşit olsun
              <div key={`${reel.id}-${index}`} className="flex-shrink-0 pr-5 sm:pr-7">
                <div
                  onClick={() => handleCardClick(reel.id)}
                  className={`w-[200px] sm:w-[260px] aspect-[9/16] rounded-[22px] relative overflow-hidden group border-2 transition-colors duration-300 bg-[#262626] ${
                    isUnmuted
                      ? 'border-[#A40001]'
                      : 'border-[#262626]/20 hover:border-[#262626]'
                  }`}
                >
                  <ReelVideo reel={reel} muted={!isUnmuted} />

                  <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-end">
                      <span
                        className={`p-2 rounded-full transition-colors ${
                          isUnmuted ? 'bg-[#A40001] text-[#F6F6F6]' : 'bg-[#262626]/90 text-[#F6F6F6]'
                        }`}
                        title={isUnmuted ? 'Sesi Kapat' : 'Sesi Aç'}
                      >
                        {isUnmuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                      </span>
                    </div>

                    <h3 className="self-start max-w-full px-3 py-2 rounded-xl bg-[#262626]/90 text-[#F6F6F6] text-sm font-bold leading-snug font-heading">
                      {reel.title}
                    </h3>
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
