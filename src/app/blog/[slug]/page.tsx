'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { blogPosts, BlogPost } from '@/data/blog-database';
import { Clock, ArrowLeft, CheckCircle2, Share2, Tag, BookOpen, ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

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
        <article className="max-w-4xl mx-auto px-5 sm:px-10 space-y-10">
          
          {/* BREADCRUMB & BACK LINK */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tüm Rehberlere Dön</span>
            </Link>

            <span className="text-xs font-mono text-[#FF6B35] font-bold">
              {post.category}
            </span>
          </div>

          {/* ARTICLE HEADER */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-heading text-white leading-tight">
              <span className="font-black">{post.title.split(' ').slice(0, 3).join(' ')}</span>{' '}
              <span className="font-light text-white/80">{post.title.split(' ').slice(3).join(' ')}</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
              {post.excerpt}
            </p>

            {/* AUTHOR & META BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#B33A06]"
                />
                <div>
                  <h4 className="text-xs font-bold text-white font-heading">{post.author.name}</h4>
                  <p className="text-[10px] text-white/60 font-mono">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-white/60">
                <span>{post.publishedDate}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* FEATURED HERO IMAGE */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* KEY TAKEAWAYS / ÖNEMLİ ÇIKARIMLAR BOX */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121118] border border-[#B33A06]/40 space-y-4 shadow-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF6B35]" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                BU REHBERDEN ÖNEMLİ ÇIKARIMLAR
              </h3>
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 font-sans leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MAIN ARTICLE BODY */}
          <div
            className="prose prose-invert max-w-none text-white/80 font-sans leading-relaxed space-y-6 text-sm sm:text-base
              [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-black [&>h2]:font-heading [&>h2]:text-white [&>h2]:pt-6 [&>h2]:border-t [&>h2]:border-white/10
              [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:text-[#FF6B35] [&>h3]:pt-4
              [&>p]:leading-relaxed [&>p]:text-white/80
              [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-white/80
              [&>strong]:text-white [&>strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* KEYWORDS / ETİKETLER */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/60 mb-3 font-bold">
              İlgili Anahtar Kelimeler
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* IN-ARTICLE CTA BOX */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1B1410] to-[#0F0D0C] border border-[#B33A06]/50 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-6">
            <div className="space-y-2 max-w-lg">
              <h3 className="text-xl font-bold font-heading text-white">
                Bu Stratejiyi Didim&apos;deki Markanız İçin Hayata Geçirelim
              </h3>
              <p className="text-xs text-white/70 font-sans">
                Altun Medya ekibiyle doğrudan görüşün; işletmenize özel video prodüksiyon, yerel SEO ve sosyal medya planını oluşturalım.
              </p>
            </div>
            <button
              onClick={() => setIsBriefOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#B33A06] hover:bg-[#C84408] text-white text-xs font-bold font-mono uppercase tracking-wider whitespace-nowrap transition-all shadow-xl active:scale-95"
            >
              Hemen Brief Verin
            </button>
          </div>

          {/* RELATED POSTS */}
          {relatedPosts.length > 0 && (
            <div className="pt-12 border-t border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">Diğer Didim Rehberleri</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B33A06]/50 transition-all block group"
                  >
                    <span className="text-[10px] font-mono text-[#FF6B35] font-bold uppercase block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold font-heading text-white group-hover:text-[#FF6B35] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-white/60 font-sans mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>

      <Footer />

      <BriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
