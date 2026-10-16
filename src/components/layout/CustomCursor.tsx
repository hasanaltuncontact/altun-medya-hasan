'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      )) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`pointer-events-none fixed z-[99999] select-none -translate-x-1/2 -translate-y-1/2 rounded-full border flex items-center justify-center text-[9px] font-extrabold uppercase tracking-wider transition-all duration-150 ${
        isHovered
          ? 'w-10 h-10 bg-[#B33A06] border-[#B33A06] text-black scale-110 shadow-[0_0_20px_rgba(179, 58, 6,0.6)]'
          : 'w-3.5 h-3.5 bg-white/90 border-white/20 text-black'
      }`}
    >
      {isHovered && <span className="text-[10px] font-mono font-bold">+</span>}
    </div>
  );
}
