'use client';

import Link from 'next/link';
import {
  MapPin,
  Search,
  ArrowUpRight,
  Camera,
  Film,
  Zap,
  Award,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Compass,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { seoKeywordsDetailed } from '@/config/seo-keywords';
import { blogPosts } from '@/data/blog-database';

export default function LocalSeoSection() {
  const featuredBlogArticles = blogPosts.slice(0, 3);

  return (
    <section id="seo-region" className="py-24 px-5 sm:px-10 lg:px-14 bg-[#0B0A12] text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B33A06]/20 border border-[#B33A06]/40 text-[#FF8A50] text-xs font-mono font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>DİDİM, AKBÜK, KUŞADASI, BODRUM &amp; AYDIN BÖLGESİ</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05] font-heading">
              <span className="font-black">DİDİM VE EGE</span>{' '}
              <span className="font-light text-white/80">KIYISINDA</span> <br />
              <span className="bg-[#B33A06] text-white px-3 py-1 rounded-lg inline-block mt-1 shadow-lg font-black">
                ZİRVEDE KONUMLANIN.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed font-sans">
              Altınkum sahilinden Akbük Koyu&apos;na, Didim D-Marin&apos;den Apollon Tapınağı çevresine kadar bölgenin tüm dinamiklerine hakim yerel SEO, 4K sinematik video prodüksiyonu ve Google Harita optimizasyonu.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#FF6B35]">
              <span>● Yerinde Çekim Ekibi</span>
              <span>● Google Sertifikalı SEO</span>
            </div>
          </div>
        </div>

        {/* DETAILED REGIONAL SEO CONTENT DEEP DIVE (DİDİM METİNLERİ) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: RICH DIDIM LOCAL SEO STRATEGY TEXT */}
          <div className="lg:col-span-7 space-y-6 bg-[#13121C] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#FF6B35] block">
                BÖLGESEL DİJİTAL HAKİMİYET
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Didim İşletmeleri İçin Neden Yerel SEO ve 4K Video Hayatidir?
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              <p>
                Didim, yalnızca yaz aylarında yüz binlerce yerli ve yabancı turisti ağırlayan bir tatil beldesi değil; aynı zamanda yıl boyu gayrimenkul, inşaat, sağlık ve yerel ticaretin hızla büyüdüğü stratejik bir Ege merkezidir. Bir turist Altınkum’da yürürken veya İngiltere’den Didim tatilini planlarken ilk baktığı yer <strong>Google Haritalar ve Instagram Reels</strong> akışıdır.
              </p>
              
              <p>
                İşletmenizin tabelasının güzel olması artık yeterli değildir. Müşteri adayı; mekanınızın atmosferini, yemeklerinizin sunumunu, otelinizin odalarını ve Google&apos;daki gerçek müşteri yorumlarını görmeden kapınızdan içeri adım atmaz. Altun Medya olarak Didim&apos;deki işletmelere özel <strong>360° Yerel Büyüme Mimarisi</strong> uyguluyoruz:
              </p>
            </div>

            {/* 3 CORE DIDIM PILLARS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#1B1A26] border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#B33A06] text-white flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="text-xs font-bold font-heading text-white">Google Harita İlk 3 (Local 3-Pack)</h4>
                <p className="text-[11px] text-white/70 font-sans leading-normal">
                  Aramalarda ilk 3 sırada çıkarak doğrudan yol tarifi ve telefon araması alın.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1B1A26] border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#B33A06] text-white flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="text-xs font-bold font-heading text-white">9:16 Viral Reels &amp; Drone</h4>
                <p className="text-[11px] text-white/70 font-sans leading-normal">
                  Altınkum ve Akbük kurgularıyla izleyicide karşı konulamaz ziyaret arzusu oluşturun.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1B1A26] border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#B33A06] text-white flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="text-xs font-bold font-heading text-white">Çok Dilli Turizm Reklamı</h4>
                <p className="text-[11px] text-white/70 font-sans leading-normal">
                  İngilizce ve Almanca hedefli Meta Ads ile erken rezervasyonları doldurun.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: DIDIM MICRO-REGIONS ACCORDION CARDS */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#13121C] text-white border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#FF6B35]" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  DİDİM MİKRO BÖLGE UZMANLIĞIMIZ
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#1B1A26] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#FF6B35] font-heading">Altınkum &amp; Yalı Caddesi</div>
                  <p className="text-[11px] text-white/70 font-sans">
                    Restoranlar, beach clublar, barlar ve su sporları için yüksek etkileşimli akşam kurguları ve yabancı turist reklamları.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1B1A26] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#FF6B35] font-heading">Akbük &amp; Çamlık Koyu</div>
                  <p className="text-[11px] text-white/70 font-sans">
                    Butik oteller, doğa tatil köyleri ve lüks müstakil villalar için 8K drone çekimleri ve huzur odaklı estetik prodüksiyon.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1B1A26] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#FF6B35] font-heading">Didim D-Marin &amp; Marina Hattı</div>
                  <p className="text-[11px] text-white/70 font-sans">
                    Yat kiralama, lüks gastronomi ve yüksek gelir grubuna hitap eden prestijli marka konumlandırması.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1B1A26] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#FF6B35] font-heading">Didim Merkez &amp; Cumhuriyet Cad.</div>
                  <p className="text-[11px] text-white/70 font-sans">
                    Diş klinikleri, oto servisler, avukatlık ve kurumsal şirketler için Google Yerel SEO ve profesyonel web mimarisi.
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK CONTACT BADGE */}
            <div className="p-5 rounded-2xl bg-[#13121C] text-white border border-white/10 flex items-center justify-between shadow-lg">
              <div>
                <div className="text-xs font-bold text-white">Didim Yerel SEO Analizi İster misiniz?</div>
                <div className="text-[10px] font-mono text-[#FF6B35]">İşletmenizi 24 saat içinde analiz edelim</div>
              </div>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-xl bg-[#B33A06] hover:bg-[#C84408] text-white text-xs font-mono font-bold transition-all whitespace-nowrap shadow-md"
              >
                Rehberleri Oku
              </Link>
            </div>
          </div>

        </div>

        {/* REGIONAL EQUIPMENT & TECHNICAL CAPABILITIES */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#13121C] text-white border border-white/10 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#FF6B35] font-bold uppercase tracking-widest block">
                BÖLGESEL ÇEKİM STANDARTLARI
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                Didim &amp; Ege Prodüksiyonlarında Kullandığımız Donanımlar
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono">
              ✦ SHGM Lisanslı Hava Çekimi
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#1B1A26] border border-white/10 hover:border-[#FF6B35]/40 transition-colors">
              <Film className="w-6 h-6 text-[#FF6B35] mb-2.5" />
              <h4 className="text-xs font-bold text-white font-heading">Sony FX6 &amp; Cinema Line</h4>
              <p className="text-[11px] text-white/70 font-sans mt-1">Sinematik 4K 120fps video prodüksiyonu ve renk derecelendirmesi.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B1A26] border border-white/10 hover:border-[#FF6B35]/40 transition-colors">
              <Zap className="w-6 h-6 text-[#FF6B35] mb-2.5" />
              <h4 className="text-xs font-bold text-white font-heading">DJI Inspire 3 &amp; Air 3</h4>
              <p className="text-[11px] text-white/70 font-sans mt-1">8K/4K havadan Didim sahilleri, koylar ve villa mimari çekimleri.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B1A26] border border-white/10 hover:border-[#FF6B35]/40 transition-colors">
              <Award className="w-6 h-6 text-[#FF6B35] mb-2.5" />
              <h4 className="text-xs font-bold text-white font-heading">Zeiss CP.3 Cinema Lens</h4>
              <p className="text-[11px] text-white/70 font-sans mt-1">Lüks otel, restoran ve mekan derinlik kurguları.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B1A26] border border-white/10 hover:border-[#FF6B35]/40 transition-colors">
              <Camera className="w-6 h-6 text-[#FF6B35] mb-2.5" />
              <h4 className="text-xs font-bold text-white font-heading">Profoto B10X Işık Filosu</h4>
              <p className="text-[11px] text-white/70 font-sans mt-1">Gece ve gündüz katalog, yemek ve kurumsal portre çekimleri.</p>
            </div>
          </div>
        </div>

        {/* SEO KEYWORD CARDS GRID */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/60 block">
                BÖLGESEL ANAHTAR KELİME DİZİNİ
              </span>
              <h3 className="text-2xl font-black font-heading text-white">
                Didim ve Ege Hizmet Hedeflemelerimiz
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoKeywordsDetailed.map((item) => (
              <div
                key={item.id}
                className="bg-[#13121C] p-6 rounded-2xl border border-white/10 hover:border-[#FF6B35] transition-all flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-mono font-bold uppercase border border-white/15">
                      {item.badge}
                    </span>
                    <Search className="w-4 h-4 text-white/40 group-hover:text-[#FF6B35] transition-colors" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white font-heading group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all">
                    {item.keyword}
                  </h3>
                  <p className="text-xs text-white/75 mt-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={`/hizmetler/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-[#B33A06] hover:bg-[#C84408] text-white px-3.5 py-2 rounded-xl transition-all w-fit shadow-md active:scale-95"
                >
                  <span>Hizmet Detayı</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED REGIONAL ARTICLES & BLOG PREVIEWS */}
        <div className="pt-10 border-t border-white/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B35] block">
                GÜNCEL YAYINLAR &amp; REHBERLER
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Didim &amp; Ege Dijital Pazarlama Blog Rehberleri
              </h3>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-[#B33A06] hover:text-white transition-all text-xs font-mono font-bold w-fit shadow-md"
            >
              <span>Tüm Rehberleri Oku</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="p-6 rounded-3xl bg-[#13121C] border border-white/10 hover:border-[#FF6B35] hover:shadow-2xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/90 text-white text-[10px] font-mono font-bold uppercase border border-white/20">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white font-heading group-hover:text-[#FF6B35] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-white/70 font-sans line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-white/90 group-hover:text-[#FF6B35]">
                  <span>{article.readTime}</span>
                  <span className="flex items-center gap-1">
                    <span>İncele</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
