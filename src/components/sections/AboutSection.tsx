import SectionHeading from '@/components/ui/SectionHeading';

const pillars = ['4K çekim & drone', 'Reels kurgusu', 'Web & e-ticaret', 'Meta & Google reklam'];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-24 px-5 sm:px-10 lg:px-14 bg-[#141414] text-[#F8F0DB]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-5 md:space-y-6">
          <SectionHeading className="!mb-0" title="Hakkımızda" desc="Didim merkezli; sosyal medya, video çekimi, web tasarım ve reklamı tek ekipte yapan bir medya ajansıyız." />
          <ul className="flex flex-wrap gap-2">
            {pillars.map((p) => (
              <li key={p} className="px-4 py-2 rounded-full border border-[#F8F0DB]/20 text-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 m-hide">
          <div className="p-2.5 rounded-[30px] bg-[#0B0B0B] border border-[#F8F0DB]/10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="ALTUN MEDYA Stüdyo"
              className="w-full aspect-square object-cover rounded-[22px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
