'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { siteConfig } from '@/config/site.config';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function MobileNav({ isOpen, onClose, onOpenBrief }: MobileNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (!isOpen) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        e.preventDefault();
        router.push(href);
      }
    }
  };

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col justify-between p-7 sm:p-12 transition-all animate-fadeIn overflow-y-auto"
    >
      <div className="pt-20 space-y-4 text-base sm:text-lg font-semibold tracking-wide">
        <Link href="/" onClick={onClose} className="block text-[#F8F0DB]/90 hover:text-[#F8F0DB] py-1">
          Anasayfa
        </Link>
        
        {/* KURUMSAL SECTION WITH SUB LINKS */}
        <div className="space-y-2 pt-1 pb-2 border-y border-[#F8F0DB]/10">
          <div className="text-xs font-medium font-bold uppercase text-accent tracking-widest pt-1">
            KURUMSAL MİMARİ
          </div>
          <div className="pl-3 space-y-2 border-l border-[#F8F0DB]/15">
            <Link href="/kurumsal/hakkimizda" onClick={onClose} className="block text-sm text-[#F8F0DB]/80 hover:text-accent">
              • Hakkımızda
            </Link>
            <Link href="/kurumsal/biz-kimiz" onClick={onClose} className="block text-sm text-[#F8F0DB]/80 hover:text-accent">
              • Biz Kimiz
            </Link>
            <Link href="/kurumsal/hikayemiz" onClick={onClose} className="block text-sm text-[#F8F0DB]/80 hover:text-accent">
              • Hikayemiz
            </Link>
          </div>
        </div>

        <Link
          href="/#works"
          onClick={(e) => handleNavClick(e, '/#works')}
          className="block text-[#F8F0DB]/90 hover:text-[#F8F0DB] py-1"
        >
          İşlerimiz
        </Link>

        <Link
          href="/referanslar"
          onClick={onClose}
          className="block text-[#F8F0DB]/90 hover:text-[#F8F0DB] py-1 flex items-center justify-between"
        >
          <span>Referanslar &amp; Vaka Çalışmaları</span>
        </Link>

        <Link
          href="/#services"
          onClick={(e) => handleNavClick(e, '/#services')}
          className="block text-[#F8F0DB]/90 hover:text-[#F8F0DB] py-1"
        >
          Hizmetlerimiz
        </Link>

        <Link
          href="/influencer"
          onClick={onClose}
          className="block text-accent font-extrabold py-1 flex items-center gap-1.5"
        >
          <span>İnfluencer Network</span>
        </Link>

        <Link
          href="/blog"
          onClick={onClose}
          className="block text-[#F8F0DB]/90 hover:text-[#F8F0DB] py-1"
        >
          📖 Didim SEO &amp; Blog
        </Link>

        <Link
          href="/#contact"
          onClick={(e) => handleNavClick(e, '/#contact')}
          className="block text-[#F8F0DB]/90 hover:text-[#F8F0DB] py-1"
        >
          İletişim
        </Link>
      </div>

      <div className="space-y-4 pt-6 border-t border-[#F8F0DB]/10">
        <button
          onClick={() => {
            onClose();
            onOpenBrief();
          }}
          className="w-full py-4 text-center text-sm font-extrabold bg-accent text-onAccent rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95"
        >
          <span>Hemen Proje Başlat</span>
        </button>

        <div className="flex justify-between items-center text-xs text-[#F8F0DB]/55 font-medium">
          <span>{siteConfig.email}</span>
          <span>{siteConfig.phone}</span>
        </div>
      </div>
    </div>
  );
}
