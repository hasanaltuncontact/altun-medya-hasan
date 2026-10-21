'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
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
          ? 'bg-[#262626]/95 backdrop-blur-xl border-[#F6F6F6]/10 shadow-2xl py-3'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex items-center select-none py-1" aria-label="ALTUN MEDYA">
          <AltunMedyaLogo className="h-7 sm:h-9 w-auto text-[#F6F6F6] group-hover:opacity-90 transition-opacity" showStar={true} />
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
                    className="flex items-center gap-1.5 text-[#F6F6F6]/80 hover:text-[#F6F6F6] transition-colors py-1 cursor-pointer focus:outline-none"
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#A40001] transition-transform duration-300 ${
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
                    <div className="p-3 rounded-2xl bg-[#262626] border border-[#F6F6F6]/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block p-2.5 rounded-xl hover:bg-[#F6F6F6]/10 transition-colors group/sub"
                        >
                          <div className="text-xs font-bold text-[#F6F6F6] group-hover/sub:text-[#A40001] transition-colors flex items-center justify-between">
                            <span>{sub.name}</span>
                            <span className="text-xs text-[#A40001] opacity-0 group-hover/sub:opacity-100 transition-opacity">→</span>
                          </div>
                          <div className="text-xs text-[#F6F6F6]/60 mt-0.5 font-medium">
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
                className={`transition-colors py-1 hover:text-[#F6F6F6] ${
                  'isHighlight' in item && item.isHighlight
                    ? 'text-[#A40001] font-extrabold hover:text-[#F6F6F6]'
                    : 'text-[#F6F6F6]/80'
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
            className="hidden lg:inline-flex items-center px-4 py-2.5 text-sm font-bold text-[#F6F6F6] border border-[#F6F6F6]/20 rounded-full hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            <span>Müşteri girişi</span>
          </Link>

          <button
            onClick={onOpenBrief}
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-bold bg-[#A40001] text-[#F6F6F6] rounded-full hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
          >
            <span>Proje başlat</span>
          </button>

          <button
            onClick={onToggleMobileMenu}
            className="md:hidden text-[#F6F6F6] p-2.5 focus:outline-none rounded-lg bg-[#F6F6F6]/5 border border-[#F6F6F6]/10"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
