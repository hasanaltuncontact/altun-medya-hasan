import Link from 'next/link';
import { clientLogos, logoScale } from '@/data/clients';
import { profileHrefByLogoName } from '@/data/client-profiles';
import SectionHeading from '@/components/ui/SectionHeading';

// NOT: Yayından önce bu yorumlar gerçek müşteri yorumlarıyla (izinli) değiştirilmelidir.
type Review = { id: string; quote: string; name: string; role: string };

export const topRowReviews: Review[] = [
  {
    id: 'rev-1',
    quote: 'Lansman kurgusu ve Reels çekimleriyle iki ayda rezervasyonlarımız üçe katlandı.',
    name: 'Ayşe Demirtaş',
    role: 'Butik otel sahibi · Didim',
  },
  {
    id: 'rev-2',
    quote: "Takipçimiz iki ayda 800'den 44 bine çıktı. Videolar tam bizim dilimizle konuşuyor.",
    name: 'Kerem Yılmaz',
    role: 'Kafe işletmecisi · Akbük',
  },
  {
    id: 'rev-3',
    quote: 'Reels reklamlarıyla e-ticaret sitemizde reklam getirisi 2,1 kattan 5,2 kata çıktı.',
    name: 'Selin Aksoy',
    role: 'E-ticaret · Kuşadası',
  },
  {
    id: 'rev-4',
    quote: 'Çekim gününden reklam yönetimine kadar her şeyi onlar hallediyor, biz işimize bakıyoruz.',
    name: 'Murat Çelik',
    role: 'İnşaat firması · Didim',
  },
  {
    id: 'rev-5',
    quote: 'Web sitemizi yenilediler, artık telefonla gelen müşterinin çoğu Google’dan geliyor.',
    name: 'Hakan Öztürk',
    role: 'Oto servis · Söke',
  },
];

export const bottomRowReviews: Review[] = [
  {
    id: 'rev-6',
    quote: 'Mekânımızı olduğundan daha güzel değil, olduğu gibi güzel gösterdiler. Instagram sayfamız bambaşka oldu.',
    name: 'Burcu Kaya',
    role: 'Restoran sahibi · Yalıkavak',
  },
  {
    id: 'rev-7',
    quote: 'Ne istediğimizi ilk toplantıda anladılar. İçerik için harcadığımız zaman sıfıra indi.',
    name: 'Emre Şahin',
    role: 'Yazılım firması kurucusu · İzmir',
  },
  {
    id: 'rev-8',
    quote: 'Villa tanıtım videoları sayesinde yurt dışından doğrudan alıcı gelmeye başladı.',
    name: 'Ebru Güneş',
    role: 'Emlak danışmanı · Bodrum',
  },
  {
    id: 'rev-9',
    quote: "Yerel SEO çalışmasıyla Google Haritalar'da ilk sıraya çıktık, telefonlar durmuyor.",
    name: 'Caner Arslan',
    role: 'Restoran sahibi · Didim',
  },
  {
    id: 'rev-10',
    quote: 'Ürün çekimleri koleksiyonumuzu çok daha değerli gösterdi, satışlara hemen yansıdı.',
    name: 'Zeynep Aydın',
    role: 'Kuyumcu · Didim',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

/** İnce yorum kartı */
function ReviewCard({ rev }: { rev: Review }) {
  return (
    <figure className="w-[250px] sm:w-[300px] flex-shrink-0 px-4 py-3.5 rounded-2xl bg-[#0B0B0B] text-[#F8F0DB] flex flex-col justify-between gap-3">
      <blockquote className="text-[13px] sm:text-sm leading-snug text-[#F8F0DB]/85 line-clamp-3">
        &ldquo;{rev.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-2.5">
        <span className="w-7 h-7 rounded-full bg-[#F8F0DB] text-[#0B0B0B] text-[11px] font-bold grid place-items-center shrink-0">
          {initials(rev.name)}
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block text-[13px] font-bold truncate">{rev.name}</span>
          <span className="block text-[11px] text-[#F8F0DB]/50 truncate">{rev.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Sonsuz kayan sıra — liste 4 kez basılır, animasyon -%50 kaydığı için döngü kesintisiz */
function ReviewRow({ items, direction }: { items: Review[]; direction: 'left' | 'right' }) {
  return (
    <div className="flex overflow-hidden group">
      <div
        className={`flex w-max items-stretch gap-3 py-1.5 [animation-duration:60s] group-hover:[animation-play-state:paused] ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {[...items, ...items, ...items, ...items].map((rev, idx) => (
          <ReviewCard key={`${rev.id}-${idx}`} rev={rev} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="partners-reviews" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#F8F0DB] text-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        {/* BAŞLIK + TEK İSTATİSTİK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-12">
          <SectionHeading className="!mb-0" title="Müşteri Yorumları" />
          <div>
            <div className="text-5xl sm:text-7xl font-black font-heading leading-none">
              216<span className="text-accent">+</span>
            </div>
            <div className="text-sm opacity-60 mt-2">mutlu marka</div>
          </div>
        </div>

        {/* YORUMLAR — çift sıra, ters yönlerde kayan şerit */}
        <div
          className="mb-10 sm:mb-16 -mx-5 sm:-mx-10 lg:-mx-14 space-y-1"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)' }}
        >
          <ReviewRow items={topRowReviews} direction="left" />
          <ReviewRow items={bottomRowReviews} direction="right" />
        </div>


        {/* REFERANS LOGOLARI */}
        <div className="pt-8 sm:pt-12 border-t border-[#0B0B0B]/15">
          <SectionHeading title="Referanslarımız" desc="Birlikte çalıştığımız markalar." />

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {clientLogos.map((client, idx) => {
              const href = profileHrefByLogoName(client.name);
              return (
                <Link
                  key={`${client.name}-${idx}`}
                  href={href ?? '/referanslar'}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  aria-label={`${client.name} referans sayfası`}
                  className={`${idx >= 9 ? 'm-hide ' : ''}h-20 sm:h-32 p-3 sm:p-6 rounded-[18px] bg-[#F8F0DB]/60 border border-[#0B0B0B]/10 hover:bg-[#0B0B0B] flex items-center justify-center transition-colors duration-300 group select-none`}
                >
                  <img
                    src={client.svgPath}
                    alt={client.name}
                    draggable={false}
                    style={{ height: `calc(var(--logo-base) * ${logoScale(client.ratio)})` }}
                    className="[--logo-base:30px] sm:[--logo-base:60px] w-auto max-w-full object-contain filter brightness-0 group-hover:invert opacity-85 transition-[filter] select-none pointer-events-none"
                  />
                </Link>
              );
            })}
          </div>
          <div className="mt-6 sm:mt-10 flex justify-center">
            <Link
              href="/referanslar"
              className="px-7 py-3.5 rounded-full bg-accent text-onAccent text-sm font-bold hover:bg-[#0B0B0B] transition-colors shadow-md"
            >
              Tüm vaka çalışmaları
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
