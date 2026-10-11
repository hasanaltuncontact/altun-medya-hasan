'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Activity } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function AnalyticsView() {
  const { performanceKPI } = usePortal();
  const [selectedPeriod, setSelectedPeriod] = useState<'7 Gün' | '30 Gün' | '90 Gün'>('30 Gün');

  return (
    <div className="space-y-8 animate-fadeIn font-mono text-xs">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-heading">
            Sosyal Medya &amp; Ads Performans Analitiği
          </h1>
          <p className="text-xs text-white/60">
            Didim Palace markasının Meta Ads, Instagram ve organik erişim veri grafikleri.
          </p>
        </div>

        {/* TIMEFRAME FILTER */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
          {(['7 Gün', '30 Gün', '90 Gün'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPeriod(p)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedPeriod === p ? 'bg-[#B33A06] text-white font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* 5 KPI METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
          <div className="text-[10px] text-white/50 font-bold uppercase">ERİŞİM</div>
          <div className="text-2xl font-black text-white font-heading">{performanceKPI.reach.value}</div>
          <div className="text-[10px] text-[#B33A06] font-bold">{performanceKPI.reach.growth} bu dönem</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
          <div className="text-[10px] text-white/50 font-bold uppercase">GÖSTERİM</div>
          <div className="text-2xl font-black text-white font-heading">{performanceKPI.impressions.value}</div>
          <div className="text-[10px] text-[#B33A06] font-bold">{performanceKPI.impressions.growth} bu dönem</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
          <div className="text-[10px] text-white/50 font-bold uppercase">ETKİLEŞİM</div>
          <div className="text-2xl font-black text-white font-heading">{performanceKPI.engagement.value}</div>
          <div className="text-[10px] text-[#B33A06] font-bold">{performanceKPI.engagement.growth} bu dönem</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
          <div className="text-[10px] text-white/50 font-bold uppercase">TAKİPÇİ</div>
          <div className="text-2xl font-black text-white font-heading">{performanceKPI.followers.value}</div>
          <div className="text-[10px] text-[#B33A06] font-bold">{performanceKPI.followers.growth} bu dönem</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
          <div className="text-[10px] text-white/50 font-bold uppercase">PROFİL ZİYARETİ</div>
          <div className="text-2xl font-black text-white font-heading">{performanceKPI.profileVisits.value}</div>
          <div className="text-[10px] text-[#B33A06] font-bold">{performanceKPI.profileVisits.growth} bu dönem</div>
        </div>
      </div>

      {/* CHART CONTAINER */}
      <div className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-lg font-bold text-white font-heading">Haftalık Organik Büyüme &amp; Etkileşim Trendi</h2>
          <div className="flex items-center gap-4 text-[10px]">
            <span className="flex items-center gap-1.5 text-white/70"><span className="w-2.5 h-2.5 rounded-full bg-[#B33A06]" /> Organik Erişim</span>
            <span className="flex items-center gap-1.5 text-white/70"><span className="w-2.5 h-2.5 rounded-full bg-white/40" /> Etkileşim</span>
          </div>
        </div>

        {/* SVG BAR CHART */}
        <div className="h-64 flex items-end justify-between gap-6 pt-6 px-4">
          {performanceKPI.chartData.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full flex items-end justify-center gap-2 h-full">
                <div
                  className="w-1/2 bg-[#B33A06] rounded-t-xl transition-all duration-500 group-hover:bg-[#C84408]"
                  style={{ height: `${(d.reach / 15000) * 100}%` }}
                />
                <div
                  className="w-1/2 bg-white/30 rounded-t-xl transition-all duration-500 group-hover:bg-white/50"
                  style={{ height: `${(d.engagement / 15000) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-white/60 font-bold">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
