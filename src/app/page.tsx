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

const INK = '#0B0B0B';
const GRAPH = '#141414';
const CREAM = '#F8F0DB';

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
    <div className="relative w-full overflow-hidden bg-[#0B0B0B] text-[#F8F0DB]">
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
        {/* Zemin sırası: antrasit / siyah dönüşümlü; krem yalnızca referanslarda.
            m-hide: mobilde gizli · m-only: yalnızca mobilde (gizlenen bölümlerin geçişi) */}
        <HeroSection onOpenBrief={() => handleOpenBrief()} />
        <BrandsMarquee />

        <SectionDivider topBgColor={GRAPH} bottomBgColor={INK} star />
        <ServicesSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />

        <SectionDivider topBgColor={INK} bottomBgColor={GRAPH} />
        <ReelsLabSection />

        <SectionDivider topBgColor={GRAPH} bottomBgColor={INK} />
        <CreatorNetworkSection />

        <SectionDivider topBgColor={INK} bottomBgColor={GRAPH} />
        <WorksSection onSelectWork={(work) => setSelectedWork(work)} />

        <SectionDivider topBgColor={GRAPH} bottomBgColor={INK} className="m-hide" />
        <div className="m-hide">
          <ProjectTicketSection onOpenBriefWithService={(slug) => handleOpenBrief(slug)} />
        </div>
        <SectionDivider topBgColor={INK} bottomBgColor={CREAM} star className="m-hide" />
        <SectionDivider topBgColor={GRAPH} bottomBgColor={CREAM} star className="m-only" />

        <ReviewsSection />

        <SectionDivider topBgColor={CREAM} bottomBgColor={INK} className="m-hide" />
        <div className="m-hide">
          <LocalSeoSection />
        </div>
        <SectionDivider topBgColor={INK} bottomBgColor={GRAPH} className="m-hide" />
        <SectionDivider topBgColor={CREAM} bottomBgColor={GRAPH} className="m-only" />

        <AboutSection />

        <SectionDivider topBgColor={GRAPH} bottomBgColor={INK} className="m-hide" />
        <div className="m-hide">
          <CareerSection onOpenBrief={() => handleOpenBrief()} />
        </div>
        <SectionDivider topBgColor={INK} bottomBgColor={GRAPH} className="m-hide" />

        <HighImpactCtaSection onOpenBrief={() => handleOpenBrief()} />
        <SectionDivider topBgColor={GRAPH} bottomBgColor={INK} />
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
