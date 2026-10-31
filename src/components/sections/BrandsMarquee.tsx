import { clientLogos, logoScale } from '@/data/clients';

const partners = ['Meta Business', 'Google Partner', 'TikTok Ads', 'Shopify Plus'];

export default function BrandsMarquee() {
  return (
    <section className="pt-6 pb-8 sm:pt-10 sm:pb-12 bg-[#141414] text-[#F8F0DB] overflow-hidden">
      {/* Müşteri logoları kayan şerit */}
      <div className="pb-6 sm:pb-8 border-b border-[#F8F0DB]/10">
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
      {/* Reklam partnerleri — tek satır */}
      <ul className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-5 sm:pt-7 flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-[#F8F0DB]/60">
        {partners.map((p) => (
          <li key={p} className="px-3.5 py-1.5 rounded-full border border-[#F8F0DB]/15">
            {p} Partneri
          </li>
        ))}
      </ul>
    </section>
  );
}
