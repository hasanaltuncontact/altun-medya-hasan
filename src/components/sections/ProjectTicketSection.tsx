'use client';

import { useState, useEffect } from 'react';
import { servicesDatabase } from '@/data/services-database';

interface ProjectTicketSectionProps {
  onOpenBriefWithService?: (slug: string) => void;
}

const WHATSAPP = '905443135557';

export default function ProjectTicketSection({ onOpenBriefWithService }: ProjectTicketSectionProps) {
  const [selectedSlug, setSelectedSlug] = useState(servicesDatabase[0].slug);
  // Sabit başlangıç değeri (sunucu = tarayıcı), rastgele kod sadece tarayıcıda üretilir
  const [ticketCode, setTicketCode] = useState('ALT-2026-0000');
  useEffect(() => {
    setTicketCode(`ALT-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  }, []);

  const selected = servicesDatabase.find((s) => s.slug === selectedSlug);

  const openWhatsApp = () => {
    const message = `Merhaba Altun Medya! ${ticketCode} kodlu bilet ile teklif almak istiyorum.\n\nHizmet: ${selected?.title ?? 'Genel'}`;
    window.location.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="ticket-section" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#A40001] text-[#F6F6F6]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl xs:text-4xl sm:text-6xl tracking-tight leading-tight font-heading mb-7 md:mb-12">
          <span className="font-black">PROJENİ</span>{' '}
          <span className="font-light opacity-90">BİRLİKTE</span>{' '}
          <span className="font-black text-[#262626]">BAŞLATALIM.</span>
        </h2>

        {/* Çerçeveli iki panel */}
        <div className="p-2.5 sm:p-3 rounded-[32px] bg-[#262626]/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-2.5 sm:gap-3">
            {/* Sol panel — seçim */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#F6F6F6] text-[#262626] flex flex-col justify-between gap-6 shadow-md">
              <div>
                <h3 className="text-2xl font-bold font-heading">Ne yapalım?</h3>
                <p className="mt-2 text-sm opacity-70">Hizmeti seç, gerisini biz halledelim.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {servicesDatabase.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setSelectedSlug(s.slug)}
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      selectedSlug === s.slug
                        ? 'bg-[#A40001] text-[#F6F6F6]'
                        : 'bg-[#262626]/5 hover:bg-[#262626]/10 text-[#262626]'
                    }`}
                  >
                    {s.title.split('&')[0].trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Sağ panel — eylem */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#262626] text-[#F6F6F6] flex flex-col justify-between gap-8 shadow-md">
              <div>
                <span className="text-xs font-bold text-[#A40001] uppercase tracking-wider">SEÇİLEN HİZMET</span>
                <h3 className="text-2xl font-bold font-heading mt-1">{selected?.title.split('&')[0].trim()}</h3>
                <p className="mt-2 text-sm text-[#C3C3C3]">Ücretsiz ön görüşme · 24 saat içinde dönüş</p>
              </div>
              <div className="flex flex-col xs:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 px-5 py-3.5 rounded-full bg-[#A40001] text-[#F6F6F6] text-sm font-bold hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors shadow-md"
                >
                  WhatsApp&apos;tan yaz
                </button>
                {onOpenBriefWithService && (
                  <button
                    type="button"
                    onClick={() => onOpenBriefWithService(selectedSlug)}
                    className="flex-1 px-5 py-3.5 rounded-full border border-[#F6F6F6]/30 text-sm font-bold hover:bg-[#F6F6F6] hover:text-[#262626] transition-colors"
                  >
                    Form doldur
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
