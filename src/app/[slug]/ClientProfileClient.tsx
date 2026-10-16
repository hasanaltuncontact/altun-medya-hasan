'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Instagram, Globe, MapPin, Play, Share2, Check, Target, Trophy, Video, Camera, Plane, Code,
  Megaphone, Palette, Users, Search, Printer, BadgeCheck, ArrowUpRight, ArrowRight, ChevronRight,
  Sparkles, Film, Ticket,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import type { ClientLogo } from '@/data/clients';
import { clientProfiles, getProfileLogo, type ClientProfile, type ProfileVideo, type ServiceIcon } from '@/data/client-profiles';

interface Props {
  profile: ClientProfile;
  logo?: ClientLogo;
  videos: ProfileVideo[];
}

const ICONS: Record<ServiceIcon, typeof Video> = {
  video: Video, camera: Camera, drone: Plane, web: Code, ads: Megaphone,
  brand: Palette, social: Users, seo: Search, influencer: Sparkles, print: Printer,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function ClientProfileClient({ profile, logo, videos }: Props) {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const accent = profile.accent;
  const accentVars = { '--accent': accent } as CSSProperties;
  const others = clientProfiles.filter((p) => p.slug !== profile.slug);

  const handleShare = async () => {
    const url = window.location.href;
    const data = { title: `${profile.displayName} × ALTUN MEDYA`, text: profile.tagline, url };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
    } catch {
      /* kullanıcı paylaşımı iptal etti → kopyalamaya düş */
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const igUrl = profile.instagram?.handle ? `https://instagram.com/${profile.instagram.handle}` : undefined;

  const pillLinks = [
    igUrl && { href: igUrl, label: 'Instagram', icon: Instagram, external: true },
    profile.links.website && { href: profile.links.website, label: 'Web Sitesi', icon: Globe, external: true },
    videos.length > 0 && { href: '#icerikler', label: `Ürettiğimiz İçerikleri İzle (${videos.length})`, icon: Film, external: false },
    { href: '#vaka-calismasi', label: 'Neler Yaptık? — Vaka Çalışması', icon: Target, external: false },
    { href: profile.links.maps, label: `Konum · ${profile.location}`, icon: MapPin, external: true },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Video; external: boolean }[];

  return (
    <div style={accentVars} className="min-h-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white font-sans antialiased">
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isMobileMenuOpen={isMobileNavOpen}
      />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} onOpenBrief={() => setIsBriefOpen(true)} />

      <main className="pt-24">
        {/* ============ LINK-IN-BIO HERO ============ */}
        <section className="relative overflow-hidden px-5 pt-10 pb-20 sm:pt-14">
          {/* Arka plan: bulanık kapak + marka renginde ışıma */}
          {profile.cover && (
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center scale-125 blur-[80px] opacity-40"
              style={{ backgroundImage: `url(${profile.cover})` }}
            />
          )}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full blur-[160px] opacity-25 pointer-events-none"
            style={{ background: accent }}
          />

          <div className="relative max-w-xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-white/45 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/referanslar" className="hover:text-white transition-colors">Referanslar</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80 truncate">{profile.displayName}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-9 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
            >
              <button
                id="profile-share-button"
                onClick={handleShare}
                aria-label="Sayfayı paylaş"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-90"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
              {copied && (
                <span className="absolute top-6 right-16 text-[10px] font-mono text-emerald-400">Link kopyalandı</span>
              )}

              {/* Oval profil fotoğrafı — dönen marka rengi halkası */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto">
                <div
                  aria-hidden
                  className="absolute -inset-[5px] rounded-full animate-[spin_8s_linear_infinite]"
                  style={{ background: `conic-gradient(from 0deg, ${accent}, #B33A06, transparent 60%, ${accent})` }}
                />
                <div className="absolute inset-0 rounded-full bg-[#0A0A0A] p-[5px]">
                  <div
                    className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                    style={{ background: `radial-gradient(circle at 30% 25%, ${accent}, #0A0A0A 85%)` }}
                  >
                    {profile.cover ? (
                      <img src={profile.cover} alt={`${profile.displayName} profil görseli`} className="w-full h-full object-cover" />
                    ) : logo ? (
                      <img src={logo.svgPath} alt={profile.displayName} className="w-[68%] h-[68%] object-contain brightness-0 invert" />
                    ) : (
                      <span className="text-4xl font-black font-heading">{profile.displayName[0]}</span>
                    )}
                  </div>
                </div>
                <span
                  className="absolute bottom-1 right-1 w-9 h-9 rounded-full flex items-center justify-center border-4 border-[#0d0d0d]"
                  style={{ background: accent }}
                  title="ALTUN MEDYA doğrulanmış referans"
                >
                  <BadgeCheck className="w-4 h-4 text-black" />
                </span>
              </div>

              {/* Logo */}
              {logo && profile.cover && (
                <div className="mt-6 h-10 flex items-center justify-center">
                  <img src={logo.svgPath} alt={`${profile.displayName} logo`} className="max-h-full max-w-[180px] object-contain brightness-0 invert opacity-90" />
                </div>
              )}

              <div className="mt-5 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                  ALTUN MEDYA Referansı · {profile.since}&apos;den beri
                </span>
                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight">
                  {profile.displayName}
                </h1>
                <p className="mt-1.5 text-xs font-mono text-white/50">
                  {profile.sector} · {profile.location}
                </p>
                <p className="mt-4 text-[15px] text-white/75 leading-relaxed">{profile.tagline}</p>
              </div>

              {/* Oval yönlendirme butonları */}
              <div className="mt-7 space-y-3">
                {pillLinks.map(({ href, label, icon: Icon, external }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className="group flex items-center gap-3 w-full px-5 py-3.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-[color:var(--accent)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" style={{ color: accent }} />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-white/90 text-left">{label}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:rotate-45 transition-all" />
                  </motion.a>
                ))}
                <motion.button
                  id="profile-brief-button"
                  onClick={() => setIsBriefOpen(true)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + pillLinks.length * 0.07 }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-full bg-[#B33A06] hover:bg-[#c94409] text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-[0_15px_40px_-10px_rgba(179,58,6,0.7)] active:scale-[0.98]"
                >
                  <Ticket className="w-4 h-4" />
                  Markam İçin de Benzerini İstiyorum
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ SONUÇ RAKAMLARI ============ */}
        <section className="px-5 sm:px-10 lg:px-14 -mt-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {profile.results.map((r, i) => (
              <motion.div
                key={r.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative overflow-hidden p-6 rounded-3xl bg-[#0B0B0B] border border-white/10 text-center last:col-span-2 md:last:col-span-1"
              >
                <div aria-hidden className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-20" style={{ background: accent }} />
                <div className="text-3xl sm:text-5xl font-black font-heading tracking-tight" style={{ color: accent }}>
                  {r.value}
                </div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-white/55 font-bold">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ VAKA ÇALIŞMASI: HİKAYE + HEDEF ============ */}
        <section id="vaka-calismasi" className="scroll-mt-28 px-5 sm:px-10 lg:px-14 py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">Vaka Çalışması</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading leading-[1.05] tracking-tight">
                {profile.displayName} için <span className="font-light text-white/70">neler yaptık?</span>
              </h2>
              <div className="w-16 h-1 rounded-full" style={{ background: accent }} />
              {(profile.did ?? [profile.intro]).map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-white/75 leading-relaxed">{p}</p>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="p-7 rounded-[2rem] bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${accent}22` }}>
                    <Target className="w-5 h-5" style={{ color: accent }} />
                  </span>
                  <h3 className="text-xl font-bold font-heading">Önemli Kilometre Taşları</h3>
                </div>
                <ul className="space-y-4">
                  {(profile.milestones ?? []).map((g, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                      <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full text-[11px] font-mono font-bold flex items-center justify-center bg-white/5 border border-white/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ HİZMETLER ============ */}
        <section className="px-5 sm:px-10 lg:px-14 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">Verdiğimiz Hizmetler</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mt-2">Masaya getirdiklerimiz</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {profile.services.map((s, i) => {
                const Icon = ICONS[s.icon];
                return (
                  <motion.div
                    key={s.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                    className="group relative p-7 rounded-3xl bg-[#0B0B0B] border border-white/10 hover:border-[color:var(--accent)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div aria-hidden className="absolute inset-x-0 -bottom-24 h-40 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" style={{ background: accent }} />
                    <span className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" style={{ color: accent }} />
                    </span>
                    <h3 className="text-lg font-bold font-heading mb-2">{s.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ BAŞARILAR ============ */}
        <section className="px-5 sm:px-10 lg:px-14 pb-24">
          <motion.div
            {...fadeUp}
            className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 sm:p-12"
            style={{ background: `linear-gradient(135deg, ${accent}26 0%, #0A0A0A 55%)` }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-11 h-11 rounded-2xl bg-black/40 flex items-center justify-center">
                <Trophy className="w-5 h-5" style={{ color: accent }} />
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">Neleri başardık?</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(profile.achieved ?? []).map((a, i) => (
                <li key={i} className="flex gap-3 p-5 rounded-2xl bg-black/30 border border-white/10 text-sm sm:text-base text-white/85 leading-relaxed">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ============ ÜRETTİĞİMİZ İÇERİKLER ============ */}
        {(videos.length > 0 || profile.cover) && (
          <section id="icerikler" className="scroll-mt-28 px-5 sm:px-10 lg:px-14 pb-24">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="mb-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">Portfolyo</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mt-2">Ürettiğimiz içerikler</h2>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {videos.map((v) => (
                  <VideoCard key={v.videoUrl} video={v} accent={accent} />
                ))}
                {profile.cover && !videos.some((v) => v.posterImage === profile.cover) && (
                  <motion.figure {...fadeUp} className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 group">
                    <img src={profile.cover} alt={`${profile.displayName} için ALTUN MEDYA çalışması`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-xs font-mono text-white/80">
                      Kampanya görseli
                    </figcaption>
                  </motion.figure>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ============ DİĞER REFERANSLAR (iç link) ============ */}
        <section className="px-5 sm:px-10 lg:px-14 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">Diğer referanslarımız</h2>
              <Link href="/referanslar" className="text-xs font-mono font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-1.5">
                Tümü <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x [scrollbar-width:none]">
              {others.map((o) => {
                const l = getProfileLogo(o);
                return (
                  <Link key={o.slug} href={`/${o.slug}`} className="group snap-start shrink-0 w-24 text-center">
                    <span
                      className="block w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/60 transition-all group-hover:-translate-y-1"
                      style={{ background: `radial-gradient(circle at 30% 25%, ${o.accent}, #0A0A0A 85%)` }}
                    >
                      {o.cover ? (
                        <img src={o.cover} alt={o.displayName} loading="lazy" className="w-full h-full object-cover" />
                      ) : l ? (
                        <img src={l.svgPath} alt={o.displayName} loading="lazy" className="w-full h-full object-contain p-5 brightness-0 invert" />
                      ) : null}
                    </span>
                    <span className="mt-2 block text-[11px] font-semibold text-white/70 group-hover:text-white truncate">{o.displayName}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-5 sm:px-10 lg:px-14 bg-[#B33A06] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
              Sıradaki başarı hikayesi sizin markanız olsun.
            </h2>
            <p className="text-base sm:text-lg font-medium text-black/75 max-w-2xl mx-auto">
              {profile.displayName} için yaptığımız gibi; hedefinizi dinleyelim, içeriği üretelim, sonucu birlikte ölçelim.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                id="profile-cta-button"
                onClick={() => setIsBriefOpen(true)}
                className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-black text-white rounded-full hover:bg-black/90 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
              >
                <Ticket className="w-4 h-4 text-[#B33A06]" />
                Proje Biletini Kes
                <ArrowRight className="w-4 h-4 text-[#B33A06]" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
    </div>
  );
}

function VideoCard({ video, accent }: { video: ProfileVideo; accent: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div {...fadeUp} className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-black group">
      {playing ? (
        <video src={video.videoUrl} poster={video.posterImage} controls autoPlay playsInline className="w-full h-full object-cover" />
      ) : (
        <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full text-left" aria-label={`${video.title} videosunu oynat`}>
          <img src={video.posterImage} alt={video.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/30" />
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
            style={{ background: accent }}
          >
            <Play className="w-6 h-6 fill-black text-black ml-1" />
          </span>
          <span className="absolute inset-x-0 bottom-0 p-4">
            {video.views && (
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: accent }}>
                {video.views}
              </span>
            )}
            <span className="block text-sm font-bold text-white leading-snug font-heading">{video.title}</span>
          </span>
        </button>
      )}
    </motion.div>
  );
}
