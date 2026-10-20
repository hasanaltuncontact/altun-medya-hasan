'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ALTUN MEDYA özel imleci
 * - Konum React state yerine doğrudan transform ile güncellenir (requestAnimationFrame):
 *   gecikme / titreme olmaz, her harekette yeniden render yapılmaz.
 * - Hover durumunda içi BOŞ bir halkaya dönüşür; buton ve link yazılarının üstünü kapatmaz,
 *   butonların kendi renk geçişlerini bozmaz.
 * - Dokunmatik cihazlarda hiç render edilmez.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Yalnızca gerçek fare kullanan cihazlarda
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hovering = false;
    let visible = false;
    let raf = 0;

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer');

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        ringX = mouseX;
        ringY = mouseY;
        dotRef.current?.style.setProperty('opacity', '1');
        ringRef.current?.style.setProperty('opacity', '1');
      }
      const next = isInteractive(e.target as Element);
      if (next !== hovering) {
        hovering = next;
        ringRef.current?.classList.toggle('is-hover', hovering);
        dotRef.current?.classList.toggle('is-hover', hovering);
      }
    };

    const onLeave = () => {
      visible = false;
      dotRef.current?.style.setProperty('opacity', '0');
      ringRef.current?.style.setProperty('opacity', '0');
    };

    const tick = () => {
      // Halka yumuşakça takip eder, nokta birebir farede durur
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} id="custom-cursor" className="am-cursor-ring" aria-hidden />
      <div ref={dotRef} className="am-cursor-dot" aria-hidden />
    </>
  );
}
