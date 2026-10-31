'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import BriefModal from '@/components/modals/BriefModal';
import { BlogPost } from '@/data/blog-database';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface BlogPostDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostDetailClient({ post, relatedPosts }: BlogPostDetailClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#0B0B0B] text-[#F8F0DB] min-h-screen">
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
          <div className="flex items-center justify-between border-b border-[#F8F0DB]/10 pb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-medium font-bold text-[#F8F0DB]/70 hover:text-[#F8F0DB] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tüm Rehberlere Dön</span>
            </Link>

            <span className="text-xs font-medium text-accent font-bold">
              {post.category}
            </span>
          </div>

          {/* ARTICLE HEADER */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-heading text-[#F8F0DB] leading-tight">
              <span className="font-black">{post.title.split(' ').slice(0, 3).join(' ')}</span>{' '}
              <span className="font-light text-[#F8F0DB]/80">{post.title.split(' ').slice(3).join(' ')}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#F8F0DB]/80 font-sans leading-relaxed">
              {post.excerpt}
            </p>

            {/* AUTHOR & META BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#F8F0DB]/5 border border-[#F8F0DB]/10">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-accent"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#F8F0DB] font-heading">{post.author.name}</h4>
                  <p className="text-xs text-[#F8F0DB]/60 font-medium">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-[#F8F0DB]/60">
                <span>{post.publishedDate}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* FEATURED HERO IMAGE */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#F8F0DB]/15 shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0B0B0B]/20" />
          </div>

          {/* KEY TAKEAWAYS / ÖNEMLİ ÇIKARIMLAR BOX */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121118] border border-accent/40 space-y-4 shadow-xl">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium font-bold text-[#F8F0DB]">
                BU REHBERDEN ÖNEMLİ ÇIKARIMLAR
              </h3>
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F8F0DB]/85 font-sans leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MAIN ARTICLE BODY */}
          <div
            className="prose prose-invert max-w-none text-[#F8F0DB]/80 font-sans leading-relaxed space-y-6 text-sm sm:text-base
              [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-black [&>h2]:font-heading [&>h2]:text-[#F8F0DB] [&>h2]:pt-6 [&>h2]:border-t [&>h2]:border-[#F8F0DB]/10
              [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:text-accent [&>h3]:pt-4
              [&>p]:leading-relaxed [&>p]:text-[#F8F0DB]/80
              [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-[#F8F0DB]/80
              [&>strong]:text-[#F8F0DB] [&>strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* KEYWORDS / ETİKETLER */}
          <div className="pt-8 border-t border-[#F8F0DB]/10">
            <h4 className="text-xs font-medium text-[#F8F0DB]/60 mb-3 font-bold">
              İlgili Anahtar Kelimeler
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-lg bg-[#F8F0DB]/5 border border-[#F8F0DB]/10 text-xs font-medium text-[#F8F0DB]/80"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* IN-ARTICLE CTA BOX */}
          <div className="p-8 rounded-3xl bg-[#161616] border border-accent/50 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-6">
            <div className="space-y-2 max-w-lg">
              <h3 className="text-xl font-bold font-heading text-[#F8F0DB]">
                Bu Stratejiyi Didim&apos;deki Markanız İçin Hayata Geçirelim
              </h3>
              <p className="text-xs text-[#F8F0DB]/70 font-sans">
                Altun Medya ekibiyle doğrudan görüşün; işletmenize özel video prodüksiyon, yerel SEO ve sosyal medya planını oluşturalım.
              </p>
            </div>
            <button
              onClick={() => setIsBriefOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-accent hover:bg-accent text-onAccent text-xs font-bold font-medium whitespace-nowrap transition-all shadow-xl active:scale-95 hover:text-onAccent"
            >
              Hemen Brief Verin
            </button>
          </div>

          {/* RELATED POSTS */}
          {relatedPosts.length > 0 && (
            <div className="pt-12 border-t border-[#F8F0DB]/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-[#F8F0DB]">Diğer Didim Rehberleri</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="p-5 rounded-2xl bg-[#F8F0DB]/5 border border-[#F8F0DB]/10 hover:border-accent/50 transition-all block group"
                  >
                    <span className="text-xs font-medium text-accent font-bold uppercase block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold font-heading text-[#F8F0DB] group-hover:text-accent transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#F8F0DB]/60 font-sans mt-2 line-clamp-2">
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
