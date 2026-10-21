'use client';

import React, { useState } from 'react';
import { 
  CheckSquare, Play, Check, RotateCcw, MessageSquare, 
  Clock, ShieldCheck, Film, AlertCircle, History, Sparkles 
} from 'lucide-react';
import { usePortal } from '../PortalContext';
import { ApprovalItem } from '@/data/portal-database';

export default function ApprovalCenterView() {
  const { 
    approvals, approveMediaItem, setActiveApprovalTarget, 
    setIsRevisionModalOpen, setVideoPreviewMedia 
  } = usePortal();

  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'revision'>('pending');

  const filteredApprovals = approvals.filter((item) => {
    if (activeTab === 'pending') return item.status === 'Onay Bekliyor';
    if (activeTab === 'approved') return item.status === 'Onaylandı';
    if (activeTab === 'revision') return item.status === 'Revizyon İstendi';
    return true;
  });

  const handleOpenRevisionModal = (item: ApprovalItem) => {
    setActiveApprovalTarget(item);
    setIsRevisionModalOpen(true);
  };

  const handleWatchMedia = (item: ApprovalItem) => {
    setVideoPreviewMedia(item);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* MODULE HEADER */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#262626] via-[#1E1E1E] to-[#262626] border border-white/15 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A40001]/[0.06] rounded-full blur-[140px] pointer-events-none" />

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A40001]/10 border border-[#A40001]/30 text-xs font-mono text-[#A40001] font-bold">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>FİGMA &amp; FRAME.IO STANDARTLARINDA ONAY PORTALI</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white font-heading">
            Onay Merkezi &amp; Revizyon Takibi
          </h1>
          <p className="text-sm text-white/70 max-w-xl font-normal leading-relaxed">
            Stüdyomuz tarafından üretilen videoları ve görselleri zaman damgalı (timestamp) notlar ekleyerek tek tıkla onaylayabilir veya revizyon isteyebilirsiniz.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#262626] border border-white/10 text-right font-mono text-xs relative z-10 shrink-0">
          <div className="text-white/40">Toplam Revizyon Hakkı:</div>
          <div className="text-[#A40001] font-bold text-base mt-0.5">3 Ücretsiz Revizyon</div>
          <div className="text-[10px] text-white/50 mt-1">Kullanılan: 1 / 3</div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex border-b border-white/15 space-x-6 text-sm font-semibold overflow-x-auto scrollbar-none font-mono">
        <button
          onClick={() => setActiveTab('pending')}
          className={`pb-4 transition-colors relative flex items-center gap-2 ${
            activeTab === 'pending' ? 'text-[#A40001] font-bold' : 'text-white/60 hover:text-white'
          }`}
        >
          <span>Onay Bekleyenler ({approvals.filter((a) => a.status === 'Onay Bekliyor').length})</span>
          {activeTab === 'pending' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A40001]" />}
        </button>

        <button
          onClick={() => setActiveTab('approved')}
          className={`pb-4 transition-colors relative flex items-center gap-2 ${
            activeTab === 'approved' ? 'text-[#A40001] font-bold' : 'text-white/60 hover:text-white'
          }`}
        >
          <span>Onaylananlar ({approvals.filter((a) => a.status === 'Onaylandı').length})</span>
          {activeTab === 'approved' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A40001]" />}
        </button>

        <button
          onClick={() => setActiveTab('revision')}
          className={`pb-4 transition-colors relative flex items-center gap-2 ${
            activeTab === 'revision' ? 'text-[#A40001] font-bold' : 'text-white/60 hover:text-white'
          }`}
        >
          <span>Revizyondakiler ({approvals.filter((a) => a.status === 'Revizyon İstendi').length})</span>
          {activeTab === 'revision' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A40001]" />}
        </button>
      </div>

      {/* APPROVAL ITEMS LIST */}
      {filteredApprovals.length === 0 ? (
        <div className="p-12 rounded-3xl bg-[#262626] border border-white/10 text-center space-y-3 font-mono">
          <CheckSquare className="w-10 h-10 text-white/20 mx-auto" />
          <div className="text-base font-bold text-white">Bu kategoride onay kaydı bulunmuyor.</div>
          <div className="text-xs text-white/50">Stüdyo ekibimiz yeni kurgu veya görseller yüklediğinde burada listelenecektir.</div>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredApprovals.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#262626] border border-white/10 hover:border-[#A40001]/40 transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#A40001]/10 border border-[#A40001]/30 text-[10px] font-mono text-[#A40001] font-bold">
                      {item.version}
                    </span>
                    <span className="text-xs font-mono text-white/50">● {item.projectTitle}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mt-1">{item.title}</h3>
                  <div className="text-xs font-mono text-white/40 mt-0.5">Yükleme: {item.uploadDate}</div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/60">Revizyon Hakkı:</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#A40001] font-bold">
                    {item.revisionQuotaUsed} / {item.revisionQuotaTotal} Kullanıldı
                  </span>
                </div>
              </div>

              {/* MEDIA PREVIEW & TIMESTAMP COMMENTS AREA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* PREVIEW CONTAINER */}
                <div className="lg:col-span-6 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-black border border-white/10 group">
                  <img src={item.thumbnailUrl} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                  
                  <button
                    onClick={() => handleWatchMedia(item)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#A40001] text-white flex items-center justify-center shadow-[0_0_30px_rgba(179,58,6,0.6)] group-hover:scale-110 transition-transform active:scale-95"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>

                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-xs font-mono text-white border border-white/10">
                    [ Videoyu 4K Oynat &amp; İncele ]
                  </div>
                </div>

                {/* TIMESTAMPS & COMMENTS HISTORY */}
                <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/60 font-bold border-b border-white/10 pb-2">
                    <span>Zaman Damgalı Notlar (Timestamp)</span>
                    <span className="text-[#A40001]">{item.comments.length} Yorum</span>
                  </div>

                  {item.comments.length === 0 ? (
                    <div className="p-4 rounded-xl bg-white/5 text-white/40 text-center font-mono">
                      Henüz bu versiyon için eklenmiş timestamp yorumu yok.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                      {item.comments.map((c) => (
                        <div key={c.id} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded bg-[#A40001] text-white font-bold text-[10px]">
                              {c.timestamp}
                            </span>
                            <span className="text-[10px] text-white/40">{c.date}</span>
                          </div>
                          <p className="text-white/80 text-[11px] font-sans font-medium">{c.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ACTION BUTTONS BAR */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => handleWatchMedia(item)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-[#A40001]" />
                  <span>[ Tam Ekran İzle &amp; Yorum Yap ]</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleOpenRevisionModal(item)}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono text-xs font-bold transition-colors flex items-center gap-2 active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>[ ↻ REVİZYON İSTE ]</span>
                  </button>

                  <button
                    onClick={() => approveMediaItem(item.id)}
                    className="px-6 py-2.5 rounded-xl bg-[#A40001] text-white hover:bg-[#A40001] font-mono text-xs font-extrabold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(179,58,6,0.3)] active:scale-95"
                  >
                    <Check className="w-4 h-4" />
                    <span>[ ✓ ONAYLA &amp; YAYINLA ]</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
