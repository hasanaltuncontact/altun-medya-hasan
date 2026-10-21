'use client';

import React from 'react';
import { Palette, Download, FileText, Image as ImageIcon, Sparkles, Copy, Check } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function BrandHubView() {
  const { brandAssets, addToast } = usePortal();

  const handleCopyColor = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    addToast(`🎨 Renk kodu "${hex}" kopyalandı!`, 'info');
  };

  return (
    <div className="space-y-8 animate-fadeIn font-mono text-xs">
      
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-heading">
          Marka Merkezi (Brand Hub)
        </h1>
        <p className="text-xs text-white/60 mt-1">
          Didim Palace Resort kurumsal kimliği, logonun orijinal vektör dosyaları, rehberleri ve renk paleti.
        </p>
      </div>

      {/* COLOR PALETTE BOX */}
      <div className="p-7 rounded-3xl bg-[#262626] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white font-heading">Marka Renk Paleti (Hex &amp; RGB)</h2>
          <span className="text-[10px] text-white/40">Koda tıklayarak kopyalayabilirsiniz</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Koyu Siyah (Primary)', hex: '#262626', rgb: 'RGB 5, 5, 5' },
            { name: 'Elektrik Neon (Accent)', hex: '#A40001', rgb: 'RGB 179, 58, 6' },
            { name: 'Krem Bej (Secondary)', hex: '#F6F6F6', rgb: 'RGB 217, 208, 193' },
            { name: 'Saf Beyaz (Text)', hex: '#FFFFFF', rgb: 'RGB 255, 255, 255' },
          ].map((col) => (
            <div
              key={col.hex}
              onClick={() => handleCopyColor(col.hex)}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A40001]/50 transition-all cursor-pointer space-y-2 group"
            >
              <div
                className="w-full h-12 rounded-xl border border-white/10 shadow-md group-hover:scale-105 transition-transform"
                style={{ backgroundColor: col.hex }}
              />
              <div>
                <div className="text-xs font-bold text-white font-heading">{col.name}</div>
                <div className="text-[11px] text-[#A40001] font-bold mt-0.5">{col.hex}</div>
                <div className="text-[9px] text-white/40">{col.rgb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BRAND ASSETS GRID */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-white font-heading">Kurumsal Kimlik &amp; Logo Paketleri</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brandAssets.map((asset) => (
            <div key={asset.id} className="p-6 rounded-3xl bg-[#262626] border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#A40001]/40 transition-all">
              <div className="flex items-start gap-4">
                <img src={asset.previewUrl} className="w-20 h-20 rounded-2xl object-cover border border-white/10 shrink-0" />
                <div className="space-y-1">
                  <span className="px-2 py-0.5 rounded bg-[#A40001]/10 text-[#A40001] font-bold text-[10px]">
                    {asset.format}
                  </span>
                  <h3 className="text-sm font-bold text-white font-heading">{asset.title}</h3>
                  <div className="text-[11px] text-white/50">{asset.metaInfo} • {asset.fileSize}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-white/40">🔒 Lisanslı Marka Varlığı</span>
                <a
                  href={asset.fileUrl}
                  download
                  className="px-4 py-2 rounded-xl bg-[#A40001] text-white font-extrabold text-xs inline-flex items-center gap-1.5 hover:bg-[#A40001] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>İndir ({asset.fileSize})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
