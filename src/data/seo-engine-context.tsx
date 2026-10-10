'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  SEOPageModel, LocationEntity, SectorEntity, ServiceEntity, 
  RedirectRule, InternalLinkItem, initialSEOPageModels, 
  initialLocations, initialSectors, initialServices, initialRedirectRules 
} from './seo-engine-store';

interface SEOEngineContextType {
  seoPages: SEOPageModel[];
  locations: LocationEntity[];
  sectors: SectorEntity[];
  services: ServiceEntity[];
  redirects: RedirectRule[];
  internalLinks: InternalLinkItem[];
  
  // Dashboard Metrics
  totalPagesCount: number;
  publishedCount: number;
  draftCount: number;
  indexedCount: number;
  notIndexedCount: number;
  pendingOptimizationCount: number;
  duplicateAlertCount: number;
  
  // Actions
  addSEOPage: (page: Partial<SEOPageModel>) => SEOPageModel;
  updateSEOPage: (id: string, partial: Partial<SEOPageModel>) => void;
  deleteSEOPage: (id: string) => void;
  bulkUpdateStatus: (ids: string[], isPublished: boolean) => void;
  bulkUpdateIndex: (ids: string[], status: SEOPageModel['indexStatus']) => void;
  
  addRedirect: (fromUrl: string, toUrl: string) => void;
  deleteRedirect: (id: string) => void;
  
  acceptInternalLink: (id: string) => void;
  rejectInternalLink: (id: string) => void;

  calculateSEOScore: (page: Partial<SEOPageModel>) => number;
  checkDuplicateRisk: (page: Partial<SEOPageModel>) => number;
}

const SEOEngineContext = createContext<SEOEngineContextType | undefined>(undefined);

export function SEOEngineProvider({ children }: { children: React.ReactNode }) {
  const [seoPages, setSeoPages] = useState<SEOPageModel[]>(initialSEOPageModels);
  const [locations] = useState<LocationEntity[]>(initialLocations);
  const [sectors] = useState<SectorEntity[]>(initialSectors);
  const [services] = useState<ServiceEntity[]>(initialServices);
  const [redirects, setRedirects] = useState<RedirectRule[]>(initialRedirectRules);
  
  const [internalLinks, setInternalLinks] = useState<InternalLinkItem[]>([
    { id: 'il-1', sourcePageId: 'seo-1', targetPageId: 'seo-2', anchorText: 'Kuşadası Otel Tanıtım Filmi', targetSlug: 'kusadasi-4k-otel-tanitim-filmi', status: 'suggested', relevanceScore: 88 },
    { id: 'il-2', sourcePageId: 'seo-1', targetPageId: 'seo-3', anchorText: 'Söke Dijital Pazarlama', targetSlug: 'soke-sanayi-dijital-pazarlama', status: 'suggested', relevanceScore: 79 },
  ]);

  // Load state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('altun_seo_engine_pages');
      if (saved) {
        setSeoPages(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load SEO pages state', e);
    }
  }, []);

  const saveState = (updated: SEOPageModel[]) => {
    setSeoPages(updated);
    try {
      localStorage.setItem('altun_seo_engine_pages', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save SEO engine state', e);
    }
  };

  // Metrics
  const totalPagesCount = seoPages.length;
  const publishedCount = seoPages.filter((p) => p.isPublished).length;
  const draftCount = seoPages.filter((p) => !p.isPublished).length;
  const indexedCount = seoPages.filter((p) => p.indexStatus === 'indexed').length;
  const notIndexedCount = seoPages.filter((p) => p.indexStatus === 'not_indexed').length;
  const pendingOptimizationCount = seoPages.filter((p) => p.seoScore < 85).length;
  const duplicateAlertCount = seoPages.filter((p) => p.duplicateRiskPercent > 15).length;

  const calculateSEOScore = (p: Partial<SEOPageModel>): number => {
    let score = 50;
    if (p.seoTitle && p.seoTitle.length >= 30) score += 10;
    if (p.seoDescription && p.seoDescription.length >= 70) score += 10;
    if (p.h1) score += 10;
    if (p.primaryKeyword) score += 10;
    if (p.canonicalUrl) score += 5;
    if (p.ogImage) score += 5;
    return Math.min(100, score);
  };

  const checkDuplicateRisk = (p: Partial<SEOPageModel>): number => {
    if (!p.primaryKeyword) return 0;
    const sameKeyword = seoPages.filter(
      (existing) => existing.id !== p.id && existing.primaryKeyword.toLowerCase() === p.primaryKeyword?.toLowerCase()
    );
    if (sameKeyword.length > 0) return 85; // High Risk
    return 4; // Low Risk
  };

  const addSEOPage = (pagePartial: Partial<SEOPageModel>): SEOPageModel => {
    const now = new Date().toISOString().split('T')[0];
    const score = calculateSEOScore(pagePartial);
    const risk = checkDuplicateRisk(pagePartial);

    const newPage: SEOPageModel = {
      id: `seo-${Date.now()}`,
      slug: pagePartial.slug || `sayfa-${Date.now()}`,
      title: pagePartial.title || 'Yeni SEO Sayfası',
      pageType: pagePartial.pageType || 'service_location',
      searchIntent: pagePartial.searchIntent || 'commercial',
      primaryKeyword: pagePartial.primaryKeyword || 'Anahtar Kelime',
      secondaryKeywords: pagePartial.secondaryKeywords || [],
      h1: pagePartial.h1 || pagePartial.title || 'Ana Başlık',
      seoTitle: pagePartial.seoTitle || `${pagePartial.title} | ALTUN MEDYA`,
      seoDescription: pagePartial.seoDescription || 'ALTUN MEDYA 360° Medya & Dijital Stüdyo.',
      canonicalUrl: pagePartial.canonicalUrl || `https://altunmedya.com/hizmetler/${pagePartial.slug}`,
      ogTitle: pagePartial.ogTitle || pagePartial.title || 'ALTUN MEDYA',
      ogDescription: pagePartial.ogDescription || pagePartial.seoDescription || '',
      ogImage: pagePartial.ogImage || 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
      indexStatus: 'pending',
      isPublished: false,
      seoScore: score,
      duplicateRiskPercent: risk,
      locationId: pagePartial.locationId,
      sectorId: pagePartial.sectorId,
      serviceId: pagePartial.serviceId,
      content: pagePartial.content || {
        introAnswer: 'Arama niyetini karşılayan özgün yanıt metni.',
        mainContentHtml: '<h2>Kapsamlı Bölüm Başlığı</h2><p>İçerik metni burada yer almaktadır.</p>',
        faq: [{ question: 'Sıkça sorulan soru?', answer: 'Cevap detayları.' }],
        ctaText: 'Teklif Alın',
        ctaUrl: '/musteri-paneli'
      },
      updatedAt: now,
      createdAt: now,
    };

    saveState([newPage, ...seoPages]);
    return newPage;
  };

  const updateSEOPage = (id: string, partial: Partial<SEOPageModel>) => {
    const updated = seoPages.map((p) => {
      if (p.id === id) {
        const merged = { ...p, ...partial };
        merged.seoScore = calculateSEOScore(merged);
        merged.duplicateRiskPercent = checkDuplicateRisk(merged);
        return merged;
      }
      return p;
    });
    saveState(updated);
  };

  const deleteSEOPage = (id: string) => {
    saveState(seoPages.filter((p) => p.id !== id));
  };

  const bulkUpdateStatus = (ids: string[], isPublished: boolean) => {
    saveState(seoPages.map((p) => (ids.includes(p.id) ? { ...p, isPublished } : p)));
  };

  const bulkUpdateIndex = (ids: string[], status: SEOPageModel['indexStatus']) => {
    saveState(seoPages.map((p) => (ids.includes(p.id) ? { ...p, indexStatus: status } : p)));
  };

  const addRedirect = (fromUrl: string, toUrl: string) => {
    const newRed: RedirectRule = {
      id: `red-${Date.now()}`,
      fromUrl,
      toUrl,
      statusCode: 301,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setRedirects([newRed, ...redirects]);
  };

  const deleteRedirect = (id: string) => {
    setRedirects(redirects.filter((r) => r.id !== id));
  };

  const acceptInternalLink = (id: string) => {
    setInternalLinks(internalLinks.map((l) => (l.id === id ? { ...l, status: 'accepted' } : l)));
  };

  const rejectInternalLink = (id: string) => {
    setInternalLinks(internalLinks.map((l) => (l.id === id ? { ...l, status: 'rejected' } : l)));
  };

  return (
    <SEOEngineContext.Provider
      value={{
        seoPages,
        locations,
        sectors,
        services,
        redirects,
        internalLinks,
        totalPagesCount,
        publishedCount,
        draftCount,
        indexedCount,
        notIndexedCount,
        pendingOptimizationCount,
        duplicateAlertCount,

        addSEOPage,
        updateSEOPage,
        deleteSEOPage,
        bulkUpdateStatus,
        bulkUpdateIndex,

        addRedirect,
        deleteRedirect,

        acceptInternalLink,
        rejectInternalLink,

        calculateSEOScore,
        checkDuplicateRisk,
      }}
    >
      {children}
    </SEOEngineContext.Provider>
  );
}

export function useSEOEngine() {
  const ctx = useContext(SEOEngineContext);
  if (!ctx) throw new Error('useSEOEngine must be used within SEOEngineProvider');
  return ctx;
}
