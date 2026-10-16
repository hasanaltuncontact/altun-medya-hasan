'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Ticket, Menu, X, ChevronDown, UserCheck } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import AltunMedyaLogo from './AltunMedyaLogo';

interface HeaderProps {
  onOpenBrief: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function Header({ onOpenBrief, onToggleMobileMenu, isMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sayfa değiştiğinde dropdown'ı kapat
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Alt sayfadaysa ana sayfadaki ilgili bölüme yönlendir
        e.preventDefault();
        router.push(href);
      }
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-5 sm:px-10 lg:px-14 border-b ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-white/10 shadow-2xl py-3'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex items-center select-none py-1" aria-label="ALTUN MEDYA">
          <AltunMedyaLogo className="h-7 sm:h-9 w-auto text-white group-hover:opacity-90 transition-opacity" showStar={true} />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          {siteConfig.navigation.map((item) => {
            if ('dropdown' in item && item.dropdown) {
              return (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative py-2 group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors py-1 cursor-pointer focus:outline-none"
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#B33A06] transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'
                      }`}
                    />
                  </button>

                  {/* DROPDOWN MENU */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-50 min-w-[270px] ${
                      isDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                    }`}
                  >
                    <div className="p-3 rounded-2xl bg-[#0B0B0B] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors group/sub"
                        >
                          <div className="text-xs font-bold text-white group-hover/sub:text-[#B33A06] transition-colors flex items-center justify-between">
                            <span>{sub.name}</span>
                            <span className="text-[10px] text-[#B33A06] opacity-0 group-hover/sub:opacity-100 transition-opacity">→</span>
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
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors py-1 hover:text-white ${
                  'isHighlight' in item && item.isHighlight
                    ? 'text-[#FF6B35] font-extrabold hover:text-[#FFA07A]'
                    : 'text-white/80'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & MOBILE TRIGGER */}
        <div className="flex items-center gap-3">
          <Link
            href="/musteri-giris"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl transition-all active:scale-95"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Müşteri Girişi</span>
          </Link>

          <button
            onClick={onOpenBrief}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] hover:shadow-[0_0_24px_rgba(179, 58, 6,0.35)] transition-all transform active:scale-95"
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
