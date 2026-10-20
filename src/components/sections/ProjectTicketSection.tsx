'use client';

import AltunMedyaLogo from "@/components/layout/AltunMedyaLogo";

import { useState, useEffect } from 'react';
import { Sparkles, Scissors, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { servicesDatabase } from '@/data/services-database';

interface ProjectTicketSectionProps {
  onOpenBriefWithService?: (slug: string) => void;
}

export default function ProjectTicketSection({ onOpenBriefWithService }: ProjectTicketSectionProps) {
  const [selectedSlug, setSelectedSlug] = useState(servicesDatabase[0].slug);
  // Sabit başlangıç değeri (sunucu = tarayıcı), rastgele kod sadece tarayıcıda üretilir
  const [ticketCode, setTicketCode] = useState('ALT-2026-0000');
  useEffect(() => {
    setTicketCode(`ALT-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  }, []);
  
  // Animation states
  const [isTearing, setIsTearing] = useState(false);
  const [isCutDone, setIsCutDone] = useState(false);

  const handleStampAndRedirect = () => {
    if (isTearing) return;

    setIsTearing(true);

    // Step 1: 700ms - Scissor animation
    setTimeout(() => {
      setIsCutDone(true);
    }, 700);

    // Step 2: 2000ms total - Left stub goes left, Right stub goes right & redirects to WhatsApp
    setTimeout(() => {
      const selectedService = servicesDatabase.find((s) => s.slug === selectedSlug);
      const serviceTitle = selectedService ? selectedService.title : 'Genel Medya & Yazılım';

      const message = `Merhaba Altun Medya! ${ticketCode} kodlu VIP Bilet ile teklif almak istiyorum.\n\nSeçtiğim Hizmet: ${serviceTitle}`;
      const waUrl = `https://wa.me/905443135557?text=${encodeURIComponent(message)}`;

      window.location.href = waUrl;

      // Reset state in case user returns
      setTimeout(() => {
        setIsTearing(false);
        setIsCutDone(false);
      }, 1000);
    }, 2000);
  };

  return (
    <section id="ticket-section" className="py-24 px-5 sm:px-10 lg:px-14 bg-[#050505] text-white relative overflow-hidden">
      {/* BACKGROUND NEON GLOW ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#B33A06]/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl xs:text-4xl sm:text-6xl tracking-tight text-white leading-tight font-heading">
            <span className="font-black">PROJE BİLETİNİ</span><br />
            <span className="font-light text-white/80">BİRLİKTE</span>{' '}
            <span className="font-black text-[#FF6B35]">KESELİM.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8E8E93] font-mono leading-relaxed">
            Hizmetinizi seçin, &quot;Bileti Kes&quot; butonuna basarak biletin 2 parça halinde kopma animasyonuyla WhatsApp canlı stüdyo ekibimize anında ulaşın.
          </p>
        </div>

        {/* MODERN HYPERS STYLE DUAL-CARD TICKET WITH SEAM NOTCH */}
        <div className="w-full flex justify-center py-4 relative">
          
          {/* APPROVAL STAMP BADGE ON CUT DONE */}
          {isCutDone && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-40 bg-[#B33A06] text-white border-2 border-[#C84408] px-6 py-2.5 rounded-2xl font-mono text-xs font-black shadow-2xl tracking-widest uppercase flex items-center gap-2 animate-bounce">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>BİLET KESİLDİ • WHATSAPP&apos;A YÖNLENDİRİLİYORSUNUZ...</span>
            </div>
          )}

          <div className="w-full max-w-3xl flex flex-col md:flex-row gap-2.5 sm:gap-3.5 relative items-stretch">
            
            {/* LEFT TICKET CARD */}
            <div
              className={`md:w-2/3 bg-[#B33A06] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 flex flex-col justify-between space-y-6 shadow-[0_25px_60px_rgba(179,58,6,0.25)] border border-black/10 relative transition-all duration-1000 ease-out z-10 ${
                isCutDone ? 'transform md:-translate-x-28 -translate-y-10 md:translate-y-0 md:-rotate-6 opacity-95' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <AltunMedyaLogo className="h-8 sm:h-10 w-auto text-white" showStar={false} />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-black/90 text-white border border-white/20 text-[10px] font-mono font-extrabold uppercase tracking-widest shadow-md">
                    VIP PASS ACCESS
                  </span>
                </div>

                {/* HASHTAG BADGES */}
                <div className="flex flex-wrap gap-2 text-xs font-black text-white/90 pb-4 border-b border-white/20 font-mono">
                  <span>#branding</span>
                  <span>#creative</span>
                  <span>#reels</span>
                  <span>#seo</span>
                  <span>#performance</span>
                </div>
              </div>

              {/* SERVICE SELECTION DROPDOWN */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-extrabold uppercase text-white/90">
                  HİZMET KATEGORİSİ SEÇİN:
                </label>
                <select
                  disabled={isTearing}
                  value={selectedSlug}
                  onChange={(e) => setSelectedSlug(e.target.value)}
                  className="w-full bg-black text-white rounded-xl px-4 py-3 text-xs sm:text-sm font-mono font-bold border border-white/20 focus:outline-none focus:ring-2 focus:ring-white shadow-lg disabled:opacity-75"
                >
                  {servicesDatabase.map((cat) => (
                    <option key={cat.id} value={cat.slug} className="bg-neutral-900 text-white">
                      {cat.number} — {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* HQ & REGIONAL HUB INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-1">
                <div>
                  <div className="font-extrabold text-white uppercase text-[11px]">ALTUN HQ &amp; STUDIO</div>
                  <div className="text-white/80 mt-0.5 leading-snug">Didim / Aydın Merkez Stüdyo</div>
                </div>
                <div>
                  <div className="font-extrabold text-white uppercase text-[11px]">EGE REGIONAL HUBS</div>
                  <div className="text-white/80 mt-0.5 leading-snug">Bodrum • Kuşadası • Akbük</div>
                </div>
              </div>

              {/* TICKET BARCODE & CODE */}
              <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                <div className="font-mono text-[11px] text-white/80 tracking-widest uppercase font-bold">
                  TICKET NO: <span className="text-white font-extrabold">{ticketCode}</span>
                </div>
                <div className="flex items-center gap-1 h-4 opacity-90">
                  <span className="w-[2px] h-full bg-white" />
                  <span className="w-[4px] h-full bg-white" />
                  <span className="w-[1px] h-full bg-white" />
                  <span className="w-[3px] h-full bg-white" />
                  <span className="w-[2px] h-full bg-white" />
                  <span className="w-[4px] h-full bg-white" />
                  <span className="w-[1px] h-full bg-white" />
                </div>
              </div>
            </div>

            {/* SCISSOR CUT OVERLAY ANIMATION */}
            {isTearing && (
              <div className="hidden md:flex absolute left-[66.666%] top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 justify-center items-center">
                <div className="h-full border-l-2 border-dashed border-white/40 relative w-0">
                  <div
                    className="absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-linear flex items-center justify-center text-white"
                    style={{
                      top: isCutDone ? '100%' : '0%',
                      transform: 'translate(-50%, -50%) rotate(90deg)'
                    }}
                  >
                    <Scissors className="w-8 h-8 text-white drop-shadow-lg animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {/* RIGHT TICKET CARD */}
            <div
              className={`md:w-1/3 bg-[#B33A06] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_25px_60px_rgba(179,58,6,0.25)] border border-black/10 relative transition-all duration-1000 ease-out z-10 ${
                isCutDone ? 'transform md:translate-x-28 translate-y-10 md:translate-y-0 md:rotate-6 opacity-0 pointer-events-none' : ''
              }`}
            >
              <div className="my-auto py-4 space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className={`w-12 h-12 sm:w-16 sm:h-16 text-white transition-transform duration-700 drop-shadow-md ${
                      isTearing ? 'rotate-90 scale-110' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0 C12 6.627 17.373 12 24 12 C17.373 12 12 17.373 12 24 C12 17.373 6.627 12 0 12 C6.627 12 12 6.627 12 0 Z" />
                  </svg>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-white lowercase leading-none font-heading">
                    altun<span className="text-white">✦</span>
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-white/90 font-extrabold">
                  ALTUN CREATIVE PASS
                </div>
              </div>

              <button
                onClick={handleStampAndRedirect}
                disabled={isTearing}
                className={`w-full py-4 px-4 rounded-2xl bg-white text-black text-xs font-mono font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl transition-all border border-white hover:bg-neutral-100 ${
                  isTearing
                    ? 'bg-neutral-200 text-black animate-pulse'
                    : 'hover:scale-[1.02] active:scale-95'
                }`}
              >
                {isTearing ? (
                  <>
                    <span>BİLET KESİLİYOR...</span>
                    <Scissors className="w-4 h-4 text-[#B33A06] animate-spin" />
                  </>
                ) : (
                  <>
                    <span>BİLETİ KES &amp; BAŞLAT</span>
                    <Scissors className="w-4 h-4 text-[#B33A06]" />
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* TRUST BADGES BELOW TICKET */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/80 pt-2">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FF6B35]" />
            <span>WhatsApp Anında Bağlantı (905443135557)</span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
            <span>Ücretsiz Ön Analiz &amp; Briefing</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span>360° Stüdyo Garantisi</span>
          </span>
        </div>

      </div>
    </section>
  );
}
