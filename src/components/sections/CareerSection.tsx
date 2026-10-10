'use client';

import { useState } from 'react';
import { Briefcase, ArrowUpRight, Send, CheckCircle2, Building, Sparkles } from 'lucide-react';

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
    <section id="career" className="py-24 px-5 sm:px-10 lg:px-14 bg-[#0A0A0A] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              GELECEĞİ KREATİF<br />
              <span className="text-[#C8FF00]">EKİBİMİZLE ŞEKİLLENDİRİN.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/70 max-w-md font-mono leading-relaxed">
            ALTUN MEDYA ailesi olarak tutkulu, yenilikçi ve editoryal standartlarda iş üreten yetenekleri ekibimize davet ediyoruz.
          </p>
        </div>

        {/* OPEN POSITIONS LIST */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93] uppercase tracking-wider pb-2 border-b border-white/10 px-2">
            <span>AÇIK POZİSYONLAR ({openPositions.length})</span>
            <span>LOKASYON &amp; DEPARTMAN</span>
          </div>

          <div className="divide-y divide-white/10">
            {openPositions.map((pos) => (
              <div
                key={pos.id}
                className="group py-6 px-3 sm:px-5 rounded-2xl hover:bg-white/5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-transparent hover:border-white/10"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#C8FF00]/10 text-[#C8FF00] font-bold">
                      {pos.department}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/70">{pos.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#C8FF00] transition-colors font-heading">
                    {pos.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {pos.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="text-xs font-mono text-[#8E8E93] hidden lg:inline">
                    {pos.location}
                  </span>
                  <button
                    onClick={() => setSelectedPos(pos)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#C8FF00] hover:text-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <span>Başvuru Yap</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GENERAL TALENT POOL BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#121800] border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00] font-bold">
              <Building className="w-4 h-4" />
              <span>GENEL BAŞVURU &amp; YETENEK HAVUZU</span>
            </div>
            <h4 className="text-xl font-bold text-white font-heading">Aradığınız pozisyonu listede bulamadınız mı?</h4>
            <p className="text-xs text-white/70 max-w-xl font-mono">
              Portföyünüzü ve özgeçmişinizi stüdyo ekibimize iletin, yeni projeler başladığında ilk sizinle iletişime geçelim.
            </p>
          </div>

          <a
            href="mailto:ik@altunmedya.com"
            className="px-6 py-3.5 rounded-xl bg-[#C8FF00] text-black font-extrabold text-xs font-mono uppercase tracking-wider hover:bg-[#D4FF28] transition-all text-center flex-shrink-0 shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>ik@altunmedya.com&apos;a Gönder</span>
          </a>
        </div>

      </div>

      {/* CAREER APPLICATION MODAL */}
      {selectedPos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn">
          <div className="bg-[#111111] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C8FF00] font-bold">KARİYER BAŞVURUSU</span>
                <h3 className="text-lg font-bold text-white font-heading">{selectedPos.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPos(null)}
                className="text-white/60 hover:text-white text-xs font-mono px-2 py-1 bg-white/5 rounded-lg"
              >
                Kapat
              </button>
            </div>

            {isApplied ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#C8FF00] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Başvurunuz İletildi!</h4>
                <p className="text-xs text-white/70">İnsan kaynakları ekibimiz başvurunuzu değerlendirip sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-white/80 mb-1">AD SOYAD *</label>
                  <input
                    type="text"
                    required
                    value={applicantForm.name}
                    onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                    placeholder="Adınız ve Soyadınız"
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/80 mb-1">E-POSTA *</label>
                    <input
                      type="email"
                      required
                      value={applicantForm.email}
                      onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                      placeholder="eposta@adresiniz.com"
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00]"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-1">TELEFON *</label>
                    <input
                      type="tel"
                      required
                      value={applicantForm.phone}
                      onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-1">PORTFÖY / BEHANCE / GITHUB LINKİ</label>
                  <input
                    type="url"
                    value={applicantForm.portfolio}
                    onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                    placeholder="https://behance.net/kullanici veya portfoy linki"
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00]"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-1">KISA KENDİNİZİ TANITIM NOTU</label>
                  <textarea
                    rows={3}
                    value={applicantForm.note}
                    onChange={(e) => setApplicantForm({ ...applicantForm, note: e.target.value })}
                    placeholder="Deneyimlerinizden bahsedebilirsiniz..."
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-extrabold uppercase tracking-wider bg-[#C8FF00] text-black rounded-xl hover:bg-[#D4FF28] transition-all flex items-center justify-center gap-2 shadow-lg"
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
