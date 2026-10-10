'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Ticket, Menu, X, ChevronDown, UserCheck } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

interface HeaderProps {
  onOpenBrief: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function Header({ onOpenBrief, onToggleMobileMenu, isMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-5 sm:px-10 lg:px-14 border-b ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-white/10 shadow-2xl py-3'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex flex-col justify-center select-none" aria-label="ALTUN MEDYA">
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-[36px] font-extrabold tracking-[-0.04em] text-white lowercase leading-none transition-colors group-hover:text-white/90 font-heading">
              altun
            </span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8FF00] drop-shadow-[0_0_8px_rgba(200,255,0,0.6)] transform transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 C12 6.627 17.373 12 24 12 C17.373 12 12 17.373 12 24 C12 17.373 6.627 12 0 12 C6.627 12 12 6.627 12 0 Z" />
            </svg>
          </div>
          <span className="text-[8px] sm:text-[9.5px] uppercase font-bold tracking-[0.28em] text-[#C4D66A] mt-1 leading-none">
            BRANDING &amp; MARKETING
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          {siteConfig.navigation.map((item) => {
            if ('dropdown' in item && item.dropdown) {
              return (
                <div key={item.name} className="relative group py-2">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors py-1 cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#C8FF00] group-hover:rotate-180 transition-transform duration-300" />
                  </a>

                  {/* DROPDOWN MENU */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[270px]">
                    <div className="p-3 rounded-2xl bg-[#090909]/98 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors group/sub"
                        >
                          <div className="text-xs font-bold text-white group-hover/sub:text-[#C8FF00] transition-colors flex items-center justify-between">
                            <span>{sub.name}</span>
                            <span className="text-[10px] text-[#C8FF00] opacity-0 group-hover/sub:opacity-100 transition-opacity">→</span>
                          </div>
                          <div className="text-[10px] text-white/60 mt-0.5 font-mono">
                            {sub.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors py-1 hover:text-white ${
                  'isHighlight' in item && item.isHighlight
                    ? 'text-[#C8FF00] font-bold hover:text-[#D4FF28]'
                    : 'text-white/80'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA & MOBILE TRIGGER */}
        <div className="flex items-center gap-3">
          <Link
            href="/musteri-giris"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl transition-all active:scale-95"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span>Müşteri Girişi</span>
          </Link>

          <button
            onClick={onOpenBrief}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#C8FF00] text-black rounded-xl hover:bg-[#D4FF28] hover:shadow-[0_0_24px_rgba(200,255,0,0.35)] transition-all transform active:scale-95"
          >
            <span>Proje Biletini Kes</span>
            <Ticket className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleMobileMenu}
            className="md:hidden text-white p-2.5 focus:outline-none rounded-lg bg-white/5 border border-white/10"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
