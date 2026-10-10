import Image from 'next/image';
import { clientLogos } from '@/data/clients';

export const topRowReviews = [
  {
    id: 'rev-1',
    quote: 'Altun Medya sosyal medya yöneticimizin yerini aldı! Tüm lansman kurgusu ve Reels çekimleriyle 2 ayda dönüşümlerimiz üçe katlandı.',
    name: 'Maya Rodriguez',
    handle: '@maya.rodriguez • Vento Resort',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-2',
    quote: "Takipçilerimiz 2 ayda 800'den 44 bine çıktı! Hazırladıkları kurgular tam olarak markamızın diliyle konuşuyor.",
    name: 'Chloe Bennett',
    handle: '@chloe.bennett • Aura Living',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-3',
    quote: 'E-ticaret sitemizde kancalı Reels reklamları sayesinde ROAS 2.1x seviyesinden 5.2x seviyesine fırladı!',
    name: 'Selin Aksoy',
    handle: '@selin.aksoy • Nox Botanics',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-4',
    quote: 'Dükkanım için vazgeçilmez bir dönüm noktası oldu. Çekim gününden reklam optimizasyonuna kadar sıfır stres.',
    name: 'Murat Çelik',
    handle: '@murat.celik • Çelik İnşaat Didim',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
];

export const bottomRowReviews = [
  {
    id: 'rev-5',
    quote: "Sanatı ve lüks mekan algısını yansıtma biçimleri harika. Instagram feed'imiz sonunda mimari galerimiz kadar kusursuz ✨",
    name: 'Grace Walker',
    handle: '@grace.walker • Yalıkavak Marina',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-6',
    quote: 'Bu ekip ne istediğimizi ilk toplantıda anladı. Önceden içerik üretmek için ne kadar vakit kaybettiğimi şimdi anlıyorum.',
    name: 'Brad Cooper',
    handle: '@brad.cooper • Kozmo Cloud B2B',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-7',
    quote: 'Bodrum villa satışlarımız için hazırlanan 9:16 sinematik turlar doğrudan yurtdışından alıcı çekti. İnanılmaz bir verim!',
    name: 'Ebru Güneş',
    handle: '@ebru.gunes • Bodrum Prime Homes',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 'rev-8',
    quote: "Didim ve Kuşadası'nda yerel SEO ile Google Haritalar'da birinci sıraya çıktık. Telefonlarımız durmuyor.",
    name: 'Caner Arslan',
    handle: '@caner.arslan • Marina Gourmet',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
  },
];

export default function ReviewsSection() {
  return (
    <section id="partners-reviews" className="py-24 px-5 sm:px-10 lg:px-14 bg-[#F7F6F2] text-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* EDITORIAL REVIEWS HEADER & STATS */}
        <div className="mb-14 sm:mb-16">
          
          {/* Top Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 mb-8 sm:mb-10">

            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500 flex items-center gap-2 sm:gap-3 flex-wrap font-mono">
              <span>STRATEJİ</span>
              <span className="text-neutral-300">|</span>
              <span>İÇERİK</span>
              <span className="text-neutral-300">|</span>
              <span>REKLAM</span>
              <span className="text-neutral-300">|</span>
              <span>SONUÇ</span>
            </div>
          </div>

          {/* Main Title & Stat Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-[-0.04em] text-black leading-[0.96] font-heading">
                Birlikte ürettik,<br />
                birlikte büyüttük.
              </h2>

              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-800 leading-tight font-heading">
                Gerçek deneyimler. Gerçek sonuçlar.
              </div>

              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl font-normal leading-relaxed">
                Farklı sektörlerden markalarla kurduğumuz iş birlikleri, sadece projeler değil; uzun soluklu başarı hikayelerine dönüştü.
              </p>

              {/* Avatar Stack */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center -space-x-3 sm:-space-x-3.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                    alt="Murat Çelik"
                    className="avatar-stack-item w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-[#F7F6F2] shadow-md z-10 cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                    alt="Maya Rodriguez"
                    className="avatar-stack-item w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-[#F7F6F2] shadow-md z-20 cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                    alt="Brad Cooper"
                    className="avatar-stack-item w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-[#F7F6F2] shadow-md z-30 cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                    alt="Ebru Güneş"
                    className="avatar-stack-item w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-[#F7F6F2] shadow-md z-40 cursor-pointer"
                  />
                </div>

                <div className="w-[1px] h-8 bg-black/20 hidden xs:block" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8E1D5] text-neutral-800 flex items-center justify-center font-bold text-lg hover:scale-105 hover:bg-black hover:text-[#C8FF00] transition-all cursor-pointer shadow-sm">
                    +
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase leading-tight text-neutral-700 font-mono">
                    MARKA<br />HİKAYESİ<br />DAHA
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Stat */}
            <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-black/20 flex flex-col justify-center my-auto">
              <div className="space-y-1">
                <div className="text-6xl sm:text-7xl lg:text-[88px] font-bold text-black tracking-tight leading-none flex items-baseline font-heading">
                  <span>216</span>
                  <span className="text-[#C8FF00] bg-black rounded-lg px-2 ml-1.5 font-sans font-light text-5xl sm:text-6xl">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-neutral-800 pt-2 font-mono">
                  MARKA DENEYİMİ
                </div>
                <div className="text-[11px] font-mono text-neutral-500 pt-1">
                  Ege &amp; Uluslararası Pazarda %98.4 Memnuniyet
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* DOUBLE ROW OPPOSITE DIRECTION SCROLLING REVIEWS MARQUEE */}
        <div className="mb-16 space-y-6 overflow-hidden -mx-5 px-5 sm:-mx-10 sm:px-10">
          
          {/* TOP ROW: RIGHT TO LEFT (MARQUEE LEFT) */}
          <div className="relative w-full overflow-hidden flex">
            <div className="animate-marquee-left flex items-stretch gap-4 sm:gap-6 py-2">
              {[...topRowReviews, ...topRowReviews].map((rev, idx) => (
                <div
                  key={`${rev.id}-${idx}`}
                  className="w-[290px] sm:w-[350px] flex-shrink-0 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-black/30 transition-all"
                >
                  <blockquote className="text-xs sm:text-sm font-semibold text-black leading-relaxed font-sans">
                    &ldquo;{rev.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-black/5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-black/10"
                    />
                    <div>
                      <div className="text-xs font-bold text-black leading-tight font-heading">{rev.name}</div>
                      <div className="text-[10px] font-mono text-black/60">{rev.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW: LEFT TO RIGHT (MARQUEE RIGHT) */}
          <div className="relative w-full overflow-hidden flex">
            <div className="animate-marquee-right flex items-stretch gap-4 sm:gap-6 py-2">
              {[...bottomRowReviews, ...bottomRowReviews].map((rev, idx) => (
                <div
                  key={`${rev.id}-${idx}`}
                  className="w-[290px] sm:w-[350px] flex-shrink-0 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-black/30 transition-all"
                >
                  <blockquote className="text-xs sm:text-sm font-semibold text-black leading-relaxed font-sans">
                    &ldquo;{rev.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-black/5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-black/10"
                    />
                    <div>
                      <div className="text-xs font-bold text-black leading-tight font-heading">{rev.name}</div>
                      <div className="text-[10px] font-mono text-black/60">{rev.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 15 REAL CLIENT SVG LOGOS GRID */}
        <div className="pt-12 border-t border-black/15">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-black/70 font-bold block">
              PORTFÖYÜMÜZDE YER ALAN SEÇKİN MARKALAR
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clientLogos.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                onContextMenu={(e) => e.preventDefault()}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-black/10 flex flex-col items-center justify-center text-center space-y-3 hover:border-black/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative select-none cursor-default"
              >
                {/* INVISIBLE OVERLAY SHIELD TO PREVENT DRAGGING / SAVING / DOWNLOADING */}
                <div 
                  className="absolute inset-0 z-20 bg-transparent select-none" 
                  onContextMenu={(e) => e.preventDefault()} 
                  onDragStart={(e) => e.preventDefault()}
                />

                <div className="h-14 sm:h-16 w-full flex items-center justify-center px-2 relative z-10">
                  <img
                    src={client.svgPath}
                    alt={client.name}
                    draggable={false}
                    className="max-h-12 sm:max-h-14 max-w-full object-contain filter brightness-0 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 select-none pointer-events-none"
                  />
                </div>
                <span className="text-xs font-extrabold text-black/80 font-heading truncate w-full relative z-10">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
