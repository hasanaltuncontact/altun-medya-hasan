'use client';

import { ArrowRight, Sparkles, Building2, CheckCircle2, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onOpenBrief: () => void;
}

export default function HeroSection({ onOpenBrief }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 pb-20 px-5 sm:px-10 lg:px-14 flex flex-col justify-center bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND VIDEO OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105 filter blur-[2px]"
          poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1400&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-40114-large.mp4" type="video/mp4" />
        </video>
        {/* GRADIENT OVERLAYS FOR MAXIMUM TEXT READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
      </div>

      {/* NEON LIME GLOW ACCENT */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#C8FF00]/[0.06] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: HIGH-IMPACT CORPORATE TYPOGRAPHY */}
        <div className="lg:col-span-7 space-y-7">
          {/* POWERFUL HERO SLOGAN WITH INTENSE TYPOGRAPHY WEIGHT */}
          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[88px] tracking-[-0.04em] leading-[0.92] text-white font-heading font-black">
            <span className="font-normal block text-white/90">DİDİM&apos;DE MARKALARI</span>
            <span className="font-normal block text-white/90">DİJİTALDE GÜÇLÜ</span>
            <span className="text-[#C8FF00] font-black inline-block drop-shadow-[0_0_35px_rgba(200,255,0,0.25)]">
              BÜYÜTÜYORUZ.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 max-w-xl font-normal leading-relaxed">
            Stratejik marka danışmanlığı, 4K sinematik prodüksiyon, Next.js web mimarisi ve yüksek dönüşümlü dijital pazarlamayı kurumsal disiplinle sunuyoruz.
          </p>

          {/* CORPORATE ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBrief}
              className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#C8FF00] text-black rounded-xl hover:bg-[#D4FF28] hover:shadow-[0_0_35px_rgba(200,255,0,0.4)] transition-all flex items-center gap-2.5 active:scale-95 shadow-2xl"
            >
              <span>Stratejik Görüşme Planla</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="px-6 py-4 text-xs sm:text-sm font-bold tracking-wide bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-xl transition-all flex items-center gap-2 active:scale-95 backdrop-blur-md"
            >
              <span>Hizmetlerimizi İnceleyin</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C8FF00]" />
            </a>
          </div>

          {/* CORPORATE STATS BAND */}
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/15 max-w-lg">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">06<span className="text-[#C8FF00]">+</span></div>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#8E8E93] uppercase tracking-widest mt-1 font-bold">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">140<span className="text-[#C8FF00]">+</span></div>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#8E8E93] uppercase tracking-widest mt-1 font-bold">Kurumsal Case</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">48M<span className="text-[#C8FF00]">+</span></div>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#8E8E93] uppercase tracking-widest mt-1 font-bold">Organik Erişim</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: PRESTIGIOUS CORPORATE METRIC CARDS */}
        <div className="lg:col-span-5 space-y-5 relative">
          
          <div className="p-6 rounded-3xl bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/15 shadow-2xl relative overflow-hidden group hover:border-[#C8FF00]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C8FF00]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">360° MEDYA MİMARİSİ</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] animate-pulse" />
            </div>
            <p className="text-xs text-white/70 font-mono leading-relaxed">
              Fikir aşamasından yayın ve reklam optimizasyonuna kadar tam kapsamlı medya stüdyosu operasyonu.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#C8FF00]">
              <span>● Prodüksiyon • Web • SEO</span>
              <span className="font-bold">Ege Bölgesi</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/15 shadow-2xl relative overflow-hidden group hover:border-[#C8FF00]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#C8FF00]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">PERFORMANS &amp; BÜYÜME</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#C8FF00] bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                +342.8% VERİ ARTIŞI
              </span>
            </div>
            <p className="text-xs text-white/70 font-mono leading-relaxed">
              Ölçülebilir reklam bütçesi yönetimi, dönüşüm odaklı lansmanlar ve yüksek geri dönüş oranları.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3 text-xs font-mono text-white/80">
            <CheckCircle2 className="w-5 h-5 text-[#C8FF00] flex-shrink-0" />
            <span>Didim, Aydın, Bodrum ve Kuşadası Kurumsal Hizmet Ağı</span>
          </div>

        </div>

      </div>
    </section>
  );
}
