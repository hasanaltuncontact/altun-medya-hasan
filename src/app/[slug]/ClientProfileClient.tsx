'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Instagram, Globe, MapPin, Play, Share2, Check, Target, Video, Camera, Plane, Code,
  Megaphone, Palette, Users, Search, Printer, ArrowUpRight, ArrowRight, ArrowLeft, ChevronRight,
  Sparkles, Film, Ticket, Plus, Minus,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import BrandAvatar, { brandSurface, mixHex } from '@/components/ui/BrandAvatar';
import StarDivider, { BrandStar } from '@/components/ui/StarDivider';
import type { ClientLogo } from '@/data/clients';
import { clientProfiles, getProfileLogo, type ClientProfile, type ProfileVideo, type ServiceIcon } from '@/data/client-profiles';

interface Props {
  profile: ClientProfile;
  logo?: ClientLogo;
  videos: ProfileVideo[];
}

/* Sitenin 3 ana rengi — bölümler bu sırayla geçer */
const DARK = '#050505';
const CREAM = '#F1F0EA';
const ORANGE = '#B33A06';

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
  /** Krem zeminde okunabilir koyu marka tonu */
  const accentInk = mixHex(accent, DARK, 0.35);
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
    videos.length > 0 && { href: '#icerikler', label: `İçerikler (${videos.length})`, icon: Film, external: false },
    { href: '#vaka-calismasi', label: 'Vaka Çalışması', icon: Target, external: false },
    { href: profile.links.maps, label: profile.location, icon: MapPin, external: true },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Video; external: boolean }[];

  return (
    <div style={accentVars} className="min-h-screen bg-[#050505] text-white selection:bg-[#B33A06] selection:text-white font-sans antialiased">
      <Header
        onOpenBrief={() => setIsBriefOpen(true)}
        onToggleMobileMenu={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isMobileMenuOpen={isMobileNavOpen}
      />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} onOpenBrief={() => setIsBriefOpen(true)} />

      <main>
        {/* ═══════════════ 1 · HERO (KOYU) — YATAY BÖLÜNMÜŞ ═══════════════ */}
        <section className="relative overflow-hidden bg-[#050505] pt-28 pb-24 sm:pb-32 px-5 sm:px-10 lg:px-14">
          <div
            aria-hidden
            className="absolute -top-60 -left-40 w-[760px] h-[760px] rounded-full blur-[170px] opacity-25 pointer-events-none"
            style={{ background: accent }}
          />
          <div aria-hidden className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full blur-[160px] opacity-20 pointer-events-none bg-[#B33A06]" />
          {/* Dev arka plan yıldızı */}
          <BrandStar className="absolute -right-24 top-24 w-[520px] h-[520px] opacity-[0.04] pointer-events-none" color="#FFFFFF" />

          <div className="relative max-w-7xl mx-auto">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono text-white/45 mb-10">
              <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/referanslar" className="hover:text-white transition-colors">Referanslar</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80 truncate">{profile.displayName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* SOL — kimlik */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 xl:col-span-5"
              >
                <div className="flex items-center gap-5 sm:gap-6">
                  <BrandAvatar
                    accent={accent}
                    logoSrc={logo?.svgPath}
                    name={profile.displayName}
                    className="w-28 h-28 sm:w-36 sm:h-36"
                    ring
                    priority
                  />
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                      Referans · {profile.since}&apos;den beri
                    </span>
                    <p className="mt-3 text-xs font-mono text-white/50 leading-relaxed">
                      {profile.sector}
                      <br />
                      {profile.location}
                    </p>
                  </div>
                </div>

                <h1
                  className={`mt-8 font-black font-heading tracking-tight leading-[0.95] [overflow-wrap:anywhere] ${
                    profile.displayName.length > 16
                      ? 'text-4xl sm:text-5xl'
                      : 'text-5xl sm:text-6xl xl:text-7xl'
                  }`}
                >
                  {profile.displayName}
                  <span className="inline-block align-top ml-2">
                    <BrandStar className="w-6 h-6 sm:w-8 sm:h-8" color={ORANGE} />
                  </span>
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">{profile.tagline}</p>

                {/* Yatay yönlendirme hapları */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {pillLinks.map(({ href, label, icon: Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-[color:var(--accent)] transition-all text-sm font-semibold text-white/85"
                    >
                      <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
                      </span>
                      {label}
                    </a>
                  ))}
                  <button
                    id="profile-share-button"
                    onClick={handleShare}
                    aria-label="Sayfayı paylaş"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] transition-all text-sm font-semibold text-white/85"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                    {copied ? 'Kopyalandı' : 'Paylaş'}
                  </button>
                </div>

                <button
                  id="profile-brief-button"
                  onClick={() => setIsBriefOpen(true)}
                  className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#B33A06] hover:bg-[#c94409] text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-[0_15px_40px_-10px_rgba(179,58,6,0.7)] active:scale-[0.98]"
                >
                  <Ticket className="w-4 h-4" />
                  Markam İçin de Benzerini İstiyorum
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* SAĞ — geniş yatay vitrin */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 xl:col-span-7 relative"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)]">
                  {profile.cover ? (
                    <img src={profile.cover} alt={`${profile.displayName} için ALTUN MEDYA çalışması`} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0" style={{ background: brandSurface(accent) }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
                  {logo && (
                    <img
                      src={logo.svgPath}
                      alt=""
                      aria-hidden
                      className="absolute left-7 bottom-7 max-h-12 max-w-[45%] object-contain brightness-0 invert opacity-95"
                    />
                  )}
                  <span className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-widest text-white/85">
                    altun<span style={{ color: ORANGE }}>✦</span>medya × {profile.displayName}
                  </span>
                </div>

                {/* Yüzen sonuç kartları */}
                {profile.results.slice(0, 2).map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className={`absolute hidden sm:block px-5 py-4 rounded-2xl shadow-2xl ${
                      i === 0 ? '-left-6 top-10 bg-[#F1F0EA] text-black' : '-right-4 -bottom-8 bg-[#B33A06] text-white'
                    }`}
                  >
                    <div className="text-3xl font-black font-heading leading-none" style={i === 0 ? { color: accentInk } : undefined}>
                      {r.value}
                    </div>
                    <div className={`mt-1 text-[10px] font-mono font-bold uppercase tracking-widest ${i === 0 ? 'text-black/60' : 'text-white/80'}`}>
                      {r.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <StarDivider from={DARK} to={CREAM} badge={ORANGE} star={CREAM} />

        {/* ═══════════════ 2 · VAKA ÇALIŞMASI (KREM) ═══════════════ */}
        <section id="vaka-calismasi" className="scroll-mt-20 bg-[#F1F0EA] text-[#0A0A0A] pt-24 pb-24 sm:pb-32 px-5 sm:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto">
            {/* Yatay sonuç bandı — yıldızlarla ayrılır */}
            <motion.div {...fadeUp} className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 md:gap-4 pb-14 border-b border-black/10">
              {profile.results.map((r, i) => (
                <div key={r.label} className="flex items-center gap-4 md:gap-6 flex-1">
                  {i > 0 && <BrandStar className="hidden md:block w-5 h-5 shrink-0" color={ORANGE} />}
                  <div className={i > 0 ? 'md:pl-2' : ''}>
                    <div className="text-5xl sm:text-6xl font-black font-heading tracking-tight leading-none" style={{ color: accentInk }}>
                      {r.value}
                    </div>
                    <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-black/55 font-bold">{r.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <motion.div {...fadeUp} className="lg:col-span-5 lg:sticky lg:top-28 self-start">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">
                  <BrandStar className="w-3.5 h-3.5" color={ORANGE} /> Vaka Çalışması
                </span>
                <h2 className="mt-4 text-4xl sm:text-6xl font-black font-heading leading-[0.95] tracking-tight">
                  Neler
                  <br />
                  <span className="font-light">yaptık?</span>
                </h2>
                <div className="mt-6 h-1.5 w-24 rounded-full" style={{ background: `linear-gradient(90deg, ${ORANGE}, ${accent})` }} />
              </motion.div>

              <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
                {(profile.did ?? [profile.intro]).map((p, i) => (
                  <p key={i} className="text-lg sm:text-xl text-black/75 leading-relaxed">
                    {i === 0 && <span className="float-left mr-3 text-6xl font-black font-heading leading-[0.8]" style={{ color: ORANGE }}>{p[0]}</span>}
                    {i === 0 ? p.slice(1) : p}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <StarDivider from={CREAM} to={ORANGE} badge={DARK} star={ORANGE} />

        {/* ═══════════════ 3 · YATAY YOLCULUK (TURUNCU) ═══════════════ */}
        <HorizontalRail bg={ORANGE}>
          {/* Başlık kartı */}
          <div className="shrink-0 w-[82vw] sm:w-[420px] h-[var(--rail-h)] flex flex-col justify-between pr-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/70">Hizmetler & Süreç</span>
              <h2 className="mt-4 text-5xl sm:text-6xl font-black font-heading leading-[0.92] tracking-tight text-white">
                Masaya
                <br />
                getirdik-
                <br />
                <span className="text-black">lerimiz.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm font-mono font-bold text-black/75">
              <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" />
              </span>
              Kaydırdıkça yatay ilerler
            </div>
          </div>

          {profile.services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.title}
                className="group shrink-0 w-[78vw] sm:w-[340px] h-[var(--rail-h)] p-8 rounded-[2rem] bg-[#050505] text-white flex flex-col justify-between border border-black/20 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex items-start justify-between">
                  <span className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${accent}26` }}>
                    <Icon className="w-6 h-6" style={{ color: accent }} />
                  </span>
                  <span className="text-6xl font-black font-heading text-white/10 leading-none">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-3">{s.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Kilometre taşları — krem kartlar */}
          {(profile.milestones ?? []).map((m, i) => (
            <div
              key={i}
              className="shrink-0 w-[70vw] sm:w-[300px] h-[var(--rail-h)] p-8 rounded-[2rem] bg-[#F1F0EA] text-black flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/50">Kilometre Taşı</span>
                <BrandStar className="w-5 h-5" color={ORANGE} />
              </div>
              <div>
                <div className="text-7xl font-black font-heading leading-none mb-5" style={{ color: accentInk }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-base font-semibold leading-relaxed text-black/80">{m}</p>
              </div>
            </div>
          ))}

          {/* Kapanış kartı */}
          <div className="shrink-0 w-[70vw] sm:w-[320px] h-[var(--rail-h)] rounded-[2rem] flex flex-col items-center justify-center text-center p-8" style={{ background: brandSurface(accent) }}>
            <BrandAvatar accent={DARK} logoSrc={logo?.svgPath} name={profile.displayName} className="w-24 h-24" />
            <p className="mt-6 text-xl font-bold font-heading text-white">Sonuç?</p>
            <a href="#basarilar" className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">
              Rakamlara geç <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </HorizontalRail>

        <StarDivider from={ORANGE} to={DARK} badge={CREAM} star={ORANGE} />

        {/* ═══════════════ 4 · BAŞARILAR + İÇERİKLER (KOYU) ═══════════════ */}
        <section id="basarilar" className="scroll-mt-20 bg-[#050505] pt-24 pb-24 sm:pb-32 overflow-hidden">
          <div className="px-5 sm:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest" style={{ color: accent }}>
                  <BrandStar className="w-3.5 h-3.5" color={accent} /> Neleri Başardık
                </span>
                <h2 className="mt-3 text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[0.95]">
                  Ölçülebilir
                  <br />
                  <span className="font-light text-white/60">sonuçlar.</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  {profile.results.map((r) => (
                    <span key={r.label} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm">
                      <b className="font-black font-heading" style={{ color: accent }}>{r.value}</b>{' '}
                      <span className="text-white/60">{r.label.toLowerCase()}</span>
                    </span>
                  ))}
                </div>
              </motion.div>

              <ul className={`lg:col-span-8 grid gap-5 ${(profile.achieved ?? []).length > 1 ? 'sm:grid-cols-2' : ''}`}>
                {(profile.achieved ?? []).map((a, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                    className="relative overflow-hidden p-8 sm:p-10 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row gap-6 sm:items-center"
                    style={{ background: `linear-gradient(120deg, ${accent}2e 0%, #0B0B0B 65%)` }}
                  >
                    <span className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center" style={{ background: accent }}>
                      <Check className="w-6 h-6 text-black" />
                    </span>
                    <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">{a}</p>
                    <BrandStar className="absolute -right-6 -bottom-6 w-28 h-28 opacity-[0.07]" color="#FFFFFF" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {(videos.length > 0 || profile.cover) && (
            <div id="icerikler" className="scroll-mt-24 mt-24">
              <div className="px-5 sm:px-10 lg:px-14">
                <div className="max-w-7xl mx-auto mb-10">
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">
                    <BrandStar className="w-3.5 h-3.5" color={ORANGE} /> Portfolyo
                  </span>
                  <h2 className="mt-3 text-4xl sm:text-5xl font-black font-heading tracking-tight">Ürettiğimiz içerikler</h2>
                </div>
              </div>
              <ScrollStrip>
                {videos.map((v) => (
                  <li key={v.videoUrl} className="snap-start shrink-0 w-[62vw] sm:w-[280px]">
                    <VideoCard video={v} accent={accent} />
                  </li>
                ))}
                {profile.cover && !videos.some((v) => v.posterImage === profile.cover) && (
                  <li className="snap-start shrink-0 w-[62vw] sm:w-[280px]">
                    <figure className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 group">
                      <img src={profile.cover} alt={`${profile.displayName} için ALTUN MEDYA çalışması`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-xs font-mono text-white/80">
                        Kampanya görseli
                      </figcaption>
                    </figure>
                  </li>
                )}
              </ScrollStrip>
            </div>
          )}
        </section>

        <StarDivider from={DARK} to={CREAM} badge={ORANGE} star={DARK} />

        {/* ═══════════════ 5 · SSS + DİĞER REFERANSLAR (KREM) ═══════════════ */}
        <section className="bg-[#F1F0EA] text-[#0A0A0A] pt-24 pb-24 sm:pb-32">
          {profile.faq?.length > 0 && (
            <div className="px-5 sm:px-10 lg:px-14">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
                <div className="lg:col-span-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#B33A06]">
                    <BrandStar className="w-3.5 h-3.5" color={ORANGE} /> Sık Sorulanlar
                  </span>
                  <h2 className="mt-3 text-4xl sm:text-5xl font-black font-heading tracking-tight leading-[0.95]">
                    Merak <span className="font-light">edilenler</span>
                  </h2>
                </div>
                <div className="lg:col-span-8 divide-y divide-black/10 border-y border-black/10">
                  {profile.faq.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="px-5 sm:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto flex items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">Diğer referanslarımız</h2>
              <Link href="/referanslar" className="text-xs font-mono font-bold uppercase tracking-widest text-black/60 hover:text-black flex items-center gap-1.5">
                Tümü <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <ScrollStrip dark={false}>
            {others.map((o) => {
              const l = getProfileLogo(o);
              return (
                <li key={o.slug} className="snap-start shrink-0">
                  <Link href={`/${o.slug}`} className="group block w-28 text-center">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-1.5">
                      <BrandAvatar accent={o.accent} logoSrc={l?.svgPath} name={o.displayName} className="w-28 h-28 ring-2 ring-black/5 group-hover:ring-black/30 transition-all" />
                    </span>
                    <span className="mt-3 block text-xs font-semibold text-black/70 group-hover:text-black truncate">{o.displayName}</span>
                  </Link>
                </li>
              );
            })}
          </ScrollStrip>
        </section>

        <StarDivider from={CREAM} to={ORANGE} badge={DARK} star={ORANGE} />

        {/* ═══════════════ 6 · CTA (TURUNCU) ═══════════════ */}
        <section className="bg-[#B33A06] text-white pt-24 pb-20 px-5 sm:px-10 lg:px-14 relative overflow-hidden">
          <BrandStar className="absolute -left-20 -bottom-20 w-[420px] h-[420px] opacity-10 pointer-events-none" color="#000000" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[0.95]">
                Sıradaki başarı hikayesi
                <br />
                <span className="text-black">sizin markanız</span> olsun.
              </h2>
              <p className="mt-5 text-base sm:text-lg font-medium text-black/75 max-w-2xl">
                {profile.displayName} için yaptığımız gibi; hedefinizi dinleyelim, içeriği üretelim, sonucu birlikte ölçelim.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                id="profile-cta-button"
                onClick={() => setIsBriefOpen(true)}
                className="px-8 py-5 text-sm font-extrabold uppercase tracking-wider bg-black text-white rounded-full hover:bg-black/90 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
              >
                <Ticket className="w-4 h-4 text-[#B33A06]" />
                Proje Biletini Kes
                <ArrowRight className="w-4 h-4 text-[#B33A06]" />
              </button>
            </div>
          </div>
        </section>

        <StarDivider from={ORANGE} to={DARK} badge={CREAM} star={ORANGE} />
      </main>

      <Footer />
      <BriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
    </div>
  );
}

/* ------------------------------------------------------------------
 * HorizontalRail — dikey kaydırmayı yatay harekete çevirir.
 * Bölüm ekrana sabitlenir, kartlar sağdan sola akar.
 * ------------------------------------------------------------------ */
function HorizontalRail({ children, bg }: { children: ReactNode; bg: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const bar = useTransform(smooth, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="relative [--rail-h:min(420px,58vh)]" style={{ background: bg, height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-16">
        <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-6 px-5 sm:px-10 lg:px-14 w-max will-change-transform">
          {children}
        </motion.div>
        <div className="absolute left-5 right-5 sm:left-10 sm:right-10 lg:left-14 lg:right-14 bottom-10 h-1 rounded-full bg-black/20 overflow-hidden">
          <motion.div className="h-full bg-black rounded-full" style={{ width: bar }} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * ScrollStrip — ok butonlu, snap'li yatay şerit
 * ------------------------------------------------------------------ */
function ScrollStrip({ children, dark = true }: { children: ReactNode; dark?: boolean }) {
  const ref = useRef<HTMLUListElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollWidth > el.clientWidth + 8);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scrollBy = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * Math.min(600, window.innerWidth * 0.8), behavior: 'smooth' });
  const btn = dark
    ? 'border-white/15 text-white hover:bg-white hover:text-black'
    : 'border-black/15 text-black hover:bg-black hover:text-white';

  return (
    <div className="relative">
      <ul
        ref={ref}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-5 sm:px-10 lg:px-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
        <li aria-hidden className="shrink-0 w-1" />
      </ul>
      <div className={`px-5 sm:px-10 lg:px-14 mt-6 gap-3 justify-end max-w-7xl mx-auto ${overflowing ? 'flex' : 'hidden'}`}>
        <button type="button" onClick={() => scrollBy(-1)} aria-label="Geri" className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${btn}`}>
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button type="button" onClick={() => scrollBy(1)} aria-label="İleri" className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${btn}`}>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 py-5 text-left" aria-expanded={open}>
        <span className="text-base sm:text-lg font-bold font-heading">{q}</span>
        <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-[#B33A06] text-white' : 'bg-black/5 text-black'}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
        <p className="pb-6 pr-12 text-sm sm:text-base text-black/70 leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

function VideoCard({ video, accent }: { video: ProfileVideo; accent: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-black group">
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
    </div>
  );
}
