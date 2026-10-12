'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { creatorsList, creatorCategories, CreatorItem } from '@/data/creators';
import {
  Sparkles,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Instagram,
  Youtube,
  Send,
  ArrowRight,
  ShieldCheck,
  Video,
  Flame,
  Star,
  Zap,
  Building2,
  Calendar,
  Layers,
  ChevronRight,
  HelpCircle,
  Camera
} from 'lucide-react';

export default function InfluencerHubPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [selectedNiche, setSelectedNiche] = useState('all');
  const [selectedCreatorForBrief, setSelectedCreatorForBrief] = useState<CreatorItem | null>(null);

  // Form states
  const [activeFormTab, setActiveFormTab] = useState<'brand' | 'creator'>('brand');
  const [brandFormSuccess, setBrandFormSuccess] = useState(false);
  const [creatorFormSuccess, setCreatorFormSuccess] = useState(false);

  const filteredCreators = creatorsList.filter(
    (c) => selectedNiche === 'all' || c.nicheCategory === selectedNiche
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#070709] text-white min-h-screen">
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      <main className="pt-32 sm:pt-40 pb-24">
        
        {/* HERO SECTION */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-20 relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B33A06]/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10 space-y-8 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B33A06]/20 border border-[#B33A06]/40 text-[#FF6B35] text-xs font-mono font-bold tracking-wide">
              <Flame className="w-4 h-4 text-[#FF6B35]" />
              <span>DİDİM, BODRUM, KUŞADASI &amp; TÜRKİYE CREATOR NETWORK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading text-white tracking-tight leading-[1.02]">
              <span className="font-black">MARKANIZI</span>{' '}
              <span className="font-light text-white/80">EGE&apos;NİN EN ETKİLİ</span> <br />
              <span className="font-black text-[#FF6B35]">CREATOR AĞIYLA</span>{' '}
              <span className="font-light text-white/80">BÜYÜTÜN.</span>
            </h1>

            <p className="text-base sm:text-xl text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
              Didim, Bodrum ve Ege kıyılarında onaylı gastronomi, turizm, mimari ve lifestyle içerik üreticileriyle; kuru reklamlar yerine izleyicide gerçek arzu ve satın alma isteği uyandıran viral iş birlikleri.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  const formEl = document.getElementById('application-hub');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                  setActiveFormTab('brand');
                }}
                className="px-8 py-4 rounded-xl bg-[#B33A06] hover:bg-[#C84408] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-xl hover:shadow-[0_0_35px_rgba(179,58,6,0.4)] flex items-center gap-2 active:scale-95"
              >
                <span>Markam İçin Kampanya Başlat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const formEl = document.getElementById('application-hub');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                  setActiveFormTab('creator');
                }}
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold tracking-wide transition-all backdrop-blur-md flex items-center gap-2 active:scale-95"
              >
                <Users className="w-4 h-4 text-[#FF6B35]" />
                <span>İçerik Üreticisi Olarak Katıl</span>
              </button>
            </div>

            {/* KEY METRICS BAR */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white">50<span className="text-[#FF6B35]">+</span></div>
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Onaylı Influencer</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white">18.4M<span className="text-[#FF6B35]">+</span></div>
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Aylık Organik Erişim</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white">%7.8</div>
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Ortalama Etkileşim (ER)</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white">140<span className="text-[#FF6B35]">+</span></div>
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-widest mt-1 font-bold">Tamamlanan İş Birliği</div>
              </div>
            </div>
          </div>
        </section>

        {/* NICHE CATEGORY FILTER & CREATOR ROSTER */}
        <section id="creator-roster" className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-widest block mb-2">
                DOĞRULANMIŞ İÇERİK ÜRETİCİLERİ
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
                Sektörünüze En Uygun Yüzü Seçin
              </h2>
            </div>
            
            {/* TABS */}
            <div className="flex flex-wrap gap-2">
              {creatorCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedNiche(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedNiche === cat.id
                      ? 'bg-[#B33A06] text-white shadow-lg shadow-[#B33A06]/30'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* CREATOR CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCreators.map((creator) => (
              <div
                key={creator.id}
                className="group rounded-3xl bg-[#101015] border border-white/10 hover:border-[#B33A06]/60 transition-all p-5 flex flex-col justify-between space-y-4 shadow-xl hover:-translate-y-1.5 duration-300"
              >
                <div>
                  {/* AVATAR & BADGES */}
                  <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-4 bg-[radial-gradient(circle_at_50%_45%,rgba(179,58,6,0.45),transparent_65%)]">
                    <img
                      src={creator.avatarImage}
                      alt={`${creator.name} (${creator.handle})`}
                      loading="lazy"
                      className="absolute inset-x-0 top-1 mx-auto h-[82%] w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent" />

                    {/* TOP BADGE */}
                    {creator.engagementRate && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white font-bold">
                        <Star className="w-3 h-3 text-[#FF6B35] fill-current" />
                        <span>ER: {creator.engagementRate}</span>
                      </div>
                    )}

                    {/* BOTTOM INFO OVERLAY */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-extrabold font-heading text-white">{creator.name}</h3>
                        {creator.verified && (
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35] text-black" />
                        )}
                      </div>
                      <p className="text-xs font-mono text-[#FF6B35]">{creator.handle}</p>
                    </div>
                  </div>

                  {/* STATS ROW */}
                  <div className={`grid ${creator.reach ? 'grid-cols-2' : 'grid-cols-1'} gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-center mb-3`}>
                    <div>
                      <div className="text-xs font-mono text-white/50">Takipçi</div>
                      <div className="text-sm font-bold text-white font-heading">{creator.followers}</div>
                    </div>
                    {creator.reach && (
                      <div>
                        <div className="text-xs font-mono text-white/50">Aylık Erişim</div>
                        <div className="text-sm font-bold text-[#FF6B35] font-heading">{creator.reach}</div>
                      </div>
                    )}
                  </div>

                  {/* BIO */}
                  {creator.bio && (
                    <p className="text-xs text-white/70 font-sans leading-relaxed line-clamp-2">
                      {creator.bio}
                    </p>
                  )}

                  {/* PAST BRANDS */}
                  {creator.pastBrands && creator.pastBrands.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-white/50 uppercase block font-bold">Çalıştığı Markalar:</span>
                      <div className="flex flex-wrap gap-1">
                        {creator.pastBrands.map((b) => (
                          <span key={b} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80 font-mono">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ACTION BUTTON */}
                <button
                  onClick={() => {
                    setSelectedCreatorForBrief(creator);
                    setIsBriefOpen(true);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 group-hover:bg-[#B33A06] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all border border-white/10 group-hover:border-transparent active:scale-95"
                >
                  <span>İş Birliği Başlat</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B35] group-hover:text-white" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4 STRATEGIC CAMPAIGN MODELS */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-widest block">
              ÇALIŞMA MODELLERİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
              Her Bütçe ve Hedefe Özel İnfluencer Çözümleri
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-sans">
              Standart hikaye paylaşımlarının ötesine geçerek, Altun Medya prodüksiyon kalitesiyle desteklenen profesyonel kampanya modelleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#101015] border border-white/10 space-y-4 hover:border-[#B33A06]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#B33A06]/20 border border-[#B33A06]/40 flex items-center justify-center text-[#FF6B35]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Mekan &amp; Lansman Davetleri</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Yeni açılan restoran, otel veya sezon gala gecelerinde aynı anda 5-10 doğrulanmış influencer ağırlayarak Didim ve Ege akışını domine edin.
              </p>
              <ul className="text-[11px] font-mono text-white/60 space-y-1.5 pt-2 border-t border-white/10">
                <li>✦ 24 Saatte 500K+ Anlık İzlenme</li>
                <li>✦ Google Haritalar Konum Etiketi</li>
                <li>✦ Masa &amp; Rezervasyon Patlaması</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[#101015] border border-white/10 space-y-4 hover:border-[#B33A06]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#B33A06]/20 border border-[#B33A06]/40 flex items-center justify-center text-[#FF6B35]">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Ortak Prodüksiyonlu Reels</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                İçerik üreticisi kendi telefonundan değil; Altun Medya ekibinin Sony FX6 ve DJI Inspire 3 kameralarıyla sinematik kalitede çekilir.
              </p>
              <ul className="text-[11px] font-mono text-white/60 space-y-1.5 pt-2 border-t border-white/10">
                <li>✦ 4K 120fps Sinematik Doku</li>
                <li>✦ Profesyonel Ses Tasarımı &amp; ASMR</li>
                <li>✦ Ortak Gönderi (Collab Post)</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[#101015] border border-white/10 space-y-4 hover:border-[#B33A06]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#B33A06]/20 border border-[#B33A06]/40 flex items-center justify-center text-[#FF6B35]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Creator Ads &amp; Whitelisting</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                İnfluencer’ın videosunu doğrudan onun hesabı üzerinden sponsorlu Meta Ads olarak hedefli kitleye (Didim, İzmir, İstanbul vb.) reklam çıkarak doğrudan satış sağlayın.
              </p>
              <ul className="text-[11px] font-mono text-white/60 space-y-1.5 pt-2 border-t border-white/10">
                <li>✦ 4 Kat Daha Yüksek ROAS</li>
                <li>✦ %45 Daha Düşük Tıklama Maliyeti</li>
                <li>✦ Doğrudan WhatsApp/Web Trafiği</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[#101015] border border-white/10 space-y-4 hover:border-[#B33A06]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#B33A06]/20 border border-[#B33A06]/40 flex items-center justify-center text-[#FF6B35]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Sezonluk Marka Elçiliği</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Markanızın ruhuna uyan tek bir influencer ile 3 veya 6 aylık sözleşmeyle her ay düzenli içerik akışı sağlayarak güçlü tüketici bağı kurun.
              </p>
              <ul className="text-[11px] font-mono text-white/60 space-y-1.5 pt-2 border-t border-white/10">
                <li>✦ Uzun Vadeli Güven ve Sadakat</li>
                <li>✦ Aylık 4 Reels + 8 Story Paketi</li>
                <li>✦ Özel İndirim Kodu &amp; Satış Takibi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4-STEP STREAMLINED WORKFLOW */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0E13] border border-white/10 space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-widest block">
                ŞEFFAF SÜREÇ
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                İnfluencer Kampanyanız Nasıl Yönetilir?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black font-heading text-[#FF6B35]">01</div>
                <h4 className="text-sm font-bold font-heading text-white">Brief &amp; Kitle Hedefleme</h4>
                <p className="text-xs text-white/70 font-sans">
                  Hedef kitleniz, bütçeniz ve kampanyadan beklediğiniz dönüşüm (satış, rezervasyon, takipçi) analiz edilir.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black font-heading text-[#FF6B35]">02</div>
                <h4 className="text-sm font-bold font-heading text-white">Creator Eşleşmesi &amp; Sözleşme</h4>
                <p className="text-xs text-white/70 font-sans">
                  Bot takipçisi olmayan, doğrulanmış ER oranına sahip doğru isimlerle yasal sözleşme imzalanır.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black font-heading text-[#FF6B35]">03</div>
                <h4 className="text-sm font-bold font-heading text-white">Senaryo &amp; 4K Çekim</h4>
                <p className="text-xs text-white/70 font-sans">
                  Altun Medya kreatif ekibi senaryoyu hazırlar, çekim ekibimiz en yüksek sinematik standartta kayıt alır.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-black font-heading text-[#FF6B35]">04</div>
                <h4 className="text-sm font-bold font-heading text-white">Yayınlama &amp; Şeffaf Rapor</h4>
                <p className="text-xs text-white/70 font-sans">
                  İçerikler en yüksek etkileşim saatinde yayına alınır; izlenme, tıklanma ve ROI raporu müşteriye sunulur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TWO-WAY APPLICATION HUB (BRANDS & CREATORS) */}
        <section id="application-hub" className="px-5 sm:px-10 lg:px-14 max-w-4xl mx-auto mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141219] to-[#0A090D] border border-[#B33A06]/40 shadow-2xl space-y-8">
            
            {/* TABS SELECTOR */}
            <div className="flex rounded-2xl bg-white/5 p-1.5 border border-white/10 max-w-md mx-auto">
              <button
                onClick={() => setActiveFormTab('brand')}
                className={`flex-1 py-3 text-xs font-mono font-bold rounded-xl transition-all ${
                  activeFormTab === 'brand'
                    ? 'bg-[#B33A06] text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Markalar İçin Başvuru
              </button>
              <button
                onClick={() => setActiveFormTab('creator')}
                className={`flex-1 py-3 text-xs font-mono font-bold rounded-xl transition-all ${
                  activeFormTab === 'creator'
                    ? 'bg-[#B33A06] text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                İçerik Üreticileri İçin
              </button>
            </div>

            {/* BRAND CAMPAIGN FORM */}
            {activeFormTab === 'brand' && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black font-heading text-white">Markanız İçin İnfluencer Kampanyası Başlatın</h3>
                  <p className="text-xs text-white/70 font-sans">
                    Formu doldurun; 2 saat içinde markanıza uygun influencer önerileri ve bütçe planıyla dönüş yapalım.
                  </p>
                </div>

                {brandFormSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Talebiniz Alındı!</h4>
                    <p className="text-xs text-white/70 font-sans">
                      Medya ekibimiz en geç 2 saat içinde verdiğiniz iletişim kanalı üzerinden sizinle iletişime geçecektir.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBrandFormSuccess(true);
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans"
                  >
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">FİRMA / MARKA ADI *</label>
                      <input required type="text" placeholder="Örn: Cennet Koyu Beach Club" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">SEKTÖRÜNÜZ *</label>
                      <select required className="w-full bg-[#101015] border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white focus:outline-none">
                        <option value="gastronomi">Gastronomi, Restoran &amp; Cafe</option>
                        <option value="turizm">Otel, Beach Club &amp; Turizm</option>
                        <option value="gayrimenkul">Gayrimenkul, İnşaat &amp; Villa</option>
                        <option value="perakende">Lüks Perakende, Moda &amp; Takı</option>
                        <option value="saglik">Sağlık, Klinik &amp; Estetik</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">YETKİLİ AD SOYAD *</label>
                      <input required type="text" placeholder="Örn: Hasan Yılmaz" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">TELEFON / WHATSAPP *</label>
                      <input required type="tel" placeholder="0544 000 00 00" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">HEDEFİNİZ &amp; KAMPANYA DETAYLARI</label>
                      <textarea rows={3} placeholder="Örn: Didim sahilindeki yeni restoranımızın açılışı için gastronomi influencer'ları ile tadım ve reels kurgusu istiyoruz." className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl p-4 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button type="submit" className="w-full py-4 rounded-xl bg-[#B33A06] hover:bg-[#C84408] text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                        <span>Kampanya Teklifi ve Creator Listesi İste</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* CREATOR REGISTRATION FORM */}
            {activeFormTab === 'creator' && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black font-heading text-white">Altun Medya Creator Ağına Katılın</h3>
                  <p className="text-xs text-white/70 font-sans">
                    Ege ve Türkiye genelindeki seçkin markalarla ücretli iş birlikleri, otel davetleri ve 4K stüdyo desteği için ağımıza kaydolun.
                  </p>
                </div>

                {creatorFormSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Başvurunuz Alındı!</h4>
                    <p className="text-xs text-white/70 font-sans">
                      Profiliniz analiz edilip portföyümüze eklendiğinde size WhatsApp veya e-posta yoluyla ulaşacağız.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCreatorFormSuccess(true);
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans"
                  >
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">AD SOYAD *</label>
                      <input required type="text" placeholder="Örn: Ayşe Demir" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">INSTAGRAM KULLANICI ADI *</label>
                      <input required type="text" placeholder="@kullaniciadi" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">TAKİPÇİ SAYISI *</label>
                      <select required className="w-full bg-[#101015] border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white focus:outline-none">
                        <option value="nano">10K - 50K (Nano/Micro)</option>
                        <option value="mid">50K - 200K (Mid-Tier)</option>
                        <option value="macro">200K - 500K (Macro)</option>
                        <option value="mega">500K+ (Top Creator)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">TELEFON / İLETİŞİM *</label>
                      <input required type="tel" placeholder="05xx xxx xx xx" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-white/60 mb-1 font-bold">İÇERİK NİŞİNİZ &amp; ŞEHİR</label>
                      <input required type="text" placeholder="Örn: Seyahat & Otel Keşifleri / Didim - Bodrum - İzmir" className="w-full bg-white/5 border border-white/15 focus:border-[#B33A06] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none" />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button type="submit" className="w-full py-4 rounded-xl bg-[#B33A06] hover:bg-[#C84408] text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                        <span>Creator Ağına Katılma Başvurusu Yap</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-widest block">
              MERAK EDİLENLER
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              İnfluencer Pazarlaması Hakkında Sıkça Sorulanlar
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold font-heading text-white">İnfluencer seçimi nasıl yapılıyor?</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Her başvuruyu derinlemesine bot kontrolü, kitle coğrafyası (gerçekten Didim ve Türkiye’den mi takip ediliyor?) ve etkileşim oranı analizinden geçiriyoruz. Markanızın prestijine zarar verecek hesaplarla asla çalışmıyoruz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold font-heading text-white">Çekimlerde prodüksiyon desteği veriyor musunuz?</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Evet! Altun Medya prodüksiyon ekibi (Sony FX6 kameralar, DJI drone ve profesyonel ışık) çekim gününde sahada bulunur ve içerik üreticisinin videolarını sinematik kalitede çeker.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-sm font-bold font-heading text-white">Kampanya başarısını (ROI) nasıl ölçüyoruz?</h4>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Özel indirim kodları, UTM etiketli bağlantılar ve Meta reklam verileriyle kaç kişinin rezervasyon yaptığını veya satın aldığını net rakamlarla raporluyoruz.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <BriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
