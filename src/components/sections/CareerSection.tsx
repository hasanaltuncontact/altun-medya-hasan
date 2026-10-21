'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const openPositions: CareerPosition[] = [
  {
    id: 'pos-1',
    title: 'Senior Video Editörü & Motion Designer',
    department: 'Prodüksiyon',
    location: 'Didim / Hibrit',
    type: 'Tam Zamanlı',
    description: 'Instagram Reels, TikTok ve 4K reklam filmleri için ritmik dikey kurgu, renk derecelendirme (color grading) ve grafik animasyon üretecek takım arkadaşı arıyoruz.',
    requirements: ['Premiere Pro & After Effects hakimiyeti', '9:16 Dikey kurgu portföyü', 'Ses tasarımı ve ritim duygusu']
  },
  {
    id: 'pos-2',
    title: 'Dijital Pazarlama & Performans Reklam Uzmanı',
    department: 'Pazarlama',
    location: 'Didim / Hibrit',
    type: 'Tam Zamanlı',
    description: 'Meta Ads ve Google Ads panellerinde yüksek bütçeli dönüşüm kampanyalarını ölçekleyecek, A/B kreatif testleri yapacak pazarlama uzmanı.',
    requirements: ['Meta & Google Ads deneyimi (En az 2 yıl)', 'ROAS ve dönüşüm optimizasyonu', 'Raporlama ve analitik yeteneği']
  },
  {
    id: 'pos-3',
    title: 'Frontend Web Geliştirici (Next.js & React)',
    department: 'Yazılım',
    location: 'Uzaktan / Remote',
    type: 'Tam Zamanlı / Proje Bazlı',
    description: 'Modern editoryal tasarımları Next.js, Tailwind CSS ve TypeScript ile piksel hassasiyetinde hayata geçirecek web geliştirici.',
    requirements: ['Next.js 14 App Router deneyimi', 'Tailwind CSS ve modern animasyon kütüphaneleri', 'Temel SEO ilkeleri hakimiyeti']
  },
  {
    id: 'pos-4',
    title: 'Drone Operatörü & Görüntü Yönetmeni',
    department: 'Saha Prodüksiyon',
    location: 'Didim & Ege Saha',
    type: 'Proje Bazlı / Part-Time',
    description: 'Otel, mekan ve gayrimenkul çekimlerinde 4K insansız hava aracı uçuracak sivil havacılık lisanslı drone pilotu.',
    requirements: ['SHGM İHA-1 Ticari Ehliyet', '4K Sinematik açılandırma deneyimi', 'Esnek çalışma saatleri']
  }
];

interface CareerSectionProps {
  onOpenBrief?: () => void;
}

export default function CareerSection({}: CareerSectionProps) {
  const [selectedPos, setSelectedPos] = useState<CareerPosition | null>(null);
  const [isApplied, setIsApplied] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    note: ''
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplied(true);
    setTimeout(() => {
      setIsApplied(false);
      setSelectedPos(null);
    }, 2500);
  };

  return (
    <section id="career" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#262626] text-[#F6F6F6] relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A40001]/20 text-[#A40001] border border-[#A40001]/30 text-xs font-bold tracking-wider mb-4">
              ALTUN MEDYA KARİYER
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-heading">
              <span className="font-black">EKİBİMİZE</span>{' '}
              <span className="font-black text-[#A40001]">KATIL.</span>
            </h2>
          </div>
          <p className="text-sm text-[#C3C3C3] max-w-sm leading-relaxed">
            Didim ve Ege&apos;nin en hızlı büyüyen medya stüdyosunda kreatif vizyonunu sahaya yansıt.
          </p>
        </div>

        {/* AÇIK POZİSYONLAR — sade satırlar */}
        <ul className="space-y-3">
          {openPositions.map((pos) => (
            <li
              key={pos.id}
              className="flex items-center justify-between gap-4 p-5 sm:p-6 rounded-[22px] bg-[#1E1E1E] border border-[#F6F6F6]/10 hover:border-[#A40001]/60 transition-all duration-300"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#A40001]">{pos.department}</span>
                  <span className="text-[#C3C3C3]/40">•</span>
                  <span className="text-xs text-[#C3C3C3]">{pos.type}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold font-heading leading-snug text-[#F6F6F6]">{pos.title}</h3>
                <p className="text-xs sm:text-sm text-[#C3C3C3] mt-1">{pos.location}</p>
              </div>
              <button
                onClick={() => setSelectedPos(pos)}
                className="shrink-0 px-6 py-2.5 rounded-full bg-[#A40001] text-[#F6F6F6] text-sm font-bold hover:bg-[#F6F6F6] hover:text-[#262626] transition-all duration-300 shadow-md active:scale-95"
              >
                Başvur
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-[#C3C3C3]">
          Aradığın pozisyon yok mu?{' '}
          <a href="mailto:ik@altunmedya.com" className="text-[#F6F6F6] font-bold underline underline-offset-4 hover:text-[#A40001] transition-colors">
            ik@altunmedya.com
          </a>
        </p>
      </div>

      {/* CAREER APPLICATION MODAL */}
      {selectedPos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262626]/90 backdrop-blur-2xl animate-fadeIn">
          <div className="bg-[#262626] border border-[#A40001]/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[#F6F6F6]/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#A40001] tracking-wider">KARİYER BAŞVURUSU</span>
                <h3 className="text-lg font-bold text-[#F6F6F6] font-heading">{selectedPos.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPos(null)}
                className="text-[#C3C3C3] hover:text-[#F6F6F6] text-xs font-medium px-2.5 py-1.5 bg-[#F6F6F6]/5 rounded-lg border border-[#F6F6F6]/10"
              >
                Kapat
              </button>
            </div>

            {isApplied ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#A40001] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-[#F6F6F6]">Başvurunuz İletildi!</h4>
                <p className="text-xs text-[#F6F6F6]/70">İnsan kaynakları ekibimiz başvurunuzu değerlendirip sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block text-[#F6F6F6]/80 mb-1">AD SOYAD *</label>
                  <input
                    type="text"
                    required
                    value={applicantForm.name}
                    onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                    placeholder="Adınız ve Soyadınız"
                    className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-[#F6F6F6] focus:outline-none focus:border-[#A40001]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#F6F6F6]/80 mb-1">E-POSTA *</label>
                    <input
                      type="email"
                      required
                      value={applicantForm.email}
                      onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                      placeholder="eposta@adresiniz.com"
                      className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-[#F6F6F6] focus:outline-none focus:border-[#A40001]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F6F6F6]/80 mb-1">TELEFON *</label>
                    <input
                      type="tel"
                      required
                      value={applicantForm.phone}
                      onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-[#F6F6F6] focus:outline-none focus:border-[#A40001]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#F6F6F6]/80 mb-1">PORTFÖY / BEHANCE / GITHUB LINKİ</label>
                  <input
                    type="url"
                    value={applicantForm.portfolio}
                    onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                    placeholder="https://behance.net/kullanici veya portfoy linki"
                    className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-[#F6F6F6] focus:outline-none focus:border-[#A40001]"
                  />
                </div>

                <div>
                  <label className="block text-[#F6F6F6]/80 mb-1">KISA KENDİNİZİ TANITIM NOTU</label>
                  <textarea
                    rows={3}
                    value={applicantForm.note}
                    onChange={(e) => setApplicantForm({ ...applicantForm, note: e.target.value })}
                    placeholder="Deneyimlerinizden bahsedebilirsiniz..."
                    className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-[#F6F6F6] focus:outline-none focus:border-[#A40001] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-extrabold bg-[#A40001] text-[#F6F6F6] rounded-xl hover:bg-[#A40001] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>BAŞVURUYU GÖNDER</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
