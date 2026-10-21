'use client';

import React, { useState } from 'react';
import { Receipt, FileText, Download, CheckCircle2, AlertCircle, Clock, Eye, X } from 'lucide-react';
import { usePortal } from '../PortalContext';
import { Invoice } from '@/data/portal-database';

export default function FinancesView() {
  const { invoices } = usePortal();
  const [activeInvoiceModal, setActiveInvoiceModal] = useState<Invoice | null>(null);

  const totalContract = 132000;
  const paidTotal = invoices.filter((i) => i.status === 'Ödendi').reduce((a, b) => a + b.totalAmount, 0);
  const pendingTotal = invoices.filter((i) => i.status === 'Bekliyor').reduce((a, b) => a + b.totalAmount, 0);

  return (
    <div className="space-y-8 animate-fadeIn font-mono text-xs">
      
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-heading">
          Finans, Fatura &amp; Hesap Özeti
        </h1>
        <p className="text-xs text-white/60 mt-1">
          Didim Palace markasına kesilmiş resmi e-faturalar, hizmet tutarları ve ödeme takvimi.
        </p>
      </div>

      {/* 4 FINANCIAL KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-3xl bg-[#262626] border border-white/10 space-y-2">
          <div className="text-[10px] font-bold text-white/50 uppercase">TOPLAM SÖZLEŞME</div>
          <div className="text-3xl font-black text-white font-heading">₺{totalContract.toLocaleString('tr-TR')}</div>
          <div className="text-[10px] text-white/40">2026 Dönemi Toplam Hakediş</div>
        </div>

        <div className="p-6 rounded-3xl bg-[#262626] border border-white/10 space-y-2">
          <div className="text-[10px] font-bold text-emerald-400 uppercase">ÖDENEN TUTAR</div>
          <div className="text-3xl font-black text-emerald-400 font-heading">₺{paidTotal.toLocaleString('tr-TR')}</div>
          <div className="text-[10px] text-emerald-400/80">✓ Tahsilatı Tamamlandı</div>
        </div>

        <div className="p-6 rounded-3xl bg-[#262626] border border-white/10 space-y-2">
          <div className="text-[10px] font-bold text-amber-400 uppercase">BEKLEYEN TUTAR</div>
          <div className="text-3xl font-black text-amber-400 font-heading">₺{pendingTotal.toLocaleString('tr-TR')}</div>
          <div className="text-[10px] text-amber-400/80">Açık Fatura Bakiye</div>
        </div>

        <div className="p-6 rounded-3xl bg-[#262626] border border-[#A40001]/40 space-y-2">
          <div className="text-[10px] font-bold text-[#A40001] uppercase">SON ÖDEME TARİHİ</div>
          <div className="text-2xl font-black text-white font-heading">15 EKİM 2026</div>
          <div className="text-[10px] text-[#A40001] font-bold">● Önümüzdeki Vade</div>
        </div>
      </div>

      {/* INVOICES TABLE */}
      <div className="p-7 rounded-3xl bg-[#262626] border border-white/10 space-y-4">
        <h2 className="text-base font-bold text-white font-heading">Fatura Geçmişi &amp; Detaylar</h2>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[11px] text-[#8E8E93] uppercase bg-white/5">
                <th className="p-4">Fatura No</th>
                <th className="p-4">Hizmet Açıklaması</th>
                <th className="p-4">Düzenleme Tarihi</th>
                <th className="p-4">Son Ödeme</th>
                <th className="p-4">Toplam Tutar (KDV Dahil)</th>
                <th className="p-4">Durum</th>
                <th className="p-4 text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-[#A40001]">{inv.invoiceNo}</td>
                  <td className="p-4 text-white font-medium max-w-xs">{inv.description}</td>
                  <td className="p-4 text-white/60">{inv.date}</td>
                  <td className="p-4 text-white/60">{inv.dueDate}</td>
                  <td className="p-4 font-bold text-white">₺{inv.totalAmount.toLocaleString('tr-TR')}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        inv.status === 'Ödendi'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setActiveInvoiceModal(inv)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors inline-flex items-center gap-1 font-bold"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#A40001]" />
                      <span>İncele</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PDF PREVIEW MODAL */}
      {activeInvoiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-5 animate-fadeIn">
          <div className="w-full max-w-lg p-8 rounded-3xl bg-[#262626] border border-white/15 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setActiveInvoiceModal(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-white/10 pb-4">
              <div className="text-[#A40001] font-bold text-sm">{activeInvoiceModal.invoiceNo}</div>
              <h2 className="text-xl font-bold text-white font-heading mt-1">Resmi Fatura Detayı</h2>
            </div>

            <div className="space-y-3 text-xs text-white/80">
              <div>Hizmet: <span className="text-white font-bold">{activeInvoiceModal.description}</span></div>
              <div>Fatura Tarihi: <span className="text-white">{activeInvoiceModal.date}</span></div>
              <div>Vade Tarihi: <span className="text-white">{activeInvoiceModal.dueDate}</span></div>
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex justify-between"><span>Net Hizmet Tutarı:</span><span>₺{activeInvoiceModal.netAmount.toLocaleString('tr-TR')}</span></div>
                <div className="flex justify-between text-white/60"><span>KDV (%20):</span><span>₺{activeInvoiceModal.taxAmount.toLocaleString('tr-TR')}</span></div>
                <div className="flex justify-between text-base font-bold text-[#A40001] pt-2 border-t border-white/10">
                  <span>Toplam Ödenecek Tutar:</span>
                  <span>₺{activeInvoiceModal.totalAmount.toLocaleString('tr-TR')}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Fatura ${activeInvoiceModal.invoiceNo} PDF dosyası indiriliyor...`);
                setActiveInvoiceModal(null);
              }}
              className="w-full py-3 rounded-xl bg-[#A40001] text-white font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#A40001]"
            >
              <Download className="w-4 h-4" />
              <span>Resmi Fatura PDF İndir</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
