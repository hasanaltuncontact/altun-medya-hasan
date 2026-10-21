'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { blogPosts, blogCategories } from '@/data/blog-database';
import { Search, ArrowUpRight } from 'lucide-react';

export default function BlogIndexClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.categorySlug === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="relative w-full overflow-hidden bg-[#262626] text-[#F6F6F6] min-h-screen">
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
        {/* HERO HEADER */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#F6F6F6]/10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A40001]/20 border border-[#A40001]/40 text-[#A40001] text-xs font-medium font-bold">
                <span>DİDİM, AKBÜK &amp; EGE BÖLGESİ SEO VE DİJİTAL REHBERLERİ</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-heading tracking-tight text-[#F6F6F6] leading-tight">
                <span className="font-black">BÖLGESEL</span>{' '}
                <span className="font-light text-[#F6F6F6]/80">BİLGİ BANKASI &amp;</span> <br />
                <span className="font-black text-[#A40001]">STRATEJİK</span>{' '}
                <span className="font-light text-[#F6F6F6]/80">BLOG.</span>
              </h1>
              <p className="text-sm sm:text-base text-[#F6F6F6]/75 font-sans leading-relaxed">
                Didim ve Ege kıyısındaki otel, restoran, villa, sağlık ve perakende işletmelerinin dijitalde satış ve prestij kazanması için hazırlanan derinlemesine sektörel analizler, yerel SEO taktikleri ve prodüksiyon rehberleri.
              </p>
            </div>

            {/* SEARCH INPUT */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Konu, anahtar kelime veya sektör ara..."
                className="w-full bg-[#F6F6F6]/5 border border-[#F6F6F6]/15 focus:border-[#A40001] rounded-xl px-4 py-3.5 pl-11 text-xs text-[#F6F6F6] placeholder-white/40 focus:outline-none transition-all font-sans"
              />
              <Search className="w-4 h-4 text-[#F6F6F6]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* CATEGORIES FILTER */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-bold transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#A40001] text-[#F6F6F6] shadow-lg shadow-[#A40001]/25'
                    : 'bg-white/5 text-[#F6F6F6]/70 hover:bg-[#F6F6F6]/10 hover:text-[#F6F6F6] border border-[#F6F6F6]/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED POST BANNER (If no search query active) */}
        {!searchQuery && selectedCategory === 'all' && (
          <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block group relative rounded-3xl overflow-hidden border border-[#F6F6F6]/15 bg-[#1E1E1E] hover:border-[#A40001]/60 transition-all shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#A40001] text-[#F6F6F6] text-xs font-medium font-extrabold uppercase tracking-wide">
                      ÖNE ÇIKAN REHBER
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-[#F6F6F6]/60">
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-heading text-[#F6F6F6] group-hover:text-[#A40001] transition-colors leading-snug">
                    <span className="font-black">{featuredPost.title.split(' ').slice(0, 3).join(' ')}</span>{' '}
                    <span className="font-light text-[#F6F6F6]/80">{featuredPost.title.split(' ').slice(3).join(' ')}</span>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#F6F6F6]/75 font-sans leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-xs font-bold text-[#F6F6F6] group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      <span>Rehberi Oku &amp; İncele</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#262626]/20" />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F6F6F6]">
              {selectedCategory === 'all' ? 'Tüm Sektörel Makaleler' : `${blogCategories.find(c => c.slug === selectedCategory)?.name} Rehberleri`}
            </h3>
            <span className="text-xs font-medium text-[#F6F6F6]/50">{filteredPosts.length} içerik listeleniyor</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-3xl bg-[#1E1E1E] border border-[#F6F6F6]/10 hover:border-[#A40001]/50 transition-all overflow-hidden shadow-lg hover:-translate-y-1 duration-300"
              >
                <div>
                  {/* POST IMAGE */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#262626]/80 backdrop-blur-md border border-[#F6F6F6]/15 text-[#F6F6F6] text-xs font-medium font-bold uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* POST CONTENT */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-medium text-[#F6F6F6]/50">
                      <span>{post.publishedDate}</span>
                      <span className="flex items-center gap-1">
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h4 className="text-lg font-heading text-[#F6F6F6] group-hover:text-[#A40001] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="font-black">{post.title.split(' ').slice(0, 2).join(' ')}</span>{' '}
                        <span className="font-light text-[#F6F6F6]/80">{post.title.split(' ').slice(2).join(' ')}</span>
                      </Link>
                    </h4>

                    <p className="text-xs text-[#F6F6F6]/70 font-sans leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* KEYWORDS TAGS */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.keywords.slice(0, 3).map((kw) => (
                        <span key={kw} className="px-2 py-0.5 rounded-md bg-[#F6F6F6]/5 text-xs font-medium text-[#F6F6F6]/60">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-[#F6F6F6]/5 group-hover:bg-[#A40001] text-[#F6F6F6] text-xs font-medium font-bold flex items-center justify-between transition-all border border-[#F6F6F6]/10 group-hover:border-transparent"
                  >
                    <span>Yazının Devamını Oku</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A40001] group-hover:text-[#F6F6F6]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-[#F6F6F6]/5 rounded-3xl border border-[#F6F6F6]/10 space-y-4">
              <h3 className="text-lg font-bold text-[#F6F6F6]">Aradığınız kriterlere uygun makale bulunamadı</h3>
              <p className="text-xs text-[#F6F6F6]/60 font-sans max-w-sm mx-auto">
                Farklı bir anahtar kelime deneyebilir veya tüm kategorilere göz atabilirsiniz.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="px-5 py-2.5 rounded-xl bg-[#A40001] text-[#F6F6F6] text-xs font-bold font-medium"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </section>

        {/* HIGH-IMPACT LOCAL STRATEGY CALLOUT BANNER */}
        <section className="px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#A40001] border border-[#A40001]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black font-heading text-[#F6F6F6]">
                Didim&apos;deki İşletmenizin SEO &amp; Medya Analizini Çıkaralım
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F6F6]/80 font-sans leading-relaxed">
                Rakiplerinizin gerisinde kalmayın. Web sitenizin hızı, Google Harita sıralamanız ve sosyal medya etkileşiminiz için 24 saat içinde detaylı aksiyon planı hazırlayalım.
              </p>
            </div>

            <button
              onClick={() => setIsBriefOpen(true)}
              className="px-8 py-4 rounded-xl bg-[#A40001] hover:bg-[#A40001] text-[#F6F6F6] text-xs sm:text-sm font-extrabold font-medium transition-all shadow-xl hover:shadow-[0_0_35px_rgba(179,58,6,0.4)] whitespace-nowrap active:scale-95 relative z-10"
            >
              Stratejik Görüşme Başlat
            </button>
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
