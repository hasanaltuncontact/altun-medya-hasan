'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, Bell, MessageSquare, Plus, User, Building2, 
  Settings, LogOut, ChevronDown, CheckCircle2, ShieldCheck, X, FileText, Film, FolderKanban 
} from 'lucide-react';
import { usePortal } from './PortalContext';

export default function PortalHeader() {
  const router = useRouter();
  const { 
    client, activeSection, setActiveSection, selectedProjectId, setSelectedProjectId,
    searchQuery, setSearchQuery, setIsNewProjectModalOpen, notifications, 
    markNotificationAsRead, projects, mediaAssets, invoices, contracts 
  } = usePortal();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const unreadNotifs = notifications.filter((n) => !n.read);

  const handleLogout = () => {
    localStorage.removeItem('altun_client_auth');
    router.push('/musteri-giris');
  };

  // Filtered search results preview
  const searchResults = searchQuery.trim() ? {
    projects: projects.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase())),
    media: mediaAssets.filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase())),
    invoices: invoices.filter((i) => i.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase()) || i.description.toLowerCase().includes(searchQuery.toLowerCase())),
    contracts: contracts.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase())),
  } : null;

  return (
    <header className="sticky top-0 z-20 bg-[#262626]/90 backdrop-blur-xl border-b border-white/10 px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4 select-none">
      
      {/* LEFT: SECTION BREADCRUMB & TITLE */}
      <div className="flex items-center gap-3">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-white/50">
            <span className="text-white/80">{client.companyName}</span>
            <span>/</span>
            <span className="text-[#A40001] font-bold">{selectedProjectId ? 'Proje Detayı' : activeSection}</span>
          </div>
          <h1 className="text-lg font-extrabold text-white font-heading leading-none mt-0.5">
            {selectedProjectId ? 'Çalışma Alanı & Detay' : activeSection.substring(3)}
          </h1>
        </div>
      </div>

      {/* CENTER: GLOBAL SEARCH BAR */}
      <div className="relative flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            placeholder="Arama yapın (Dosyalar, Projeler, Faturalar, Belgeler...)"
            className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#A40001] transition-colors font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* SEARCH RESULTS DROPDOWN MODAL */}
        {isSearchFocused && searchResults && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-[#262626]/98 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-3 z-50 max-h-96 overflow-y-auto">
            <div className="text-[10px] font-mono text-white/50 uppercase font-bold tracking-wider">
              Arama Sonuçları (&quot;{searchQuery}&quot;)
            </div>

            {/* PROJECTS */}
            {searchResults.projects.length > 0 && (
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#A40001] font-bold">Projeler</div>
                {searchResults.projects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedProjectId(p.id);
                      setActiveSection('02 Projeler');
                    }}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FolderKanban className="w-3.5 h-3.5 text-[#A40001]" />
                      <span>{p.title}</span>
                    </div>
                    <span className="text-[10px] text-white/50">{p.status}</span>
                  </div>
                ))}
              </div>
            )}

            {/* MEDIA */}
            {searchResults.media.length > 0 && (
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#A40001] font-bold">Medya &amp; Dosyalar</div>
                {searchResults.media.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setActiveSection('04 Medya & Dosyalar')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Film className="w-3.5 h-3.5 text-[#A40001]" />
                      <span>{m.title}</span>
                    </div>
                    <span className="text-[10px] text-white/50">{m.fileSize}</span>
                  </div>
                ))}
              </div>
            )}

            {/* INVOICES */}
            {searchResults.invoices.length > 0 && (
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#A40001] font-bold">Faturalar</div>
                {searchResults.invoices.map((i) => (
                  <div
                    key={i.id}
                    onClick={() => setActiveSection('08 Finans & Faturalar')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#A40001]" />
                      <span>{i.invoiceNo} — {i.description}</span>
                    </div>
                    <span className="text-[10px] text-white/50">₺{i.totalAmount.toLocaleString('tr-TR')}</span>
                  </div>
                ))}
              </div>
            )}

            {searchResults.projects.length === 0 && searchResults.media.length === 0 && searchResults.invoices.length === 0 && (
              <div className="text-xs font-mono text-white/40 text-center py-4">
                Sonuç bulunamadı. Lütfen başka bir kelime arayın.
              </div>
            )}
          </div>
        )}
      </div>

      {/* RIGHT: ACTION BUTTONS & PROFILE DROPDOWN */}
      <div className="flex items-center gap-3">
        
        {/* NEW PROJECT BUTTON */}
        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider bg-[#A40001] text-white rounded-xl hover:bg-[#A40001] hover:shadow-[0_0_20px_rgba(179,58,6,0.35)] transition-all flex items-center gap-1.5 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>+ Yeni Proje Başlat</span>
        </button>

        {/* MESSAGES TRIGGER */}
        <button
          onClick={() => setActiveSection('10 Mesajlar')}
          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors relative"
          title="Mesajlar"
        >
          <MessageSquare className="w-4 h-4 text-white/80" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#A40001]" />
        </button>

        {/* NOTIFICATION BELL */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors relative"
            title="Bildirimler"
          >
            <Bell className="w-4 h-4 text-white/80" />
            {unreadNotifs.length > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-[#A40001] text-white text-[9px] font-mono font-bold">
                {unreadNotifs.length}
              </span>
            )}
          </button>

          {/* NOTIFICATION DRAWER DROPDOWN */}
          {isNotifOpen && (
            <div className="absolute right-0 mt-3 w-80 p-4 rounded-2xl bg-[#262626]/98 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-3 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-white">Bildirimler ({notifications.length})</span>
                <button
                  onClick={() => setIsNotifOpen(false)}
                  className="text-white/40 hover:text-white text-xs font-mono"
                >
                  Kapat
                </button>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      markNotificationAsRead(n.id);
                      setActiveSection(n.targetSection as any);
                      setIsNotifOpen(false);
                    }}
                    className={`p-3 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
                      n.read ? 'bg-white/5 border-white/5 opacity-60' : 'bg-white/10 border-[#A40001]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[#A40001] font-bold text-[11px]">
                      <span>{n.title}</span>
                      <span className="text-[9px] text-white/40">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-white/80 mt-1">{n.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* PROFILE DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span className="text-xs font-mono font-bold text-white hidden sm:inline">{client.companyName}</span>
            <img src={client.avatar} className="w-7 h-7 rounded-lg object-cover border border-[#A40001]" />
            <ChevronDown className="w-3.5 h-3.5 text-white/60" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 p-2 rounded-2xl bg-[#262626]/98 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-1 z-50">
              <div className="p-3 border-b border-white/10 text-xs font-mono">
                <div className="font-bold text-white">{client.companyName}</div>
                <div className="text-[10px] text-white/50 mt-0.5">{client.email}</div>
              </div>

              <button
                onClick={() => {
                  alert('Müşteri Profil Ayarları');
                  setIsProfileOpen(false);
                }}
                className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left text-xs font-mono text-white/80 hover:text-white transition-colors flex items-center gap-2.5"
              >
                <User className="w-4 h-4 text-[#A40001]" />
                <span>Müşteri Profili</span>
              </button>

              <button
                onClick={() => {
                  alert('Firma Bilgileri & Fatura Adresi');
                  setIsProfileOpen(false);
                }}
                className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left text-xs font-mono text-white/80 hover:text-white transition-colors flex items-center gap-2.5"
              >
                <Building2 className="w-4 h-4 text-[#A40001]" />
                <span>Firma Bilgileri</span>
              </button>

              <button
                onClick={() => {
                  alert('Bildirim Ayarları');
                  setIsProfileOpen(false);
                }}
                className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left text-xs font-mono text-white/80 hover:text-white transition-colors flex items-center gap-2.5"
              >
                <Settings className="w-4 h-4 text-[#A40001]" />
                <span>Bildirim Ayarları</span>
              </button>

              <div className="pt-1 border-t border-white/10">
                <button
                  onClick={handleLogout}
                  className="w-full p-2.5 rounded-xl hover:bg-red-500/20 text-left text-xs font-mono text-red-400 transition-colors flex items-center gap-2.5"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Çıkış Yap</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}
