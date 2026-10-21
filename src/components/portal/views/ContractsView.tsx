'use client';

import React from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function ContractsView() {
  const { contracts, addToast } = usePortal();

  return (
    <div className="space-y-8 animate-fadeIn font-mono text-xs">
      
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-heading">
          Sözleşmeler &amp; Hukuki Belgeler
        </h1>
        <p className="text-xs text-white/60 mt-1">
          Didim Palace Resort markasına ait aktif hizmet sözleşmeleri, teklifler, KVKK ve NDA gizlilik belgeleri.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contracts.map((item) => (
          <div
            key={item.id}
            className="p-7 rounded-3xl bg-[#262626] border border-white/10 space-y-4 hover:border-[#A40001]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#A40001]/10 text-[#A40001] font-bold border border-[#A40001]/30 text-[10px]">
                  {item.type}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 text-[10px]">
                  {item.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-heading leading-snug">{item.title}</h3>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 text-white/60 text-[11px]">
                <div>Versiyon: <span className="text-white font-bold">{item.version}</span></div>
                <div>Başlangıç: <span className="text-white">{item.startDate}</span></div>
                <div>Bitiş: <span className="text-white">{item.endDate}</span></div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-white/40">Boyut: {item.fileSize}</span>
              <a
                href={item.fileUrl}
                download
                onClick={() => addToast(`📄 "${item.title}" indirildi.`, 'info')}
                className="px-4 py-2 rounded-xl bg-[#A40001] text-white font-extrabold text-xs inline-flex items-center gap-1.5 hover:bg-[#A40001]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>İmzalı PDF İndir</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
