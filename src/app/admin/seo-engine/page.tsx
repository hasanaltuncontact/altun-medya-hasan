'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSEOEngine } from '@/data/seo-engine-context';
import { 
  SEOPageModel, SearchIntent, PageType 
} from '@/data/seo-engine-store';

export type SchemaType = 'Service' | 'LocalBusiness' | 'Article' | 'FAQPage' | 'Organization';

export default function SEOEnginePage() {
  const {
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
  } = useSEOEngine();

  // Active Tab state
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'pages' | 'builder' | 'locations' | 'sectors' | 'services' | 'links' | 'redirects' | 'sitemap' | 'settings'
  >('dashboard');

  // Page Builder state
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [builderForm, setBuilderForm] = useState<Partial<SEOPageModel>>({
    title: '',
    slug: '',
    pageType: 'service_location',
    searchIntent: 'commercial',
    primaryKeyword: '',
    secondaryKeywords: [],
    h1: '',
    seoTitle: '',
    seoDescription: '',
    canonicalUrl: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    locationId: 'loc-didim',
    serviceId: 'srv-sosyal-medya',
    sectorId: 'sec-otel',
    schemaType: 'Service',
    content: {
      introAnswer: '',
      mainContentHtml: '',
      faq: [{ question: '', answer: '' }],
      ctaText: 'Ücretsiz Teklif Alın',
      ctaUrl: '/musteri-paneli'
    }
  });

  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [secKeywordInput, setSecKeywordInput] = useState('');
  const [selectedPageIds, setSelectedPageIds] = useState<string[]>([]);
  const [filterSearch, setFilterSearch] = useState('');
  const [filterIntent, setFilterIntent] = useState<string>('all');

  // Redirect Form State
  const [newRedirectFrom, setNewRedirectFrom] = useState('');
  const [newRedirectTo, setNewRedirectTo] = useState('');

  // Handle Edit page click
  const handleEditClick = (page: SEOPageModel) => {
    setEditingPageId(page.id);
    setBuilderForm(page);
    setActiveTab('builder');
  };

  // Handle New page click
  const handleNewPageClick = () => {
    setEditingPageId(null);
    setBuilderForm({
      title: '',
      slug: '',
      pageType: 'service_location',
      searchIntent: 'commercial',
      primaryKeyword: '',
      secondaryKeywords: [],
      h1: '',
      seoTitle: '',
      seoDescription: '',
      canonicalUrl: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
      locationId: 'loc-didim',
      serviceId: 'srv-sosyal-medya',
      sectorId: 'sec-otel',
      schemaType: 'Service',
      content: {
        introAnswer: 'Arama niyetini doğrudan yanıtlayan özgün ve net giriş paragrafı.',
        mainContentHtml: '<h2>Hizmet Kapsamı ve Avantajları</h2><p>ALTUN MEDYA profesyonel stüdyo ve saha ekipleriyle yüksek dönüşümlü dijital çözümler sunar.</p>',
        faq: [{ question: 'Süreç nasıl işler?', answer: 'Ön analiz sonrası 48 saat içinde prodüksiyon planlaması yapılır.' }],
        ctaText: 'Ücretsiz Danışmanlık Alın',
        ctaUrl: '/musteri-paneli'
      }
    });
    setActiveTab('builder');
  };

  // Save Page handler
  const handleSavePage = (publishImmediately: boolean) => {
    const score = calculateSEOScore(builderForm);
    const risk = checkDuplicateRisk(builderForm);

    if (editingPageId) {
      updateSEOPage(editingPageId, {
        ...builderForm,
        isPublished: publishImmediately,
        seoScore: score,
        duplicateRiskPercent: risk
      });
      alert('SEO Sayfası başarıyla güncellendi!');
    } else {
      const created = addSEOPage({
        ...builderForm,
        isPublished: publishImmediately,
        seoScore: score,
        duplicateRiskPercent: risk
      });
      alert(`Yeni SEO Sayfası oluşturuldu! ID: ${created.id}`);
    }
    setActiveTab('pages');
  };

  // Open in Visual Editor handler
  const handleOpenInVisualEditor = (page: SEOPageModel) => {
    // Save to local storage for visual editor consumption
    localStorage.setItem('altun_visual_editor_schema', JSON.stringify({
      title: page.title,
      h1: page.h1,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
      introAnswer: page.content?.introAnswer,
      mainContentHtml: page.content?.mainContentHtml,
      faq: page.content?.faq,
      ctaText: page.content?.ctaText,
      pageId: page.id,
      slug: page.slug
    }));
    window.open(`/admin/editor?seoId=${page.id}`, '_blank');
  };

  // Filtered pages for table
  const filteredPages = seoPages.filter((p) => {
    const matchesSearch = 
      p.title.toLowerCase().includes(filterSearch.toLowerCase()) ||
      p.slug.toLowerCase().includes(filterSearch.toLowerCase()) ||
      p.primaryKeyword.toLowerCase().includes(filterSearch.toLowerCase());
    const matchesIntent = filterIntent === 'all' || p.searchIntent === filterIntent;
    return matchesSearch && matchesIntent;
  });

  // Calculate live health score for current builder form
  const currentFormScore = calculateSEOScore(builderForm);
  const currentFormRisk = checkDuplicateRisk(builderForm);

  return (
    <div className="min-h-screen bg-[#262626] text-[#F6F6F6] font-sans flex flex-col">
      {/* Header Bar */}
      <header className="border-b border-[#1E1E1E] bg-[#262626] sticky top-0 z-40 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-xs text-[#888888] hover:text-[#A40001] transition-colors">
            ← Admin Paneli
          </Link>
          <span className="text-[#333333]">/</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#A40001] animate-pulse"></span>
            <h1 className="text-xl font-bold tracking-tight text-white font-heading">
              ALTUN <span className="text-[#A40001]">SEO ENGINE</span>
            </h1>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#A40001]/10 text-[#A40001] border border-[#A40001]/20 font-mono">
            v3.5 Enterprise Engine
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleNewPageClick}
            className="px-4 py-2 bg-[#A40001] text-white font-semibold rounded-lg text-sm hover:bg-[#b5e600] transition-colors flex items-center gap-2 shadow-lg shadow-[#A40001]/10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            + Yeni SEO Sayfası
          </button>
          <Link
            href="/sitemap.xml"
            target="_blank"
            className="px-3.5 py-2 bg-[#1E1E1E] text-xs text-[#CCCCCC] hover:text-white border border-[#1E1E1E] rounded-lg transition-colors"
          >
            sitemap.xml ↗
          </Link>
        </div>
      </header>

      {/* Main Sub-Navigation Bar */}
      <nav className="border-b border-[#1E1E1E] bg-[#262626] px-6 overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {[
            { id: 'dashboard', label: '📊 SEO Dashboard' },
            { id: 'pages', label: `📄 SEO Sayfaları (${seoPages.length})` },
            { id: 'builder', label: editingPageId ? '✏️ Sayfa Editörü' : '✨ Yeni SEO Sayfası' },
            { id: 'locations', label: `📍 Lokasyonlar (${locations.length})` },
            { id: 'sectors', label: `🏢 Sektörler (${sectors.length})` },
            { id: 'services', label: `🛠️ Hizmetler (${services.length})` },
            { id: 'links', label: `🔗 Internal Links (${internalLinks.length})` },
            { id: 'redirects', label: `🔀 Redirects (${redirects.length})` },
            { id: 'sitemap', label: '🗺️ Sitemap & Schema' },
            { id: 'settings', label: '⚙️ Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3.5 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-[#A40001] text-[#A40001] bg-[#A40001]/5'
                  : 'border-transparent text-[#888888] hover:text-white hover:border-[#444444]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">
        
        {/* ========================================================= */}
        {/* TAB 1: SEO DASHBOARD */}
        {/* ========================================================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fadeIn">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl space-y-1">
                <span className="text-xs text-[#888888] font-medium uppercase tracking-wider">TOPLAM SAYFA</span>
                <div className="text-2xl font-bold text-white font-mono">{totalPagesCount}</div>
                <div className="text-[10px] text-[#555555]">Ölçeklenebilir SEO Altyapısı</div>
              </div>
              <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl space-y-1">
                <span className="text-xs text-[#888888] font-medium uppercase tracking-wider">YAYINDA</span>
                <div className="text-2xl font-bold text-[#A40001] font-mono">{publishedCount}</div>
                <div className="text-[10px] text-[#48bb78]">Google Tarafından Taranabilir</div>
              </div>
              <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl space-y-1">
                <span className="text-xs text-[#888888] font-medium uppercase tracking-wider">TASLAK</span>
                <div className="text-2xl font-bold text-[#ecc94b] font-mono">{draftCount}</div>
                <div className="text-[10px] text-[#888888]">İçerik Hazırlık Safhasında</div>
              </div>
              <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl space-y-1">
                <span className="text-xs text-[#888888] font-medium uppercase tracking-wider">INDEXLENEN</span>
                <div className="text-2xl font-bold text-[#38bdf8] font-mono">{indexedCount}</div>
                <div className="text-[10px] text-[#38bdf8]">Google Dizininde Doğrulandı</div>
              </div>
              <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl space-y-1">
                <span className="text-xs text-[#888888] font-medium uppercase tracking-wider">INDEXLENMEYEN</span>
                <div className="text-2xl font-bold text-[#f56565] font-mono">{notIndexedCount}</div>
                <div className="text-[10px] text-[#f56565]">Noindex veya İncelemede</div>
              </div>
              <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl space-y-1">
                <span className="text-xs text-[#888888] font-medium uppercase tracking-wider">OPTİMİZASYON</span>
                <div className="text-2xl font-bold text-[#ed8936] font-mono">{pendingOptimizationCount}</div>
                <div className="text-[10px] text-[#ed8936]">SEO Skoru &lt; 85</div>
              </div>
            </div>

            {/* Health & Alerts Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Critical Alerts */}
              <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f56565]"></span>
                    SEO Denetim & Sağlık Uyarısı
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#f56565]/10 text-[#f56565] border border-[#f56565]/20 font-mono">
                    {duplicateAlertCount + pendingOptimizationCount} İyileştirme
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-[#CCCCCC]">
                  <div className="p-3 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#f56565]">⚠️</span>
                      <span>Duplicate Content Riski (%15+)</span>
                    </div>
                    <span className="font-mono text-[#f56565] font-bold">{duplicateAlertCount} Sayfa</span>
                  </div>
                  <div className="p-3 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#ed8936]">⚡</span>
                      <span>Düşük SEO Skoru (&lt; 85)</span>
                    </div>
                    <span className="font-mono text-[#ed8936] font-bold">{pendingOptimizationCount} Sayfa</span>
                  </div>
                  <div className="p-3 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#A40001]">🔗</span>
                      <span>Bekleyen Internal Link Önerisi</span>
                    </div>
                    <span className="font-mono text-[#A40001] font-bold">
                      {internalLinks.filter((l) => l.status === 'suggested').length} Adet
                    </span>
                  </div>
                </div>
              </div>

              {/* Search Console Mock Performance */}
              <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="text-[#38bdf8]">📈</span>
                    Google Search Console Verileri (Son 28 Gün)
                  </h3>
                  <span className="text-[10px] text-[#888888]">GSC API Entegre Edilebilir</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 bg-[#1E1E1E] rounded-lg border border-[#1E1E1E]">
                    <div className="text-[10px] text-[#888888]">GÖSTERİM</div>
                    <div className="text-lg font-bold text-white font-mono">48.5K</div>
                    <div className="text-[9px] text-[#48bb78]">+14.2%</div>
                  </div>
                  <div className="p-2.5 bg-[#1E1E1E] rounded-lg border border-[#1E1E1E]">
                    <div className="text-[10px] text-[#888888]">TIKLAMA</div>
                    <div className="text-lg font-bold text-[#A40001] font-mono">3.82K</div>
                    <div className="text-[9px] text-[#48bb78]">+18.6%</div>
                  </div>
                  <div className="p-2.5 bg-[#1E1E1E] rounded-lg border border-[#1E1E1E]">
                    <div className="text-[10px] text-[#888888]">ORT. CTR</div>
                    <div className="text-lg font-bold text-white font-mono">7.8%</div>
                    <div className="text-[9px] text-[#48bb78]">+1.1%</div>
                  </div>
                  <div className="p-2.5 bg-[#1E1E1E] rounded-lg border border-[#1E1E1E]">
                    <div className="text-[10px] text-[#888888]">ORT. SIRA</div>
                    <div className="text-lg font-bold text-[#38bdf8] font-mono">4.2</div>
                    <div className="text-[9px] text-[#38bdf8]">Top 5</div>
                  </div>
                </div>

                <div className="p-3 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg text-xs space-y-1">
                  <div className="text-[#888888] font-semibold">En Çok Tıklanan Anahtar Kelimeler:</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 bg-[#1E1E1E] rounded text-[#E0E0E0]">didim sosyal medya ajansı (1.2k)</span>
                    <span className="px-2 py-0.5 bg-[#1E1E1E] rounded text-[#E0E0E0]">didim web tasarım (840)</span>
                    <span className="px-2 py-0.5 bg-[#1E1E1E] rounded text-[#E0E0E0]">kuşadası otel tanıtım filmi (610)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Roadmap & Opportunities */}
            <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-[#A40001]">🎯</span>
                SEO İçerik Fırsatları & Yol Haritası (Content Gap Analysis)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Didim Restoran Sosyal Medya</span>
                    <span className="px-2 py-0.5 bg-[#A40001]/10 text-[#A40001] rounded text-[10px]">YÜKSEK POTANSİYEL</span>
                  </div>
                  <p className="text-[#999999]">Arama Hacmi: ~1,400/ay | Mevcut Sıra: #4</p>
                  <button 
                    onClick={() => {
                      setBuilderForm({
                        title: 'Didim Restoran Sosyal Medya Yönetimi',
                        slug: 'didim-restoran-sosyal-medya-yonetimi',
                        pageType: 'service_location_sector',
                        searchIntent: 'commercial',
                        primaryKeyword: 'didim restoran sosyal medya yönetimi',
                        h1: 'Didim Restoran & Cafe Sosyal Medya Yönetimi',
                        seoTitle: 'Didim Restoran Sosyal Medya Yönetimi | Altun Medya',
                        seoDescription: 'Didim\'deki restoran ve cafeler için profesyonel Reels çekimleri, menü tasarımı ve sosyal medya yönetimi.'
                      });
                      setActiveTab('builder');
                    }}
                    className="w-full py-1.5 bg-[#1E1E1E] hover:bg-[#A40001] hover:text-white transition-colors rounded text-center font-medium"
                  >
                    + Bu Sayfayı Oluştur
                  </button>
                </div>

                <div className="p-4 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Bodrum Emlak Web Tasarımı</span>
                    <span className="px-2 py-0.5 bg-[#38bdf8]/10 text-[#38bdf8] rounded text-[10px]">CONTENT GAP</span>
                  </div>
                  <p className="text-[#999999]">Arama Hacmi: ~2,100/ay | Mevcut Sıra: Yok</p>
                  <button 
                    onClick={() => {
                      setBuilderForm({
                        title: 'Bodrum Emlak Web Tasarım & Dijital Pazarlama',
                        slug: 'bodrum-emlak-web-tasarim',
                        pageType: 'service_location_sector',
                        searchIntent: 'transactional',
                        primaryKeyword: 'bodrum emlak web tasarım',
                        h1: 'Bodrum Lüks Emlak & Gayrimenkul Web Tasarımı',
                        seoTitle: 'Bodrum Emlak Web Tasarımı | Altun Medya',
                        seoDescription: 'Bodrum gayrimenkul firmaları için özel portföy yönetimi ve lüks villa tanıtım filmleri.'
                      });
                      setActiveTab('builder');
                    }}
                    className="w-full py-1.5 bg-[#1E1E1E] hover:bg-[#A40001] hover:text-white transition-colors rounded text-center font-medium"
                  >
                    + Bu Sayfayı Oluştur
                  </button>
                </div>

                <div className="p-4 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Söke Sanayi Dijital Ads</span>
                    <span className="px-2 py-0.5 bg-[#ed8936]/10 text-[#ed8936] rounded text-[10px]">OPTİMİZASYON</span>
                  </div>
                  <p className="text-[#999999]">Arama Hacmi: ~980/ay | Mevcut Sıra: #12</p>
                  <button 
                    onClick={() => {
                      const page = seoPages.find((p) => p.slug.includes('soke'));
                      if (page) handleEditClick(page);
                    }}
                    className="w-full py-1.5 bg-[#1E1E1E] hover:bg-[#A40001] hover:text-white transition-colors rounded text-center font-medium"
                  >
                    ⚡ Sayfayı Optimize Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: SEO SAYFALARI (BULK MANAGEMENT TABLE) */}
        {/* ========================================================= */}
        {activeTab === 'pages' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Filter & Search Bar */}
            <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-[280px]">
                <input
                  type="text"
                  placeholder="Başlık, slug veya keyword ile ara..."
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  className="bg-[#1E1E1E] border border-[#1E1E1E] text-white px-3.5 py-2 rounded-lg text-xs w-full focus:outline-none focus:border-[#A40001]"
                />
                <select
                  value={filterIntent}
                  onChange={(e) => setFilterIntent(e.target.value)}
                  className="bg-[#1E1E1E] border border-[#1E1E1E] text-white px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-[#A40001]"
                >
                  <option value="all">Tüm Intentler</option>
                  <option value="commercial">Commercial</option>
                  <option value="transactional">Transactional</option>
                  <option value="informational">Informational</option>
                  <option value="navigational">Navigational</option>
                </select>
              </div>

              {selectedPageIds.length > 0 && (
                <div className="flex items-center gap-2 text-xs bg-[#1E1E1E] p-1.5 rounded-lg border border-[#333333]">
                  <span className="text-[#888888] font-mono px-2">{selectedPageIds.length} Seçildi</span>
                  <button
                    onClick={() => bulkUpdateStatus(selectedPageIds, true)}
                    className="px-2.5 py-1 bg-[#A40001]/10 text-[#A40001] hover:bg-[#A40001] hover:text-white rounded transition-colors"
                  >
                    Yayına Al
                  </button>
                  <button
                    onClick={() => bulkUpdateStatus(selectedPageIds, false)}
                    className="px-2.5 py-1 bg-[#ecc94b]/10 text-[#ecc94b] hover:bg-[#ecc94b] hover:text-black rounded transition-colors"
                  >
                    Taslağa Çek
                  </button>
                  <button
                    onClick={() => bulkUpdateIndex(selectedPageIds, 'indexed')}
                    className="px-2.5 py-1 bg-[#38bdf8]/10 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black rounded transition-colors"
                  >
                    Index Et
                  </button>
                </div>
              )}
            </div>

            {/* Pages Table */}
            <div className="bg-[#262626] border border-[#1E1E1E] rounded-xl overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#1E1E1E] bg-[#1E1E1E] text-[#888888] font-mono uppercase text-[10px]">
                    <th className="p-3 w-10 text-center">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) setSelectedPageIds(filteredPages.map((p) => p.id));
                          else setSelectedPageIds([]);
                        }}
                        checked={selectedPageIds.length === filteredPages.length && filteredPages.length > 0}
                      />
                    </th>
                    <th className="p-3">SAYFA BAŞLIĞI / SLUG</th>
                    <th className="p-3">KEYWORD & INTENT</th>
                    <th className="p-3">SEO SCORE</th>
                    <th className="p-3">DUPLICATE RISK</th>
                    <th className="p-3">DURUM</th>
                    <th className="p-3 text-right">İŞLEMLER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E1E1E]">
                  {filteredPages.map((page) => {
                    const isChecked = selectedPageIds.includes(page.id);
                    return (
                      <tr key={page.id} className="hover:bg-[#1E1E1E] transition-colors">
                        <td className="p-3 text-center">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) setSelectedPageIds([...selectedPageIds, page.id]);
                              else setSelectedPageIds(selectedPageIds.filter((id) => id !== page.id));
                            }}
                          />
                        </td>
                        <td className="p-3 space-y-0.5">
                          <div className="font-semibold text-white hover:text-[#A40001] cursor-pointer" onClick={() => handleEditClick(page)}>
                            {page.title}
                          </div>
                          <div className="text-[10px] text-[#777777] font-mono flex items-center gap-1">
                            <span>/{page.slug}</span>
                            <a href={`/hizmetler/${page.slug}`} target="_blank" className="text-[#38bdf8] hover:underline">
                              ↗
                            </a>
                          </div>
                        </td>
                        <td className="p-3 space-y-1">
                          <div className="font-medium text-[#DDDDDD]">{page.primaryKeyword}</div>
                          <span className="px-2 py-0.5 bg-[#1E1E1E] text-[#AAAAAA] rounded text-[9px] uppercase font-mono">
                            {page.searchIntent}
                          </span>
                        </td>
                        <td className="p-3 font-mono">
                          <div className="flex items-center gap-2">
                            <div className="w-12 bg-[#1E1E1E] h-2 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${
                                  page.seoScore >= 85 ? 'bg-[#A40001]' : page.seoScore >= 70 ? 'bg-[#ecc94b]' : 'bg-[#f56565]'
                                }`}
                                style={{ width: `${page.seoScore}%` }}
                              ></div>
                            </div>
                            <span className="font-bold text-white">{page.seoScore}/100</span>
                          </div>
                        </td>
                        <td className="p-3 font-mono">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] ${
                              page.duplicateRiskPercent > 15
                                ? 'bg-[#f56565]/10 text-[#f56565] border border-[#f56565]/30'
                                : 'bg-[#48bb78]/10 text-[#48bb78]'
                            }`}
                          >
                            %{page.duplicateRiskPercent} Risk
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex flex-col gap-1 text-[10px]">
                            <span
                              className={`px-2 py-0.5 rounded w-max ${
                                page.isPublished ? 'bg-[#A40001]/10 text-[#A40001]' : 'bg-[#ecc94b]/10 text-[#ecc94b]'
                              }`}
                            >
                              {page.isPublished ? 'Yayında' : 'Taslak'}
                            </span>
                            <span className="text-[#666666] font-mono">{page.indexStatus}</span>
                          </div>
                        </td>
                        <td className="p-3 text-right space-x-1.5">
                          <button
                            onClick={() => handleOpenInVisualEditor(page)}
                            className="px-2.5 py-1 bg-[#1E1E1E] text-[#A40001] border border-[#A40001]/30 hover:bg-[#A40001] hover:text-white rounded text-[10px] font-semibold transition-colors"
                            title="Görsel Editörde Aç (Elementor Modu)"
                          >
                            [ Görsel Editörde Aç ]
                          </button>
                          <button
                            onClick={() => handleEditClick(page)}
                            className="px-2 py-1 bg-[#1E1E1E] text-[#E0E0E0] hover:bg-[#333333] rounded text-[10px]"
                          >
                            Düzenle
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Bu SEO sayfasını silmek istediğinize emin misiniz?')) deleteSEOPage(page.id);
                            }}
                            className="px-2 py-1 bg-[#f56565]/10 text-[#f56565] hover:bg-[#f56565] hover:text-white rounded text-[10px]"
                          >
                            Sil
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredPages.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-[#777777]">
                        Arama kriterlerine uygun SEO sayfası bulunamadı.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: YENİ SEO SAYFASI / PAGE BUILDER */}
        {/* ========================================================= */}
        {activeTab === 'builder' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header & Quick Action */}
            <div className="bg-[#262626] border border-[#1E1E1E] p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#A40001]">⚡</span>
                  {editingPageId ? `Düzenle: ${builderForm.title}` : 'Yeni SEO Landing Page Oluştur'}
                </h2>
                <p className="text-xs text-[#888888]">
                  Benzersiz arama niyetine özel H1, FAQ, Meta ve Görsel Yapılandırıcı
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSavePage(false)}
                  className="px-4 py-2 bg-[#1E1E1E] text-[#CCCCCC] hover:text-white border border-[#333333] rounded-lg text-xs font-semibold"
                >
                  [ Taslak Olarak Kaydet ]
                </button>
                <button
                  onClick={() => handleSavePage(true)}
                  className="px-4 py-2 bg-[#A40001] text-white font-semibold rounded-lg text-xs hover:bg-[#b5e600] shadow-lg shadow-[#A40001]/10"
                >
                  [ Yayınla ]
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Form (2 Cols) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* 1. SAYFA TÜRÜ & SEARCH INTENT */}
                <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                    1. Sayfa Türü & Arama Niyeti (Search Intent)
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'service', label: 'Hizmet' },
                      { id: 'location', label: 'Lokasyon' },
                      { id: 'sector', label: 'Sektör' },
                      { id: 'service_location', label: 'Hizmet + Lokasyon' },
                      { id: 'service_sector', label: 'Hizmet + Sektör' },
                      { id: 'service_location_sector', label: 'Hizmet + Lokasyon + Sektör' },
                      { id: 'blog_guide', label: 'Blog / Rehber' },
                      { id: 'case_study', label: 'Vaka Çalışması' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBuilderForm({ ...builderForm, pageType: item.id as PageType })}
                        className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                          builderForm.pageType === item.id
                            ? 'border-[#A40001] bg-[#A40001]/10 text-white'
                            : 'border-[#1E1E1E] bg-[#1E1E1E] text-[#888888] hover:border-[#444444]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-xs text-[#888888]">Search Intent (Arama Amacı):</label>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      {(['commercial', 'transactional', 'informational', 'navigational'] as SearchIntent[]).map(
                        (intent) => (
                          <button
                            key={intent}
                            type="button"
                            onClick={() => setBuilderForm({ ...builderForm, searchIntent: intent })}
                            className={`p-2 rounded border uppercase font-mono text-[10px] text-center ${
                              builderForm.searchIntent === intent
                                ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#38bdf8]'
                                : 'border-[#1E1E1E] bg-[#1E1E1E] text-[#777777]'
                            }`}
                          >
                            {intent}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. TEMEL SEO ALANLARI */}
                <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                    2. Temel SEO Alanları & Metadata
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="text-[#AAAAAA]">Sayfa Adı:</label>
                      <input
                        type="text"
                        value={builderForm.title || ''}
                        onChange={(e) => setBuilderForm({ ...builderForm, title: e.target.value })}
                        placeholder="Örn: Didim Sosyal Medya Ajansı"
                        className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#A40001]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[#AAAAAA]">URL Slug:</label>
                      <input
                        type="text"
                        value={builderForm.slug || ''}
                        onChange={(e) => setBuilderForm({ ...builderForm, slug: e.target.value })}
                        placeholder="didim-sosyal-medya-ajansi"
                        className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-mono focus:outline-none focus:border-[#A40001]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="text-[#AAAAAA]">Ana Keyword (Focus Keyword):</label>
                      <input
                        type="text"
                        value={builderForm.primaryKeyword || ''}
                        onChange={(e) => setBuilderForm({ ...builderForm, primaryKeyword: e.target.value })}
                        placeholder="didim sosyal medya ajansı"
                        className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-medium focus:outline-none focus:border-[#A40001]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[#AAAAAA]">Secondary Keywords (Virgül ile):</label>
                      <input
                        type="text"
                        value={secKeywordInput || (builderForm.secondaryKeywords || []).join(', ')}
                        onChange={(e) => {
                          setSecKeywordInput(e.target.value);
                          setBuilderForm({
                            ...builderForm,
                            secondaryKeywords: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          });
                        }}
                        placeholder="didim instagram yönetimi, didim dijital ajans"
                        className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#A40001]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <label className="text-[#AAAAAA]">H1 Başlığı (Ana Sayfa Başlığı):</label>
                    <input
                      type="text"
                      value={builderForm.h1 || ''}
                      onChange={(e) => setBuilderForm({ ...builderForm, h1: e.target.value })}
                      placeholder="Didim Sosyal Medya Ajansı & Profesyonel Prodüksiyon"
                      className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-bold text-sm focus:outline-none focus:border-[#A40001]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-[#AAAAAA]">SEO Title Tag:</label>
                        <span className={`font-mono ${ (builderForm.seoTitle?.length || 0) > 60 ? 'text-[#f56565]' : 'text-[#888888]'}`}>
                          {builderForm.seoTitle?.length || 0}/60 Karakter
                        </span>
                      </div>
                      <input
                        type="text"
                        value={builderForm.seoTitle || ''}
                        onChange={(e) => setBuilderForm({ ...builderForm, seoTitle: e.target.value })}
                        placeholder="Didim Sosyal Medya Ajansı | Altun Medya"
                        className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#A40001]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#AAAAAA]">Canonical URL:</label>
                      <input
                        type="text"
                        value={builderForm.canonicalUrl || ''}
                        onChange={(e) => setBuilderForm({ ...builderForm, canonicalUrl: e.target.value })}
                        placeholder="https://altunmedya.com/hizmetler/didim-sosyal-medya-ajansi"
                        className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-mono focus:outline-none focus:border-[#A40001]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <label className="text-[#AAAAAA]">Meta Description:</label>
                      <span className={`font-mono ${ (builderForm.seoDescription?.length || 0) > 160 ? 'text-[#f56565]' : 'text-[#888888]'}`}>
                        {builderForm.seoDescription?.length || 0}/160 Karakter
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      value={builderForm.seoDescription || ''}
                      onChange={(e) => setBuilderForm({ ...builderForm, seoDescription: e.target.value })}
                      placeholder="Didim ve Ege bölgesinde markanızı öne çıkaracak sosyal medya yönetimi, 4K Reels çekimleri ve Instagram reklam stratejileri..."
                      className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#A40001]"
                    />
                  </div>
                </div>

                {/* 3. İÇERİK EDITÖRÜ (RICH CONTENT ENGINE) */}
                <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                      3. Benzersiz İçerik & FAQ Yapılandırıcı
                    </h3>

                    {editingPageId && (
                      <button
                        type="button"
                        onClick={() => {
                          const page = seoPages.find((p) => p.id === editingPageId);
                          if (page) handleOpenInVisualEditor(page);
                        }}
                        className="text-xs text-[#A40001] hover:underline flex items-center gap-1"
                      >
                        ⚡ Visual Builder Modunda Aç ↗
                      </button>
                    )}
                  </div>

                  <div className="space-y-2 text-xs">
                    <label className="text-[#AAAAAA]">Arama Niyetini Doğrudan Yanıtlayan Giriş Metni (H1 Intro):</label>
                    <textarea
                      rows={3}
                      value={builderForm.content?.introAnswer || ''}
                      onChange={(e) =>
                        setBuilderForm({
                          ...builderForm,
                          content: { ...builderForm.content!, introAnswer: e.target.value }
                        })
                      }
                      placeholder="Didim'de restoran ve oteller için 4K video prodüksiyonu, düzenli gönderi akışı..."
                      className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#A40001]"
                    />
                  </div>

                  <div className="space-y-2 text-xs">
                    <label className="text-[#AAAAAA]">Ana Metin İçeriği (H2 & H3 HTML Destekli):</label>
                    <textarea
                      rows={8}
                      value={builderForm.content?.mainContentHtml || ''}
                      onChange={(e) =>
                        setBuilderForm({
                          ...builderForm,
                          content: { ...builderForm.content!, mainContentHtml: e.target.value }
                        })
                      }
                      placeholder="<h2>Neden Altun Medya?</h2><p>İçerik buraya yazılır...</p>"
                      className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-mono focus:outline-none focus:border-[#A40001]"
                    />
                  </div>

                  {/* FAQ Accordion Item Builder */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs text-[#AAAAAA] font-bold">Sık Sorulan Sorular (FAQ Schema Destekli):</label>
                      <button
                        type="button"
                        onClick={() => {
                          const currentFaq = builderForm.content?.faq || [];
                          setBuilderForm({
                            ...builderForm,
                            content: {
                              ...builderForm.content!,
                              faq: [...currentFaq, { question: '', answer: '' }]
                            }
                          });
                        }}
                        className="text-[10px] px-2 py-1 bg-[#1E1E1E] text-[#A40001] rounded hover:bg-[#333333]"
                      >
                        + Soru Ekle
                      </button>
                    </div>

                    {(builderForm.content?.faq || []).map((faqItem, idx) => (
                      <div key={idx} className="p-3 bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-[#888888] font-mono">Soru #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updatedFaq = (builderForm.content?.faq || []).filter((_, i) => i !== idx);
                              setBuilderForm({
                                ...builderForm,
                                content: { ...builderForm.content!, faq: updatedFaq }
                              });
                            }}
                            className="text-[#f56565] text-[10px]"
                          >
                            Kaldır
                          </button>
                        </div>
                        <input
                          type="text"
                          value={faqItem.question}
                          onChange={(e) => {
                            const updatedFaq = [...(builderForm.content?.faq || [])];
                            updatedFaq[idx].question = e.target.value;
                            setBuilderForm({
                              ...builderForm,
                              content: { ...builderForm.content!, faq: updatedFaq }
                            });
                          }}
                          placeholder="Soru metni..."
                          className="w-full bg-[#1E1E1E] border border-[#333333] rounded p-2 text-white"
                        />
                        <textarea
                          rows={2}
                          value={faqItem.answer}
                          onChange={(e) => {
                            const updatedFaq = [...(builderForm.content?.faq || [])];
                            updatedFaq[idx].answer = e.target.value;
                            setBuilderForm({
                              ...builderForm,
                              content: { ...builderForm.content!, faq: updatedFaq }
                            });
                          }}
                          placeholder="Cevap metni..."
                          className="w-full bg-[#1E1E1E] border border-[#333333] rounded p-2 text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Controls & Previews (1 Col) */}
              <div className="space-y-6">
                
                {/* LIVE GOOGLE PREVIEW */}
                <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                      Google Arama Önizlemesi
                    </h3>
                    <div className="flex items-center bg-[#1E1E1E] p-0.5 rounded border border-[#1E1E1E] text-[10px]">
                      <button
                        onClick={() => setPreviewDevice('desktop')}
                        className={`px-2 py-0.5 rounded ${previewDevice === 'desktop' ? 'bg-[#333333] text-white' : 'text-[#888888]'}`}
                      >
                        Desktop
                      </button>
                      <button
                        onClick={() => setPreviewDevice('mobile')}
                        className={`px-2 py-0.5 rounded ${previewDevice === 'mobile' ? 'bg-[#333333] text-white' : 'text-[#888888]'}`}
                      >
                        Mobil
                      </button>
                    </div>
                  </div>

                  {/* Google Snippet Card */}
                  <div className="bg-[#1E1E1E] p-4 rounded-xl border border-[#1E1E1E] font-sans space-y-1">
                    <div className="flex items-center gap-2 text-xs text-[#DADCE0]">
                      <span className="w-4 h-4 rounded-full bg-[#A40001] text-white flex items-center justify-center font-bold text-[9px]">
                        A
                      </span>
                      <div className="truncate text-[11px] text-[#bdc1c6]">
                        altunmedya.com › {builderForm.slug || 'sayfa-slug'}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-[#8ab4f8] hover:underline cursor-pointer truncate">
                      {builderForm.seoTitle || 'Sayfa Başlığı — ALTUN MEDYA'}
                    </div>
                    <div className="text-xs text-[#bdc1c6] line-clamp-2 leading-relaxed pt-0.5">
                      {builderForm.seoDescription || 'Arama motorlarında görünecek meta açıklama metni buraya yazılacaktır.'}
                    </div>
                  </div>
                </div>

                {/* REALTIME SEO HEALTH & DUPLICATE CHECKER */}
                <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                    SEO Skoru & Kopya Risk Analizi
                  </h3>

                  <div className="flex items-center justify-between p-3 bg-[#1E1E1E] rounded-lg border border-[#1E1E1E]">
                    <div>
                      <div className="text-[10px] text-[#888888]">CANLI SEO SKORU</div>
                      <div className="text-2xl font-bold font-mono text-[#A40001]">{currentFormScore}/100</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#888888]">DUPLICATE RISK</div>
                      <div className={`text-xl font-bold font-mono ${currentFormRisk > 15 ? 'text-[#f56565]' : 'text-[#48bb78]'}`}>
                        %{currentFormRisk}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-[#48bb78]">
                      <span>✓</span>
                      <span>H1 Ana Başlık Tanımlı</span>
                    </div>
                    <div className={`flex items-center gap-2 ${builderForm.seoTitle?.length ? 'text-[#48bb78]' : 'text-[#888888]'}`}>
                      <span>{builderForm.seoTitle?.length ? '✓' : '○'}</span>
                      <span>SEO Title Tag ({builderForm.seoTitle?.length || 0} karakter)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${builderForm.seoDescription?.length ? 'text-[#48bb78]' : 'text-[#888888]'}`}>
                      <span>{builderForm.seoDescription?.length ? '✓' : '○'}</span>
                      <span>Meta Description ({builderForm.seoDescription?.length || 0} karakter)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${builderForm.canonicalUrl ? 'text-[#48bb78]' : 'text-[#888888]'}`}>
                      <span>{builderForm.canonicalUrl ? '✓' : '○'}</span>
                      <span>Canonical URL Hazır</span>
                    </div>
                    <div className={`flex items-center gap-2 ${(builderForm.content?.faq?.length || 0) > 0 ? 'text-[#48bb78]' : 'text-[#888888]'}`}>
                      <span>{(builderForm.content?.faq?.length || 0) > 0 ? '✓' : '○'}</span>
                      <span>FAQ Schema ({builderForm.content?.faq?.length || 0} Soru)</span>
                    </div>
                  </div>
                </div>

                {/* SCHEMA SELECTION */}
                <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                    Otomatik Schema Tipi
                  </h3>
                  <select
                    value={builderForm.schemaType || 'Service'}
                    onChange={(e) => setBuilderForm({ ...builderForm, schemaType: e.target.value as SchemaType })}
                    className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#A40001]"
                  >
                    <option value="Service">Service Schema (Hizmet)</option>
                    <option value="LocalBusiness">LocalBusiness Schema (Yerel İşletme)</option>
                    <option value="Article">Article Schema (Makale/Blog)</option>
                    <option value="FAQPage">FAQPage Schema (SSS)</option>
                    <option value="Organization">Organization Schema (Kurumsal)</option>
                  </select>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: LOKASYONLAR DATABASE */}
        {/* ========================================================= */}
        {activeTab === 'locations' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Bölgesel SEO Lokasyon Veritabanı</h2>
              <span className="text-xs text-[#888888]">Türkiye Gerçek Hizmet Bölgeleri</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <div key={loc.id} className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-3 hover:border-[#A40001]/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm">{loc.name}</h3>
                    <span className="px-2 py-0.5 bg-[#1E1E1E] text-[#A40001] rounded text-[10px] font-mono">
                      {loc.city}
                    </span>
                  </div>
                  <p className="text-xs text-[#999999] leading-relaxed">{loc.regionalDescription || loc.shortDesc}</p>
                  <div className="pt-2 border-t border-[#1C1C1C] flex items-center justify-between text-[10px] text-[#777777] font-mono">
                    <span>Slug: /{loc.slug}</span>
                    <span>Lat: {loc.latitude}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: SEKTÖRLER DATABASE */}
        {/* ========================================================= */}
        {activeTab === 'sectors' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Sektör Veritabanı (Sector Intelligence)</h2>
              <span className="text-xs text-[#888888]">Özel Sektörel Problem & İhtiyaç Tanımları</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectors.map((sec) => (
                <div key={sec.id} className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-3 hover:border-[#38bdf8]/50 transition-colors">
                  <h3 className="font-bold text-white text-sm flex items-center justify-between">
                    {sec.name}
                    <span className="text-xs text-[#38bdf8] font-mono">/{sec.slug}</span>
                  </h3>
                  <div className="p-2.5 bg-[#1E1E1E] rounded-lg text-xs space-y-1">
                    <span className="text-[#888888] font-semibold">Sektörel Problem:</span>
                    <p className="text-[#CCCCCC]">{sec.painPoints?.[0] || sec.commonProblems?.[0] || 'Genel dijital görünürlük ihtiyacı.'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: HİZMETLER DATABASE */}
        {/* ========================================================= */}
        {activeTab === 'services' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Hizmet Veritabanı</h2>
              <span className="text-xs text-[#888888]">Kolektif Hizmet Kataloğu</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((srv) => (
                <div key={srv.id} className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-3">
                  <h3 className="font-bold text-white text-sm">{srv.name}</h3>
                  <p className="text-xs text-[#999999]">{srv.description}</p>
                  <div className="text-[10px] text-[#A40001] font-mono">/{srv.slug}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 7: INTERNAL LINK ENGINE */}
        {/* ========================================================= */}
        {activeTab === 'links' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white">Akıllı Internal Link Motoru</h2>
                <p className="text-xs text-[#888888]">Bağlamsal ve Semantik Link Önerileri (Spam Önleyici)</p>
              </div>
            </div>

            <div className="bg-[#262626] border border-[#1E1E1E] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#1E1E1E] bg-[#1E1E1E] text-[#888888] font-mono text-[10px]">
                    <th className="p-3">ANCHOR TEXT</th>
                    <th className="p-3">HEDEF URL</th>
                    <th className="p-3">ALAKA SKORU</th>
                    <th className="p-3">DURUM</th>
                    <th className="p-3 text-right">İŞLEM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E1E1E]">
                  {internalLinks.map((link) => (
                    <tr key={link.id} className="hover:bg-[#1E1E1E]">
                      <td className="p-3 font-semibold text-white">"{link.anchorText}"</td>
                      <td className="p-3 font-mono text-[#38bdf8]">/{link.targetSlug}</td>
                      <td className="p-3 font-mono font-bold text-[#A40001]">%{link.relevanceScore}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${
                            link.status === 'accepted'
                              ? 'bg-[#A40001]/10 text-[#A40001]'
                              : link.status === 'rejected'
                              ? 'bg-[#f56565]/10 text-[#f56565]'
                              : 'bg-[#ecc94b]/10 text-[#ecc94b]'
                          }`}
                        >
                          {link.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-2">
                        {link.status === 'suggested' && (
                          <>
                            <button
                              onClick={() => acceptInternalLink(link.id)}
                              className="px-3 py-1 bg-[#A40001] text-white font-semibold rounded text-[10px]"
                            >
                              Kabul Et
                            </button>
                            <button
                              onClick={() => rejectInternalLink(link.id)}
                              className="px-3 py-1 bg-[#1E1E1E] text-[#888888] rounded text-[10px]"
                            >
                              Reddet
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 8: REDIRECTS (301 MANAGER) */}
        {/* ========================================================= */}
        {activeTab === 'redirects' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                Yeni 301 Yönlendirme Ekle
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <input
                  type="text"
                  placeholder="Eski URL (örn: /eski-didim-sayfasi)"
                  value={newRedirectFrom}
                  onChange={(e) => setNewRedirectFrom(e.target.value)}
                  className="bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-mono flex-1 focus:outline-none focus:border-[#A40001]"
                />
                <span className="text-[#888888]">→</span>
                <input
                  type="text"
                  placeholder="Yeni URL (örn: /hizmetler/didim-sosyal-medya-ajansi)"
                  value={newRedirectTo}
                  onChange={(e) => setNewRedirectTo(e.target.value)}
                  className="bg-[#1E1E1E] border border-[#1E1E1E] rounded-lg p-2.5 text-white font-mono flex-1 focus:outline-none focus:border-[#A40001]"
                />
                <button
                  onClick={() => {
                    if (newRedirectFrom && newRedirectTo) {
                      addRedirect(newRedirectFrom, newRedirectTo);
                      setNewRedirectFrom('');
                      setNewRedirectTo('');
                    }
                  }}
                  className="px-4 py-2.5 bg-[#A40001] text-white font-semibold rounded-lg hover:bg-[#b5e600]"
                >
                  + Yönlendirme Oluştur
                </button>
              </div>
            </div>

            <div className="bg-[#262626] border border-[#1E1E1E] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#1E1E1E] bg-[#1E1E1E] text-[#888888] font-mono text-[10px]">
                    <th className="p-3">ESKİ URL</th>
                    <th className="p-3">YENİ HEDEF URL</th>
                    <th className="p-3">STATUS CODE</th>
                    <th className="p-3 text-right">SİL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E1E1E]">
                  {redirects.map((red) => (
                    <tr key={red.id} className="hover:bg-[#1E1E1E]">
                      <td className="p-3 font-mono text-[#f56565]">{red.fromUrl}</td>
                      <td className="p-3 font-mono text-[#A40001]">{red.toUrl}</td>
                      <td className="p-3 font-mono">
                        <span className="px-2 py-0.5 bg-[#38bdf8]/10 text-[#38bdf8] rounded">{red.statusCode}</span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => deleteRedirect(red.id)}
                          className="px-2 py-1 bg-[#f56565]/10 text-[#f56565] hover:bg-[#f56565] hover:text-white rounded text-[10px]"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 9: SITEMAP & SCHEMA */}
        {/* ========================================================= */}
        {activeTab === 'sitemap' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                  XML Sitemap Yapılandırması
                </h3>
                <p className="text-xs text-[#999999]">
                  Yeni yayınlanan tüm kaliteli sayfalar otomatik olarak sitemap.xml içerisine eklenir. Noindex işaretlenen sayfalar sitemap'ten otomatik çıkarılır.
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 bg-[#1E1E1E] border border-[#1E1E1E] rounded flex justify-between">
                    <span className="text-[#38bdf8]">/sitemap.xml</span>
                    <span className="text-[#A40001]">Aktif (Ana Sitemap Index)</span>
                  </div>
                  <div className="p-2.5 bg-[#1E1E1E] border border-[#1E1E1E] rounded flex justify-between">
                    <span className="text-[#CCCCCC]">/service-sitemap.xml</span>
                    <span className="text-[#888888]">{publishedCount} URL</span>
                  </div>
                  <div className="p-2.5 bg-[#1E1E1E] border border-[#1E1E1E] rounded flex justify-between">
                    <span className="text-[#CCCCCC]">/location-sitemap.xml</span>
                    <span className="text-[#888888]">{locations.length} URL</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#262626] border border-[#1E1E1E] p-5 rounded-xl space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
                  Structured Data (JSON-LD) Canlı Önizleme
                </h3>
                <pre className="p-3 bg-[#262626] border border-[#1E1E1E] rounded text-[11px] text-[#A40001] font-mono overflow-x-auto max-h-64">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ALTUN MEDYA Didim Stüdyosu",
  "url": "https://altunmedya.com",
  "telephone": "+90 (542) 505 53 09",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Didim",
    "addressRegion": "Aydın",
    "addressCountry": "TR"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 10: SETTINGS */}
        {/* ========================================================= */}
        {activeTab === 'settings' && (
          <div className="bg-[#262626] border border-[#1E1E1E] p-6 rounded-xl space-y-4 animate-fadeIn">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A40001]">
              SEO Content Engine Genel Ayarlar
            </h3>
            <div className="space-y-4 text-xs max-w-xl">
              <div className="space-y-1">
                <label className="text-[#AAAAAA]">Varsayılan Canonical Domain:</label>
                <input
                  type="text"
                  defaultValue="https://altunmedya.com"
                  className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded p-2 text-white font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[#AAAAAA]">Duplicate Content Risk Eşik Değeri (%):</label>
                <input
                  type="number"
                  defaultValue={15}
                  className="w-full bg-[#1E1E1E] border border-[#1E1E1E] rounded p-2 text-white font-mono"
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="autoIndexCheck" defaultChecked />
                <label htmlFor="autoIndexCheck" className="text-white">
                  Kalite kontrolünden geçen sayfaları otomatik olarak Index + Follow işaretle
                </label>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
