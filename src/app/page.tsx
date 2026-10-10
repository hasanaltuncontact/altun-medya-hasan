'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandsMarquee from '@/components/sections/BrandsMarquee';
import ServicesSection from '@/components/sections/ServicesSection';
import ReelsLabSection from '@/components/sections/ReelsLabSection';
import CreatorNetworkSection from '@/components/sections/CreatorNetworkSection';
import WorksSection from '@/components/sections/WorksSection';
import ProjectTicketSection from '@/components/sections/ProjectTicketSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocalSeoSection from '@/components/sections/LocalSeoSection';
import AboutSection from '@/components/sections/AboutSection';
import CareerSection from '@/components/sections/CareerSection';
import HighImpactCtaSection from '@/components/sections/HighImpactCtaSection';
import SectionDivider from '@/components/ui/SectionDivider';

import BriefModal from '@/components/modals/BriefModal';
import CaseStudyModal from '@/components/modals/CaseStudyModal';
import ReelsPlayerModal from '@/components/modals/ReelsPlayerModal';

import { WorkItem } from '@/data/works';
import { ReelItem, reelsList } from '@/data/reels';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [briefServiceSlug, setBriefServiceSlug] = useState<string | undefined>(undefined);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  const handleOpenBrief = (serviceSlug?: string) => {
    setBriefServiceSlug(serviceSlug);
    setIsBriefOpen(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#050505] text-[#F7F6F2]">
      {/* HEADER & MOBILE NAV */}
      <Header
        onOpenBrief={() => handleOpenBrief()}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBrief={() => handleOpenBrief()}
      />

      {/* HERO SECTION */}
      <main>
        <HeroSection onOpenBrief={() => handleOpenBrief()} />

        {/* C-SWOOP DIVIDER: HERO (#050505) -> BRANDS (#F7F6F2) */}
        <SectionDivider topBgColor="#050505" bottomBgColor="#F7F6F2" />

        {/* BRANDS MARQUEE (15 REAL CLIENT SVGS) */}
        <BrandsMarquee />

        {/* C-SWOOP DIVIDER: BRANDS (#F7F6F2) -> SERVICES (#D9D0C1) */}
        <SectionDivider topBgColor="#F7F6F2" bottomBgColor="#D9D0C1" />

        {/* 6 MAIN CATEGORY SERVICES SECTION */}
        <ServicesSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        {/* C-SWOOP DIVIDER: SERVICES (#D9D0C1) -> REELS LAB (#070707) */}
        <SectionDivider topBgColor="#D9D0C1" bottomBgColor="#070707" />

        {/* REELS LAB INLINE VIDEO SLIDER */}
        <ReelsLabSection />

        {/* CREATOR NETWORK */}
        <CreatorNetworkSection />

        {/* WORKS & CASE STUDIES */}
        <WorksSection onSelectWork={(work) => setSelectedWork(work)} />

        {/* OVAL C-SWOOP DIVIDER: WORKS (#F1F0EA) -> TICKET (#050505) */}
        <SectionDivider topBgColor="#F1F0EA" bottomBgColor="#050505" />

        {/* INTERACTIVE 3D PROJECT TICKET */}
        <ProjectTicketSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        {/* OVAL C-SWOOP DIVIDER: TICKET (#050505) -> REVIEWS (#F7F6F2) */}
        <SectionDivider topBgColor="#050505" bottomBgColor="#F7F6F2" />

        {/* REVIEWS & 15 CLIENT LOGOS GRID */}
        <ReviewsSection />

        {/* DIDIM & REGIONAL SEO CARDS */}
        <LocalSeoSection />

        {/* ABOUT STUDIO */}
        <AboutSection />

        {/* CORPORATE CAREER & POSITIONS */}
        <CareerSection onOpenBrief={() => handleOpenBrief()} />

        {/* HIGH-IMPACT LIME CTA BAND */}
        <HighImpactCtaSection onOpenBrief={() => handleOpenBrief()} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALS */}
      <BriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
        selectedCategorySlug={briefServiceSlug}
      />
      <CaseStudyModal
        workItem={selectedWork}
        onClose={() => setSelectedWork(null)}
        onOpenBrief={() => handleOpenBrief()}
      />
      <ReelsPlayerModal
        reelItem={selectedReel}
        onClose={() => setSelectedReel(null)}
      />
    </div>
  );
}
