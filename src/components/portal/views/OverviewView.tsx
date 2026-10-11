'use client';

import React from 'react';
import { 
  FolderKanban, CheckSquare, Layers, DollarSign, ArrowRight, 
  Clock, AlertCircle, FileText, CheckCircle2, ChevronRight, Sparkles, Plus 
} from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function OverviewView() {
  const { 
    client, projects, actionItems, approvals, invoices, 
    activities, setActiveSection, setSelectedProjectId, setIsNewProjectModalOpen 
  } = usePortal();

  const activeProjects = projects.filter((p) => p.status !== 'Tamamlandı');
  const pendingApprovalsCount = approvals.filter((a) => a.status === 'Onay Bekliyor').length;
  const pendingInvoicesTotal = invoices
    .filter((i) => i.status === 'Bekliyor')
    .reduce((a, b) => a + b.totalAmount, 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* WELCOME BANNER & CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0E0E0E] via-[#121212] to-[#0A0A0A] border border-white/15 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B33A06]/[0.07] rounded-full blur-[140px] pointer-events-none" />

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B33A06]/10 border border-[#B33A06]/30 text-xs font-mono text-[#B33A06] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#B33A06] animate-pulse" />
            <span>ALTUN MEDYA AGENCY OPERATING SYSTEM</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Hoş geldiniz, {client.companyName}
          </h1>
          <p className="text-sm text-white/70 max-w-xl font-normal leading-relaxed">
            Markanız için devam eden tüm 4K prodüksiyon, web yazılım, sosyal medya ve performans çalışmalarınızı buradan yönetebilirsiniz.
          </p>
        </div>

        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] hover:shadow-[0_0_24px_rgba(179, 58, 6,0.4)] transition-all flex items-center gap-2 relative z-10 active:scale-95 shadow-xl"
        >
          <Plus className="w-4 h-4" />
          <span>+ Yeni Proje Başlat</span>
        </button>
      </div>

      {/* 4 MAIN KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* KPI 1 */}
        <div
          onClick={() => setActiveSection('02 Projeler')}
          className="p-6 rounded-3xl bg-[#0B0B0B] border border-white/10 hover:border-[#B33A06]/40 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">AKTİF PROJELER</span>
            <FolderKanban className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-heading">{activeProjects.length}</div>
            <div className="text-[11px] font-mono text-[#8E8E93] mt-1 font-semibold flex items-center gap-1">
              <span>{activeProjects.length} aktif proje</span>
              <span className="text-[#B33A06]">• 1 tanesi bu hafta teslim</span>
            </div>
          </div>
        </div>

        {/* KPI 2 */}
        <div
          onClick={() => setActiveSection('03 Onay Merkezi')}
          className="p-6 rounded-3xl bg-[#0B0B0B] border border-white/10 hover:border-[#B33A06]/40 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">ONAY BEKLEYEN</span>
            <CheckSquare className="w-5 h-5 text-[#B33A06] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#B33A06] font-heading">{pendingApprovalsCount}</div>
            <div className="text-[11px] font-mono text-[#8E8E93] mt-1 font-semibold">
              2 medya/video onayınızı bekliyor
            </div>
          </div>
        </div>

        {/* KPI 3 */}
        <div
          onClick={() => setActiveSection('02 Projeler')}
          className="p-6 rounded-3xl bg-[#0B0B0B] border border-white/10 hover:border-[#B33A06]/40 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">TOPLAM PROJE</span>
            <Layers className="w-5 h-5 text-white/70 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-heading">{projects.length}</div>
            <div className="text-[11px] font-mono text-[#8E8E93] mt-1 font-semibold">
              Tamamlanan &amp; arşiv projeler dahil
            </div>
          </div>
        </div>

        {/* KPI 4 */}
        <div
          onClick={() => setActiveSection('08 Finans & Faturalar')}
          className="p-6 rounded-3xl bg-[#0B0B0B] border border-white/10 hover:border-[#B33A06]/40 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider">ÖDENMEMİŞ TUTAR</span>
            <DollarSign className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-heading">
              ₺{pendingInvoicesTotal.toLocaleString('tr-TR')}
            </div>
            <div className="text-[11px] font-mono text-[#8E8E93] mt-1 font-semibold text-amber-400">
              Son Ödeme: 15 Ekim 2026
            </div>
          </div>
        </div>

      </div>

      {/* SİZDEN BEKLENENLER (HIGH-PRIORITY ACTIONABLE ITEMS) */}
      <div className="p-7 rounded-3xl bg-[#0E0E0E] border border-[#B33A06]/30 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#B33A06] animate-ping" />
            <h2 className="text-xl font-extrabold text-white font-heading uppercase tracking-wide">
              SİZDEN BEKLENENLER ({actionItems.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-white/50">Müşteri Aksiyon Gerektiren Adımlar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actionItems.map((act) => (
            <div
              key={act.id}
              className="p-5 rounded-2xl bg-[#060606] border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#B33A06]/50 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#B33A06] uppercase tracking-wider">
                    ● {act.projectTitle}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">Son Tarih: {act.dueDate}</span>
                </div>
                <h3 className="text-base font-bold text-white font-heading leading-snug">
                  {act.title}
                </h3>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <span className="text-xs font-mono text-white/50">Aksiyon Bekliyor</span>
                <button
                  onClick={() => setActiveSection('03 Onay Merkezi')}
                  className="px-4 py-2 text-xs font-extrabold font-mono bg-[#B33A06] text-white rounded-xl hover:bg-[#C84408] transition-colors flex items-center gap-1.5"
                >
                  <span>[{act.actionLabel}]</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AKTİF PROJELER ÖZETİ */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white font-heading">
            Aktif Çalışmalar &amp; İlerleme Durumu
          </h2>
          <button
            onClick={() => setActiveSection('02 Projeler')}
            className="text-xs font-mono text-[#B33A06] hover:underline flex items-center gap-1 font-bold"
          >
            <span>Tüm Projeleri Gör</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-[#0D0D0D] border border-white/10 overflow-hidden hover:border-[#B33A06]/40 transition-all flex flex-col justify-between group"
            >
              <div className="relative h-40 bg-black">
                <img src={proj.coverImage} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#B33A06] font-bold border border-white/10">
                  {proj.category}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#B33A06] text-white text-[10px] font-mono font-bold">
                  ● {proj.status}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white font-heading leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-white/60 font-mono mt-1 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                {/* PROGRESS BAR */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-white/60">
                    <span>Tamamlanma Oranı</span>
                    <span className="text-[#B33A06] font-bold">%{proj.progress}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#B33A06] rounded-full transition-all duration-500" style={{ width: `${proj.progress}%` }} />
                  </div>
                </div>

                {/* NEXT STEP */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 space-y-0.5">
                  <div className="text-[10px] text-white/40 uppercase">Sonraki Adım:</div>
                  <div className="font-bold text-[#B33A06]">{proj.nextStep}</div>
                </div>

                <button
                  onClick={() => {
                    setSelectedProjectId(proj.id);
                    setActiveSection('02 Projeler');
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span>[ Çalışma Alanını Aç ]</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B33A06]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT ACTIVITY TIMELINE */}
      <div className="p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-lg font-bold text-white font-heading">
            Son Stüdyo &amp; Portal Aktiviteleri
          </h2>
          <span className="text-xs font-mono text-white/50">Canlı Zaman Akışı</span>
        </div>

        <div className="space-y-3">
          {activities.map((act) => (
            <div key={act.id} className="flex items-start gap-4 text-xs font-mono text-white/80 p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[#B33A06] font-bold shrink-0">{act.timestamp}</span>
              <div>
                <span className="font-bold text-white">{act.user}</span>{' '}
                <span className="text-white/70">{act.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
