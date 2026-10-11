'use client';

import Link from 'next/link';
import { Ticket } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function MobileNav({ isOpen, onClose, onOpenBrief }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between p-7 sm:p-12 transition-all animate-fadeIn overflow-y-auto"
    >
      <div className="pt-20 space-y-4 text-base sm:text-lg font-semibold tracking-wide">
        <Link href="/" onClick={onClose} className="block text-white/90 hover:text-white py-1">
          Anasayfa
        </Link>
        
        {/* KURUMSAL SECTION WITH SUB LINKS */}
        <div className="space-y-2 pt-1 pb-2 border-y border-white/10">
          <div className="text-xs font-mono font-bold uppercase text-[#FF6B35] tracking-widest pt-1">
            KURUMSAL MİMARİ
          </div>
          <div className="pl-3 space-y-2 border-l border-white/15">
            <Link href="/kurumsal/hakkimizda" onClick={onClose} className="block text-sm text-white/80 hover:text-[#FF6B35]">
              • Hakkımızda
            </Link>
            <Link href="/kurumsal/biz-kimiz" onClick={onClose} className="block text-sm text-white/80 hover:text-[#FF6B35]">
              • Biz Kimiz
            </Link>
            <Link href="/kurumsal/hikayemiz" onClick={onClose} className="block text-sm text-white/80 hover:text-[#FF6B35]">
              • Hikayemiz
            </Link>
          </div>
        </div>

        <Link href="/#works" onClick={onClose} className="block text-white/90 hover:text-white py-1">
          İşlerimiz
        </Link>
        <Link href="/#services" onClick={onClose} className="block text-white/90 hover:text-white py-1">
          Hizmetlerimiz
        </Link>
        <Link href="/influencer" onClick={onClose} className="block text-[#FF6B35] font-extrabold py-1 flex items-center gap-1.5">
          <span>✦ İnfluencer Network</span>
        </Link>
        <Link href="/blog" onClick={onClose} className="block text-white/90 hover:text-white py-1">
          📖 Didim SEO &amp; Blog
        </Link>
        <Link href="/#contact" onClick={onClose} className="block text-white/90 hover:text-white py-1">
          İletişim
        </Link>
      </div>

      <div className="space-y-4 pt-6 border-t border-white/10">
        <button
          onClick={() => {
            onClose();
            onOpenBrief();
          }}
          className="w-full py-4 text-center text-sm font-extrabold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          <Ticket className="w-4 h-4" />
          <span>Hemen Proje Başlat</span>
        </button>

        <div className="flex justify-between items-center text-xs text-[#8E8E93] font-mono">
          <span>{siteConfig.email}</span>
          <span>{siteConfig.address}</span>
        </div>
      </div>
    </div>
  );
}
