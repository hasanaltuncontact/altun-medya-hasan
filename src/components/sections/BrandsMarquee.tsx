import Image from 'next/image';
import { clientLogos } from '@/data/clients';

export default function BrandsMarquee() {
  return (
    <section className="py-12 bg-[#050505] text-white overflow-hidden border-t border-white/10">
      {/* 15 REAL CLIENT SVGS MARQUEE */}
      <div className="relative w-full overflow-hidden flex pb-8 border-b border-white/10">
        <div className="animate-marquee-left flex items-center gap-14 sm:gap-24 opacity-80 hover:opacity-100 transition-opacity py-3">
          {/* Duplicate list to make infinite seamless marquee */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              onContextMenu={(e) => e.preventDefault()}
              className="h-16 sm:h-20 w-44 sm:w-60 lg:w-64 flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-300 px-3 relative select-none"
            >
              {/* PROTECTION OVERLAY TO PREVENT RIGHT CLICK / DRAG / DOWNLOAD */}
              <div className="absolute inset-0 z-20 bg-transparent select-none pointer-events-auto" onContextMenu={(e) => e.preventDefault()} />
              
              <img
                src={client.svgPath}
                alt={client.name}
                draggable={false}
                className="max-h-14 sm:max-h-16 lg:max-h-18 max-w-full object-contain filter brightness-0 invert opacity-75 hover:opacity-100 transition-all select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4 OFFICIAL PLATFORM PARTNER CARDS */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-heading">
              RESMİ MEDYA &amp; REKLAM PARTNERLERİMİZ
            </h3>
          </div>
          <p className="text-xs font-mono text-white/60 max-w-xs">
            Resmi reklam standartları, onaylı API entegrasyonları ve yetkili hesap optimizasyonu.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Meta Business */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0E0D13] hover:border-[#FF6B35] transition-all duration-300 group flex flex-col justify-between h-36 sm:h-40 shadow-sm cursor-pointer">
            <svg className="w-7 h-7 fill-current text-white group-hover:text-[#FF6B35] transition-colors" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
            </svg>
            <div>
              <div className="text-[10px] font-mono text-white/50 group-hover:text-[#FF6B35] uppercase tracking-wider">
                ADVERTISING
              </div>
              <div className="text-base font-extrabold font-heading text-white mt-0.5">
                Meta Business
              </div>
            </div>
          </div>

          {/* Google Partner */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0E0D13] hover:border-[#FF6B35] transition-all duration-300 group flex flex-col justify-between h-36 sm:h-40 shadow-sm cursor-pointer">
            <svg className="w-7 h-7 fill-current text-white group-hover:text-[#FF6B35] transition-colors" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <div>
              <div className="text-[10px] font-mono text-white/50 group-hover:text-[#FF6B35] uppercase tracking-wider">
                SEARCH &amp; ADS
              </div>
              <div className="text-base font-extrabold font-heading text-white mt-0.5">
                Google Partner
              </div>
            </div>
          </div>

          {/* TikTok Ads */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0E0D13] hover:border-[#FF6B35] transition-all duration-300 group flex flex-col justify-between h-36 sm:h-40 shadow-sm cursor-pointer">
            <svg className="w-7 h-7 fill-current text-white group-hover:text-[#FF6B35] transition-colors" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.74 1.42-.03 2.66-.99 3.04-2.35.14-.52.19-1.06.19-1.6V.02h-.07z" />
            </svg>
            <div>
              <div className="text-[10px] font-mono text-white/50 group-hover:text-[#FF6B35] uppercase tracking-wider">
                SHORT FORM MEDIA
              </div>
              <div className="text-base font-extrabold font-heading text-white mt-0.5">
                TikTok Ads
              </div>
            </div>
          </div>

          {/* Shopify Partner */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0E0D13] hover:border-[#FF6B35] transition-all duration-300 group flex flex-col justify-between h-36 sm:h-40 shadow-sm cursor-pointer">
            <svg className="w-7 h-7 fill-current text-white group-hover:text-[#FF6B35] transition-colors" viewBox="0 0 24 24">
              <path d="M12.396 2.01c-.13 0-.25.04-.34.12-.1.08-.16.2-.18.33l-.28 2.04c-.31.06-.61.13-.91.22l-1.35-1.57c-.09-.1-.21-.16-.34-.16-.13 0-.25.05-.34.15L7.296 4.45c-.17.18-.2.45-.07.67l1.09 1.76c-.23.2-.45.41-.65.64l-1.97-.66c-.13-.04-.26-.03-.38.03s-.2.17-.24.3l-.68 2.37c-.06.22.02.46.21.59l1.73 1.13c-.06.3-.11.6-.13.91l-2.04.35c-.13.02-.24.09-.32.19s-.11.23-.09.36l.44 2.43c.04.23.23.4.46.42l2.06.14c.05.3.13.6.22.9l-1.58 1.34c-.1.09-.16.21-.16.34s.05.25.15.34l1.31 1.36c.18.18.45.2.67.07l1.76-1.09c.2.23.41.45.64.65l-.66 1.97c.04.13.03.26-.03.38s-.17.2-.3.24l2.37.68c.22.06.46-.02.59-.21l1.13-1.73c.3.06.6.11.91.13l.35 2.04c.02.13.09.24.19.32s.23.11.36.09l2.43-.44c.23-.04.4-.23.42-.46l.14-2.06c.3-.05.6-.13.9-.22l1.34 1.58c.09.1.21.16.34.16s.25-.05.34-.15l1.36-1.31c.18-.18.2-.45.07-.67l-1.09-1.76c.23-.2.45-.41.65-.64l1.97.66c.13.04.26.03.38-.03s.2-.17.24-.3l.68-2.37c.06-.22-.02-.46-.21-.59l-1.73-1.13c.06-.3.11-.6.13-.91l2.04-.35c.13-.02.24-.09.32-.19s.11-.23.09-.36l-.44-2.43c-.04-.23-.23-.4-.46-.42l-2.06-.14c-.05-.3-.13-.6-.22-.9l1.58-1.34c.1-.09.16-.21.16-.34s-.05-.25-.15-.34l-1.31-1.36c-.18-.18-.45-.2-.67-.07l-1.76 1.09c-.2-.23-.41-.45-.64-.65l.66-1.97c.04-.13.03-.26-.03-.38s-.17-.2-.3-.24l-2.37-.68c-.22-.06-.46.02-.59.21l-1.13 1.73c-.3-.06-.6-.11-.91-.13l-.35-2.04c-.02-.13-.09-.24-.19-.32-.08-.07-.2-.11-.32-.11z" />
            </svg>
            <div>
              <div className="text-[10px] font-mono text-white/50 group-hover:text-[#FF6B35] uppercase tracking-wider">
                COMMERCE ENGINE
              </div>
              <div className="text-base font-extrabold font-heading text-white mt-0.5">
                Shopify Plus
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

