'use client';

import React, { useState } from 'react';
import { 
  FolderKanban, ArrowLeft, CheckCircle2, Clock, 
  ArrowRight, Users, Film, FileText, CheckSquare, MessageSquare, DollarSign, Plus 
} from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function ProjectsView() {
  const { 
    projects, selectedProjectId, setSelectedProjectId, 
    setActiveSection, setIsNewProjectModalOpen, mediaAssets, approvals, invoices, chatMessages 
  } = usePortal();

  const [detailTab, setDetailTab] = useState<'overview' | 'workflow' | 'files' | 'approvals' | 'messages' | 'finance'>('overview');

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  // PROJECT DETAIL WORKSPACE VIEW
  if (selectedProject) {
    const projectFiles = mediaAssets.filter((m) => m.projectId === selectedProject.id || true);
    const projectApprovals = approvals.filter((a) => a.projectId === selectedProject.id || true);

    return (
      <div className="space-y-8 animate-fadeIn">
        {/* BACK BUTTON */}
        <button
          onClick={() => setSelectedProjectId(null)}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 text-[#C8FF00]" />
          <span>← Tüm Projelere Dön</span>
        </button>

        {/* WORKSPACE HEADER */}
        <div className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-xs font-mono text-[#C8FF00] font-bold mb-2">
                <span>{selectedProject.category}</span>
              </div>
              <h1 className="text-3xl font-extrabold text-white font-heading">{selectedProject.title}</h1>
              <p className="text-xs font-mono text-white/60 mt-1">{selectedProject.description}</p>
            </div>

            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-right shrink-0">
              <div className="text-white/40">Durum:</div>
              <div className="text-[#C8FF00] font-bold text-sm">● {selectedProject.status}</div>
              <div className="text-[10px] text-white/50 mt-1">Son Tarih: {selectedProject.dueDate}</div>
            </div>
          </div>

          {/* PROJECT WORKSPACE TABS */}
          <div className="flex border-b border-white/10 space-x-6 text-xs font-mono font-semibold overflow-x-auto scrollbar-none pt-2">
            {[
              { id: 'overview', label: 'Genel Bakış', icon: FolderKanban },
              { id: 'workflow', label: 'İş Akışı (Timeline)', icon: Clock },
              { id: 'files', label: 'Dosyalar & Medya', icon: Film },
              { id: 'approvals', label: 'Onaylar', icon: CheckSquare },
              { id: 'messages', label: 'Mesajlar', icon: MessageSquare },
              { id: 'finance', label: 'Finans', icon: DollarSign },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = detailTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setDetailTab(tab.id as any)}
                  className={`pb-3 flex items-center gap-2 transition-colors relative ${
                    isActive ? 'text-[#C8FF00] font-bold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C8FF00]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAIL TAB 1: WORKFLOW TIMELINE */}
        {detailTab === 'workflow' && (
          <div className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white font-heading">Süreç &amp; Kronolojik İş Akışı</h2>

            <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10 pl-10">
              {selectedProject.workflow.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0D0D0D] border-2 border-white/20 flex items-center justify-center">
                    {step.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : step.status === 'active' ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    )}
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white font-heading">{step.name}</div>
                    <div className="text-[10px] font-mono text-white/50">{step.date || 'Bekleniyor'}</div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold ${
                      step.status === 'completed'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : step.status === 'active'
                        ? 'bg-[#C8FF00]/20 text-[#C8FF00] border border-[#C8FF00]/40'
                        : 'bg-white/5 text-white/40'
                    }`}
                  >
                    {step.status === 'completed' ? '✓ Tamamlandı' : step.status === 'active' ? '● Aktif Adım' : 'Gelecek Adım'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DETAIL TAB: OVERVIEW */}
        {detailTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading">Proje Bilgileri</h3>
              <p className="text-xs font-mono text-white/70 leading-relaxed">{selectedProject.description}</p>
              
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-white/60">
                <div>Aşama: <span className="text-white font-bold">{selectedProject.status}</span></div>
                <div>Sonraki Adım: <span className="text-[#C8FF00] font-bold">{selectedProject.nextStep}</span></div>
                <div>Hedef Teslim: <span className="text-white font-bold">{selectedProject.dueDate}</span></div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading">Atanan Stüdyo Ekibi</h3>
              <div className="space-y-3">
                {selectedProject.assignedTeam.map((m, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <img src={m.avatar} className="w-10 h-10 rounded-xl object-cover" />
                    <div>
                      <div className="text-xs font-bold text-white font-heading">{m.name}</div>
                      <div className="text-[10px] font-mono text-[#C8FF00]">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DETAIL TAB: FILES */}
        {detailTab === 'files' && (
          <div className="p-6 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Projeye Ait Medya &amp; Tasarımlar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectFiles.map((f) => (
                <div key={f.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <img src={f.previewUrl} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-white font-heading">{f.title}</div>
                    <div className="text-[10px] font-mono text-white/50">{f.category} • {f.fileSize}</div>
                    <a href={f.downloadUrl} download className="text-[10px] font-mono font-bold text-[#C8FF00] underline mt-1 block">İndir ({f.currentVersion})</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    );
  }

  // ALL PROJECTS GRID LIST VIEW
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">Marka Projeleri &amp; Çalışma Alanları</h1>
          <p className="text-xs font-mono text-white/60">Didim Palace için yürütülen tüm aktif ve tamamlanmış dijital projeler.</p>
        </div>

        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider bg-[#C8FF00] text-black rounded-xl hover:bg-[#D4FF28] transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ Yeni Proje Talebi</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-3xl bg-[#0D0D0D] border border-white/10 overflow-hidden hover:border-[#C8FF00]/40 transition-all flex flex-col justify-between group"
          >
            <div className="relative h-44 bg-black">
              <img src={proj.coverImage} className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#C8FF00] font-bold border border-white/10">
                {proj.category}
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#C8FF00] text-black text-[10px] font-mono font-bold">
                ● {proj.status}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white font-heading leading-snug">{proj.title}</h3>
                <p className="text-xs font-mono text-white/60 mt-1 line-clamp-2">{proj.description}</p>
              </div>

              {/* PROGRESS */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-white/60">
                  <span>İlerleme Oranı</span>
                  <span className="text-[#C8FF00] font-bold">%{proj.progress}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#C8FF00] rounded-full transition-all duration-500" style={{ width: `${proj.progress}%` }} />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-2 border-t border-white/10">
                <span>Son Tarih: {proj.dueDate}</span>
                <button
                  onClick={() => setSelectedProjectId(proj.id)}
                  className="text-[#C8FF00] hover:underline font-bold flex items-center gap-1"
                >
                  <span>[ Projeyi Aç ]</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
