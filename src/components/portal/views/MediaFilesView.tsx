'use client';

import React, { useState } from 'react';
import { 
  Film, Image as ImageIcon, FileText, Download, Eye, Share2, 
  Grid, List, CheckCircle2, Lock, Sparkles, Filter 
} from 'lucide-react';
import { usePortal } from '../PortalContext';
import { MediaAsset } from '@/data/portal-database';

export default function MediaFilesView() {
  const { mediaAssets, setVideoPreviewMedia, addToast } = usePortal();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['Tümü', 'Videolar', 'Fotoğraflar', 'Tasarımlar', 'Logolar', 'Dokümanlar', 'Final Dosyalar'];

  const filteredAssets = mediaAssets.filter((asset) => {
    if (selectedCategory === 'Tümü') return true;
    if (selectedCategory === 'Videolar') return asset.type === 'video';
    if (selectedCategory === 'Fotoğraflar') return asset.type === 'photo';
    if (selectedCategory === 'Tasarımlar') return asset.type === 'design';
    if (selectedCategory === 'Logolar') return asset.type === 'logo';
    if (selectedCategory === 'Dokümanlar') return asset.type === 'document';
    if (selectedCategory === 'Final Dosyalar') return asset.status === 'Onaylandı';
    return true;
  });

  const handleShare = (asset: MediaAsset) => {
    navigator.clipboard?.writeText(window.location.href);
    addToast(`🔗 "${asset.title}" indirme bağlantısı kopyalandı!`, 'info');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">
            Markanıza Özel Medya &amp; Dosya Kütüphanesi
          </h1>
          <p className="text-xs font-mono text-white/60">
            Didim Palace Resort markası için üretilmiş yüksek çözünürlüklü tüm 4K video, kurgu ve tasarımlar.
          </p>
        </div>

        {/* VIEW MODE TOGGLE */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto font-mono text-xs">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              viewMode === 'grid' ? 'bg-[#B33A06] text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              viewMode === 'list' ? 'bg-[#B33A06] text-white font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Liste</span>
          </button>
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#B33A06] text-white font-extrabold shadow-[0_0_15px_rgba(179,58,6,0.3)]'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID VIEW */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="rounded-3xl bg-[#0D0D0D] border border-white/10 overflow-hidden hover:border-[#B33A06]/40 transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 bg-black">
                <img src={asset.previewUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#B33A06] font-bold border border-white/10">
                  {asset.category}
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#B33A06] text-white text-[10px] font-mono font-bold">
                  {asset.currentVersion}
                </div>

                {asset.isLocked && (
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/90 text-[9px] font-mono text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Client Only Safe</span>
                  </div>
                )}
              </div>

              <div className="p-5 space-y-4 font-mono">
                <div>
                  <h3 className="text-sm font-bold text-white font-heading leading-snug">{asset.title}</h3>
                  <div className="flex items-center justify-between text-[11px] text-white/50 mt-2">
                    <span>Boyut: {asset.fileSize}</span>
                    <span>Tarih: {asset.uploadDate}</span>
                  </div>
                </div>

                {/* FILE VERSION HISTORY MINI DRAWER */}
                {asset.versions && asset.versions.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-[10px]">
                    <div className="text-white/40 uppercase font-bold">Versiyon Geçmişi ({asset.versions.length})</div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {asset.versions.map((v, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 rounded font-bold ${
                            v.isFinal
                              ? 'bg-[#B33A06] text-white'
                              : 'bg-white/10 text-white/70'
                          }`}
                        >
                          {v.version}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* ACTIONS */}
                <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                  {asset.type === 'video' && (
                    <button
                      onClick={() => setVideoPreviewMedia(asset)}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Önizle"
                    >
                      <Eye className="w-4 h-4 text-[#B33A06]" />
                    </button>
                  )}

                  <a
                    href={asset.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-[#B33A06] text-white hover:bg-[#C84408] text-xs font-extrabold transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>[ İndir ]</span>
                  </a>

                  <button
                    onClick={() => handleShare(asset)}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Paylaş"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* LIST VIEW */
        <div className="rounded-3xl bg-[#0D0D0D] border border-white/10 overflow-hidden font-mono text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[11px] text-[#8E8E93] uppercase bg-white/5">
                <th className="p-4">Dosya Adı</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Versiyon</th>
                <th className="p-4">Boyut</th>
                <th className="p-4">Tarih</th>
                <th className="p-4 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center gap-3">
                    <img src={asset.previewUrl} className="w-10 h-10 rounded-lg object-cover" />
                    <span>{asset.title}</span>
                  </td>
                  <td className="p-4 text-white/60">{asset.category}</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-[#B33A06]/10 text-[#B33A06] font-bold text-[10px]">{asset.currentVersion}</span></td>
                  <td className="p-4 text-white/60">{asset.fileSize}</td>
                  <td className="p-4 text-white/40">{asset.uploadDate}</td>
                  <td className="p-4 text-right">
                    <a
                      href={asset.downloadUrl}
                      download
                      className="px-3 py-1.5 rounded-lg bg-[#B33A06] text-white font-extrabold text-[11px] inline-flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>İndir</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
