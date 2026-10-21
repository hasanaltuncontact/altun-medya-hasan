'use client';

import React from 'react';
import { CheckCircle2, Info, AlertTriangle, AlertCircle, X } from 'lucide-react';
import { usePortal } from '../PortalContext';

export default function ToastContainer() {
  const { toasts, removeToast } = usePortal();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2 pointer-events-none select-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto p-4 rounded-2xl bg-[#0F0F0F]/95 backdrop-blur-2xl border border-[#A40001]/40 text-white font-mono text-xs shadow-2xl flex items-center justify-between gap-4 max-w-md animate-fadeIn"
        >
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#A40001] shrink-0" />
            <span className="leading-snug">{t.message}</span>
          </div>

          <button
            onClick={() => removeToast(t.id)}
            className="text-white/40 hover:text-white shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
