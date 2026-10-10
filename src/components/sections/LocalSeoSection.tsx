import Link from 'next/link';
import { MapPin, Search, ArrowUpRight, Camera, Film, Zap, Award, BookOpen, ChevronRight } from 'lucide-react';
import { seoKeywordsDetailed } from '@/config/seo-keywords';

export default function LocalSeoSection() {
  return (
    <section id="seo-region" className="py-20 px-5 sm:px-10 lg:px-14 bg-[#D9D0C1] text-[#050505]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-xs font-mono text-black font-bold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>DİDİM, AKBÜK, KUŞADASI, BODRUM &amp; EGE BÖLGESİ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#050505] leading-tight font-heading">
              DİDİM VE EGE BÖLGESİNDE<br />
              <span className="bg-black text-[#C8FF00] px-2 py-0.5 inline-block mt-1">ZİRVEDE KONUMLANIN.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#050505]/85 max-w-md font-medium leading-relaxed font-sans">
            Didim Marina, Altınkum ve Ege sahilinde Google Haritalar, arama sonuçları ve sosyal medyada potansiyel müşterilerinizin sizi ilk saniyede bulmasını sağlayan 360° SEO ve prodüksiyon çözümleri.
          </p>
        </div>

        {/* REGIONAL EQUIPMENT & TECHNICAL CAPABILITIES */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#050505] text-white border border-black/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#C8FF00] font-bold uppercase tracking-widest block">
                BÖLGESEL ÇEKİM STANDARTLARI
              </span>
              <h3 className="text-xl font-extrabold text-white font-heading mt-0.5">
                Didim &amp; Ege Prodüksiyonlarında Kullandığımız Donanımlar
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Film className="w-5 h-5 text-[#C8FF00] mb-2" />
              <h4 className="text-xs font-bold text-white font-heading">Sony FX6 &amp; RED 6K</h4>
              <p className="text-[11px] text-white/60 font-sans mt-0.5">Sinematik 4K 120fps video prodüksiyonu.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-5 h-5 text-[#C8FF00] mb-2" />
              <h4 className="text-xs font-bold text-white font-heading">DJI Inspire 3 Drone</h4>
              <p className="text-[11px] text-white/60 font-sans mt-0.5">8K/4K havadan Didim sahil çekimleri.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Award className="w-5 h-5 text-[#C8FF00] mb-2" />
              <h4 className="text-xs font-bold text-white font-heading">Zeiss CP.3 Cinema Lens</h4>
              <p className="text-[11px] text-white/60 font-sans mt-0.5">Lüks otel ve mekan derinlik kurguları.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Camera className="w-5 h-5 text-[#C8FF00] mb-2" />
              <h4 className="text-xs font-bold text-white font-heading">Profoto B10X Stüdyo</h4>
              <p className="text-[11px] text-white/60 font-sans mt-0.5">Katalog ve ürün fotoğraf prodüksiyonu.</p>
            </div>
          </div>
        </div>

        {/* SEO KEYWORD CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoKeywordsDetailed.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F6F2] p-6 rounded-2xl border border-black/10 hover:border-black transition-all flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/10 text-[10px] font-mono font-bold text-black uppercase">
                    {item.badge}
                  </span>
                  <Search className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg font-extrabold text-[#050505] font-heading group-hover:translate-x-1 transition-transform">
                  {item.keyword}
                </h3>
                <p className="text-xs text-[#050505]/70 mt-2 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <Link
                href={`/hizmetler/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:text-[#C8FF00] hover:bg-black px-3 py-1.5 rounded-lg border border-black/15 transition-all w-fit"
              >
                <span>Hizmet Detayı</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* RELATED REGIONAL ARTICLES & GUIDES */}
        <div className="pt-8 border-t border-black/15 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/60">
                BÖLGESEL BİLGİ BANKASI
              </span>
              <h3 className="text-2xl font-extrabold text-[#050505] font-heading">
                Didim &amp; Ege Dijital Pazarlama Makaleleri
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-black/10 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-black/60 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                <span>TURİZM DİJİTALLEŞMESİ</span>
              </div>
              <h4 className="text-sm font-bold text-black font-heading">
                Didim Otel &amp; Beach Club Sosyal Medya Yönetimi
              </h4>
              <p className="text-xs text-black/70 mt-1.5 font-sans">
                Sezonel müşteri akışını artırmak için 4K sinematik çekimler ve hedefli Meta Ads stratejisi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-black/10 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-black/60 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                <span>GAYRİMENKUL &amp; MİMARİ</span>
              </div>
              <h4 className="text-sm font-bold text-black font-heading">
                Didim Villa &amp; Konut Çekimlerinde Drone Rehberi
              </h4>
              <p className="text-xs text-black/70 mt-1.5 font-sans">
                Uluslararası yatırımcılara yönelik 8K hava turları ve 9:16 sinematik villa videoları.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-black/10 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-black/60 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                <span>LOKAL SEO HAKİMİYETİ</span>
              </div>
              <h4 className="text-sm font-bold text-black font-heading">
                Google Haritalar Didim Sıralama Optimizasyonu
              </h4>
              <p className="text-xs text-black/70 mt-1.5 font-sans">
                Didim, Akbük ve Kuşadası&apos;nda Google Harita kayıtlarında ilk sırada çıkma teknikleri.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
