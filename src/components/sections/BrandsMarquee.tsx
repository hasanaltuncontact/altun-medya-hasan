import { clientLogos, logoScale } from '@/data/clients';

const partners = ['Meta Business', 'Google Partner', 'TikTok Ads', 'Shopify Plus'];

export default function BrandsMarquee() {
  return (
    <section className="py-8 sm:py-12 bg-[#262626] text-[#F6F6F6] overflow-hidden border-t border-[#F6F6F6]/10">
      {/* Müşteri logoları kayan şerit */}
      <div className="pb-6 sm:pb-8 border-b border-[#F6F6F6]/10">
        {/* Kenarlarda yumuşak kaybolma yalnızca maske; arka plan düz renk */}
        <div
          className="relative max-w-screen-2xl mx-auto overflow-hidden flex"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)' }}
        >
          <div className="animate-marquee-left flex w-max items-center py-3">
            {/* Liste 2 kez basılır; animasyon tam -%50 kaydığı için döngü kesintisiz birleşir */}
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                onContextMenu={(e) => e.preventDefault()}
                className="h-16 sm:h-24 w-36 sm:w-60 mr-8 sm:mr-20 flex items-center justify-center flex-shrink-0 px-3 select-none"
              >
                <img
                  src={client.svgPath}
                  alt={client.name}
                  draggable={false}
                  style={{ height: `calc(var(--logo-base) * ${logoScale(client.ratio)})` }}
                  className="[--logo-base:38px] sm:[--logo-base:60px] w-auto max-w-full object-contain filter brightness-0 invert opacity-70 select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resmi partnerler — sade etiketler */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg font-bold font-heading">Resmi reklam partnerlerimiz</h3>
        <ul className="flex flex-wrap gap-2">
          {partners.map((p) => (
            <li key={p} className="px-4 py-2 rounded-full border border-[#F6F6F6]/20 text-sm">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
