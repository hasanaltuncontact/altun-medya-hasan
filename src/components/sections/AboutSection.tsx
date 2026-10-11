import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-5 sm:px-10 lg:px-14 bg-[#EDE8DF] text-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-xs font-mono font-bold uppercase tracking-wider text-black">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B33A06]" />
            <span>KREATİF STÜDYO DİSİPLİNİ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl tracking-tight text-[#050505] leading-tight font-heading">
            <span className="font-black">GÖRSEL PRESTİJ</span>{' '}
            <span className="font-light text-[#050505]/75">VE</span><br />
            <span className="font-black text-[#B33A06]">360° MEDYA DİSİPLİNİ.</span>
          </h2>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed font-medium">
            ALTUN MEDYA, klasik ajans kalıplarının ötesinde; markaların fikir, görsel kimlik, 4K prodüksiyon ve dijital pazarlama ihtiyaçlarını tek çatı altında çözen kreatif bir medya stüdyosudur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-mono text-black font-bold">
            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-black/10 shadow-sm hover:border-[#B33A06] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#B33A06] flex-shrink-0" />
              <span>4K Sinematik &amp; Drone Çekimleri</span>
            </div>
            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-black/10 shadow-sm hover:border-[#B33A06] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#B33A06] flex-shrink-0" />
              <span>High-Retention 9:16 Reels Kurgusu</span>
            </div>
            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-black/10 shadow-sm hover:border-[#B33A06] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#B33A06] flex-shrink-0" />
              <span>Next.js Web &amp; E-Ticaret Sistemleri</span>
            </div>
            <div className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-black/10 shadow-sm hover:border-[#B33A06] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#B33A06] flex-shrink-0" />
              <span>ROAS Odaklı Meta &amp; Google Ads</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-black/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="ALTUN MEDYA Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/90 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center gap-2 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span>ALTUN MEDYA • Didim, Aydın &amp; Ege Stüdyosu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
