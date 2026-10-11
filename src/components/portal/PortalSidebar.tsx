'use client';

import AltunMedyaLogo from '@/components/layout/AltunMedyaLogo';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, FolderKanban, CheckSquare, Film, Calendar, 
  Palette, BarChart3, Receipt, FileText, MessageSquare, 
  Bell, Settings, LogOut, ShieldCheck, ChevronRight, Sparkles 
} from 'lucide-react';
import { usePortal, PortalSectionId } from './PortalContext';

export default function PortalSidebar() {
  const router = useRouter();
  const { 
    client, activeSection, setActiveSection, setSelectedProjectId,
    approvals, invoices, chatMessages, notifications 
  } = usePortal();

  const pendingApprovalsCount = approvals.filter((a) => a.status === 'Onay Bekliyor').length;
  const pendingInvoicesCount = invoices.filter((i) => i.status === 'Bekliyor').length;
  const unreadMessagesCount = 1;

  const navItems: { id: PortalSectionId; label: string; icon: any; badge?: number }[] = [
    { id: '01 Genel Bakış', label: 'Genel Bakış', icon: LayoutDashboard },
    { id: '02 Projeler', label: 'Projeler', icon: FolderKanban },
    { id: '03 Onay Merkezi', label: 'Onay Merkezi', icon: CheckSquare, badge: pendingApprovalsCount },
    { id: '04 Medya & Dosyalar', label: 'Medya & Dosyalar', icon: Film },
    { id: '05 İçerik Takvimi', label: 'İçerik Takvimi', icon: Calendar },
    { id: '06 Marka Merkezi', label: 'Marka Merkezi', icon: Palette },
    { id: '07 Performans', label: 'Performans', icon: BarChart3 },
    { id: '08 Finans & Faturalar', label: 'Finans & Faturalar', icon: Receipt, badge: pendingInvoicesCount },
    { id: '09 Sözleşmeler & Belgeler', label: 'Sözleşmeler & Belgeler', icon: FileText },
    { id: '10 Mesajlar', label: 'Mesajlar', icon: MessageSquare, badge: unreadMessagesCount },
  ];

  const handleLogout = () => {
    localStorage.removeItem('altun_client_auth');
    router.push('/musteri-giris');
  };

  const handleSectionClick = (secId: PortalSectionId) => {
    setSelectedProjectId(null);
    setActiveSection(secId);
  };

  return (
    <>
      {/* DESKTOP SIDEBAR (Hidden on mobile/tablet) */}
      <aside className="hidden lg:flex flex-col justify-between w-72 bg-[#090909] border-r border-white/10 h-screen sticky top-0 z-30 select-none flex-shrink-0">
        
        {/* TOP BRAND HEADER */}
        <div>
          <div className="p-6 border-b border-white/10">
            <Link href="/" className="group flex flex-col justify-center select-none" aria-label="ALTUN MEDYA">
              <div className="flex items-center text-white">
                <AltunMedyaLogo className="h-6 w-auto text-white" showStar={true} />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[9px] uppercase font-bold tracking-[0.24em] text-[#B33A06]">
                  CLIENT PORTAL
                </span>
                <span className="px-1.5 py-0.2 rounded bg-[#B33A06]/10 border border-[#B33A06]/30 text-[8px] font-mono text-[#B33A06] font-bold">
                  v2.0 OS
                </span>
              </div>
            </Link>
          </div>

          {/* MAIN NAVIGATION LIST (01 -> 10) */}
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-none">
            <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#8E8E93]">
              İşletim Sistemi
            </div>
            
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all group ${
                    isActive
                      ? 'bg-[#B33A06] text-white font-extrabold shadow-[0_0_20px_rgba(179, 58, 6,0.25)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono ${isActive ? 'text-black/60 font-bold' : 'text-[#8E8E93]'}`}>
                      {item.id.substring(0, 2)}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white/60 group-hover:text-[#B33A06]'} transition-colors`} />
                    <span className="tracking-tight">{item.label}</span>
                  </div>

                  {item.badge && item.badge > 0 ? (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isActive
                          ? 'bg-black text-[#B33A06]'
                          : 'bg-[#B33A06] text-white shadow-[0_0_10px_rgba(179, 58, 6,0.4)]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM USER & CONTROL SECTION */}
        <div className="p-4 border-t border-white/10 space-y-2 bg-[#060606]">
          <div className="px-3 py-1 flex items-center justify-between text-[10px] font-mono text-white/50">
            <span>● GÜVENLİ MÜŞTERİ PORTALI</span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#B33A06]" />
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <img
                src={client.avatar}
                alt={client.companyName}
                className="w-9 h-9 rounded-xl object-cover border border-[#B33A06]"
              />
              <div className="truncate">
                <div className="text-xs font-bold text-white font-heading truncate">{client.companyName}</div>
                <div className="text-[10px] text-white/50 font-mono truncate">{client.name}</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Çıkış Yap"
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/70 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090909]/95 backdrop-blur-2xl border-t border-white/15 px-2 py-2 flex items-center justify-around select-none">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all ${
                isActive ? 'text-[#B33A06]' : 'text-white/60 hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.badge && item.badge > 0 ? (
                  <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-[#B33A06] text-white text-[9px] font-mono font-bold flex items-center justify-center">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[9px] font-mono font-semibold mt-1">{item.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
