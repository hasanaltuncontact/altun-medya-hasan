'use client';

import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { servicesDatabase } from '@/data/services-database';

interface BriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategorySlug?: string;
  initialServiceSlug?: string;
}

export default function BriefModal({ isOpen, onClose, selectedCategorySlug, initialServiceSlug }: BriefModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedCategorySlug || initialServiceSlug || servicesDatabase[0].slug,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [waLink, setWaLink] = useState('https://wa.me/905443135557');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const selectedCategory = servicesDatabase.find((s) => s.slug === formData.service);
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: selectedCategory ? selectedCategory.title : formData.service,
          message: formData.message,
          source: 'Header / Proje Başlat Modal',
        }),
      });

      const data = await res.json();
      if (data.whatsappUrl) {
        setWaLink(data.whatsappUrl);
      }
      setIsSubmitted(true);
    } catch {
      // Ağ hatası olsa bile WhatsApp bağlantısını oluştur ve kullanıcıyı mağdur etme
      const msg = `Merhaba Altun Medya! Web sitenizden teklif formu doldurdum.\nİsim: ${formData.name}\nTelefon: ${formData.phone}\nHizmet: ${formData.service}`;
      setWaLink(`https://wa.me/905443135557?text=${encodeURIComponent(msg)}`);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-[#262626]/90 backdrop-blur-2xl animate-fadeIn">
      <div className="bg-[#1E1E1E] border border-[#F6F6F6]/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#F6F6F6]/60 hover:text-[#F6F6F6] p-1 rounded-full bg-[#F6F6F6]/5 hover:bg-[#F6F6F6]/10 transition-all"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-medium text-[#A40001] font-bold block mb-1">
            ALTUN MEDYA • PROJE BAŞLAT
          </span>
          <h3 className="text-2xl font-extrabold text-[#F6F6F6] tracking-tight font-heading">
            Projenizi Birlikte Hayata Geçirelim
          </h3>
          <p className="text-xs text-[#F6F6F6]/70 mt-1">
            Aşağıdaki bilgileri doldurun, 24 saat içinde stüdyo ekibimiz sizinle iletişime geçsin.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#A40001] mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-[#F6F6F6] font-heading">Talebiniz Başarıyla Alındı!</h4>
            <p className="text-xs text-[#F6F6F6]/70 max-w-sm mx-auto leading-relaxed">
              Proje detaylarınız kaydedildi. Stüdyo ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-extrabold bg-[#25D366] text-[#262626] rounded-xl hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>WhatsApp ile Hemen Görüş</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3.5 text-xs font-bold bg-[#F6F6F6]/10 hover:bg-[#F6F6F6]/15 text-[#F6F6F6] rounded-xl transition-all"
              >
                Kapat
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium uppercase text-[#F6F6F6]/80 mb-1">Adınız / Firma Adı *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Örn: Mehmet Yılmaz / Vay Vay Restaurant"
                className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-sm text-[#F6F6F6] focus:outline-none focus:border-[#A40001] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase text-[#F6F6F6]/80 mb-1">Telefon *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0544 313 5557"
                  className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-sm text-[#F6F6F6] focus:outline-none focus:border-[#A40001] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase text-[#F6F6F6]/80 mb-1">E-Posta</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="info@firmadomain.com"
                  className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-sm text-[#F6F6F6] focus:outline-none focus:border-[#A40001] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase text-[#F6F6F6]/80 mb-1">Hizmet Kategorisi *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-sm text-[#F6F6F6] focus:outline-none focus:border-[#A40001] transition-colors"
              >
                {servicesDatabase.map((cat) => (
                  <option key={cat.id} value={cat.slug} className="bg-neutral-900 text-[#F6F6F6]">
                    {cat.number} — {cat.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase text-[#F6F6F6]/80 mb-1">Proje Notu &amp; Beklentiniz</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Projeniz hakkında kısa bilgi verebilirsiniz..."
                className="w-full bg-[#1E1E1E] border border-[#F6F6F6]/10 rounded-xl px-4 py-3 text-sm text-[#F6F6F6] focus:outline-none focus:border-[#A40001] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 text-xs font-extrabold bg-[#A40001] text-[#F6F6F6] rounded-xl hover:bg-[#A40001] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(179,58,6,0.3)] active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{isLoading ? 'GÖNDERİLİYOR...' : 'BİLETİ KES & GÖNDER'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
