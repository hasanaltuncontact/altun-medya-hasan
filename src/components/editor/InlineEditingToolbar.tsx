'use client';

import React from 'react';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Type, Palette, Sliders, Check, X 
} from 'lucide-react';
import { useEditor } from './EditorContext';

export default function InlineEditingToolbar({ 
  position, 
  onClose 
}: { 
  position: { top: number; left: number }; 
  onClose: () => void;
}) {
  const { selectedElementId, pageSchema, updateElementStyle, viewport } = useEditor();

  if (!selectedElementId) return null;

  // Find selected element
  let selectedEl: any = null;
  for (const sec of pageSchema.sections) {
    const found = sec.elements.find((el) => el.id === selectedElementId);
    if (found) {
      selectedEl = found;
      break;
    }
  }

  if (!selectedEl || (selectedEl.type !== 'heading' && selectedEl.type !== 'text')) return null;

  const currentStyles = selectedEl.styles[viewport] || selectedEl.styles.desktop || {};

  const handleToggleFontWeight = () => {
    const isBold = currentStyles.fontWeight === '800' || currentStyles.fontWeight === '900' || currentStyles.fontWeight === 'bold';
    updateElementStyle(selectedElementId, { fontWeight: isBold ? '400' : '800' });
  };

  const handleAlign = (align: 'left' | 'center' | 'right' | 'justify') => {
    updateElementStyle(selectedElementId, { textAlign: align });
  };

  const handleFontSizeChange = (delta: number) => {
    const currentPx = parseInt(currentStyles.fontSize || '16', 10);
    const nextPx = Math.max(10, Math.min(120, currentPx + delta));
    updateElementStyle(selectedElementId, { fontSize: `${nextPx}px` });
  };

  const handleColorChange = (colorHex: string) => {
    updateElementStyle(selectedElementId, { color: colorHex });
  };

  return (
    <div 
      style={{ top: Math.max(10, position.top - 55), left: position.left }}
      className="fixed z-50 transform -translate-x-1/2 bg-[#090909]/95 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl p-1.5 flex items-center gap-1.5 text-white selection:bg-[#C8FF00] selection:text-black animate-in fade-in zoom-in-95 duration-150"
    >
      {/* BOLD */}
      <button
        onClick={handleToggleFontWeight}
        className={`p-2 rounded-xl text-xs font-bold transition-all ${
          currentStyles.fontWeight === '800' || currentStyles.fontWeight === '900'
            ? 'bg-[#C8FF00] text-black shadow-md'
            : 'hover:bg-white/10 text-white/80'
        }`}
        title="Kalın (Bold)"
      >
        <Bold className="w-4 h-4" />
      </button>

      {/* ALIGNMENT */}
      <div className="flex items-center bg-white/5 rounded-xl border border-white/10 p-0.5">
        <button
          onClick={() => handleAlign('left')}
          className={`p-1.5 rounded-lg transition-all ${
            currentStyles.textAlign === 'left' || !currentStyles.textAlign ? 'bg-[#C8FF00] text-black' : 'text-white/60 hover:text-white'
          }`}
          title="Sola Hizala"
        >
          <AlignLeft className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => handleAlign('center')}
          className={`p-1.5 rounded-lg transition-all ${
            currentStyles.textAlign === 'center' ? 'bg-[#C8FF00] text-black' : 'text-white/60 hover:text-white'
          }`}
          title="Ortala"
        >
          <AlignCenter className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => handleAlign('right')}
          className={`p-1.5 rounded-lg transition-all ${
            currentStyles.textAlign === 'right' ? 'bg-[#C8FF00] text-black' : 'text-white/60 hover:text-white'
          }`}
          title="Sağa Hizala"
        >
          <AlignRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* FONT SIZE STEPPER */}
      <div className="flex items-center gap-1 bg-white/5 rounded-xl border border-white/10 px-2 py-1 font-mono text-xs">
        <button
          onClick={() => handleFontSizeChange(-2)}
          className="text-white/60 hover:text-white font-bold px-1"
          title="Yazı Boyutunu Küçült"
        >
          -
        </button>

        <span className="font-bold text-[#C8FF00] min-w-[28px] text-center">
          {currentStyles.fontSize || '16px'}
        </span>

        <button
          onClick={() => handleFontSizeChange(2)}
          className="text-white/60 hover:text-white font-bold px-1"
          title="Yazı Boyutunu Büyüt"
        >
          +
        </button>
      </div>

      {/* COLOR PRESETS */}
      <div className="flex items-center gap-1 border-l border-white/10 pl-1.5">
        {['#FFFFFF', '#C8FF00', '#A1A1AA', '#000000', '#FF3B30'].map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            style={{ backgroundColor: color }}
            className={`w-5 h-5 rounded-full border transition-all ${
              currentStyles.color === color ? 'border-white scale-125 ring-2 ring-[#C8FF00]' : 'border-white/20 hover:scale-110'
            }`}
            title={`Renk: ${color}`}
          />
        ))}
      </div>

      <button
        onClick={onClose}
        className="p-1.5 rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-all ml-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
