import { type ClientProfile, maps, cover } from '../client-profile-types';

export const profilesPart1: ClientProfile[] = [
  /* ───────────────────────── DIOR BEACH CLUB ───────────────────────── */
  {
    slug: 'diorbeachclubdidim',
    logoName: 'Dior Beach Club',
    displayName: 'Dior Beach Club',
    sector: 'Beach & Night Club',
    location: 'Altınkum, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim Altınkum beach club için drone çekimi, reels prodüksiyonu ve sosyal medya',
    tagline: 'Altınkum sahilinin gündüz ve gece enerjisini 1.3 milyon izlenmeye taşıdık.',
    intro:
      'Dior Beach Club, Didim Altınkum Yalı Caddesi üzerinde gündüz beach club, gece performans sahnesi olarak çalışan bölgenin en hareketli mekânlarından biri. ALTUN MEDYA olarak mekânın sezon boyu görsel iletişimini, drone çekimlerini ve dikey video içeriklerini üretiyoruz.',
    cover: cover('diorbeachclubdidim'),
    accent: '#C9A86A',
    did: [
      'Beach club pazarlamasında karar çoğu zaman tek bir videoyla verilir: misafir, Instagram\'da gördüğü 15 saniyelik bir reels ile o gün nereye gideceğini seçer. Bu nedenle Dior Beach Club için önce mekânın "imza anlarını" belirledik: sabah sakin denizde şezlong sıraları, öğleden sonra havuz başı müzik ve gün batımında başlayan gece performansı.',
      'Bu anları DJI Mavic 3 Pro ile havadan, Sony FX3 ile sinematik yer çekimleriyle kaydettik. Didim Altınkum sahil şeridini tek karede gösteren drone açılışları, mekânın denize sıfır konumunu ilk saniyede anlatıyor. Kurguları Instagram ve TikTok algoritmasına göre ilk 3 saniyede dikkat çeken, müzik senkronlu ve sessiz izlemede de anlaşılır olacak şekilde hazırladık.',
      'Gece tarafında ise sahne performanslarını, ışık şovlarını ve kalabalığın enerjisini düşük ışıkta çekim yapabilen kameralarla yakaladık. Böylece "Didim beach club", "Altınkum gece hayatı" gibi aramalarda mekân hem gündüz hem gece seçeneği olarak konumlandı.',
    ],
    services: [
      { title: 'Drone Çekimi', desc: 'Altınkum sahil şeridi, mekân konumu ve gün batımı havadan çekimleri.', icon: 'drone' },
      { title: 'Reels & TikTok Prodüksiyonu', desc: 'Müzik senkronlu, ilk 3 saniyede yakalayan dikey kurgular.', icon: 'video' },
      { title: 'Gece Etkinlik Çekimi', desc: 'Sahne performansı, DJ ve ışık şovu içerikleri.', icon: 'camera' },
      { title: 'Sosyal Medya Yönetimi', desc: 'Sezonluk içerik takvimi, story ve etkinlik duyuruları.', icon: 'social' }, // DÜZENLE
    ],
    made: [
      'Sezon boyunca mekânın tüm dijital kanallarında kullanılan geniş bir görsel arşiv oluşturduk. Bu arşivde drone açılışlı tanıtım filmi, haftalık etkinlik reels\'leri, story formatında kısa duyurular ve rezervasyon kampanyaları için fotoğraflar yer alıyor.',
    ],
    deliverables: [
      { value: '1', label: 'Sezon tanıtım filmi' },
      { value: '25+', label: 'Reels & TikTok' }, // DÜZENLE
      { value: '150+', label: 'Fotoğraf' }, // DÜZENLE
      { value: '40+', label: 'Drone planı' }, // DÜZENLE
    ],
    achieved: [
      'Sezon tanıtım reels\'i organik olarak 1.3 milyon izlenmeye ulaştı. Drone açılışları mekânın Instagram ve Google İşletme profilinde imza görseli haline geldi.',
    ],
    results: [
      { value: '1.3M', label: 'Reels izlenmesi' },
      { value: '+%180', label: 'Profil ziyareti' }, // DÜZENLE
      { value: '+%60', label: 'Rezervasyon talebi' }, // DÜZENLE
    ],
    milestones: [
      'Tek bir tanıtım videosuyla 1.3 milyon organik izlenme',
      'Drone çekimleri mekânın imza görseli oldu',
      'Gündüz ve gece için iki ayrı içerik dili oluşturuldu',
    ],
    equipment: ['mavic3pro', 'fx3', 'a7siii', 'gm2470', 'rs4pro', 'davinci'],
    faq: [
      { q: 'Dior Beach Club Didim\'in neresinde?', a: 'Dior Beach Club, Didim Altınkum Mahallesi Yalı Caddesi üzerinde, Altınkum plajında yer alıyor.' },
      { q: 'Dior Beach Club için ALTUN MEDYA hangi çalışmaları yaptı?', a: 'Drone çekimi, sinematik reels prodüksiyonu, gece etkinlik çekimleri ve sezonluk sosyal medya içerikleri üretildi.' },
    ],
    reelIds: ['dior-beach-club'],
    instagram: { handle: 'diorbeachclubdidim', bio: 'Beach & Night Club · Performance Hall · Altınkum / Didim', posts: [] },
    links: { maps: maps('Dior Beach Club Altınkum Didim') },
    keywords: ['Dior Beach Club Didim', 'Didim beach club', 'Altınkum beach club', 'Didim drone çekimi', 'Didim gece hayatı'],
  },

  /* ───────────────────────── URUS HOTELS ───────────────────────── */
  {
    slug: 'urushotelsdidim',
    logoName: "Urus Hotel's",
    displayName: 'Urus Hotels',
    sector: 'Butik Otel',
    location: 'Altınkum, Didim',
    since: '2025', // DÜZENLE
    seoTitle: 'Didim Altınkum butik otel için otel fotoğrafçılığı, tanıtım filmi ve dijital pazarlama',
    tagline: 'Altınkum plajına 50 metre mesafedeki butik oteli rezervasyon getiren görsellerle anlattık.',
    intro:
      'Urus Hotels, Didim Altınkum\'da mavi bayraklı plaja yalnızca 50 metre mesafede bulunan butik bir şehir oteli. Double, Twin, Connecting ve Triple oda seçenekleriyle çiftlere, ailelere ve küçük gruplara hitap ediyor. ALTUN MEDYA olarak otelin online rezervasyon kanallarında kullanılan tüm görsel içeriği üretiyoruz.',
    cover: cover('urushotelsdidim'),
    accent: '#8FA9C4',
    did: [
      'Otel pazarlamasında misafir ilk kararını Booking, Google veya Instagram\'daki ilk birkaç fotoğrafa bakarak verir. Bu nedenle Urus Hotels için her oda tipini ayrı ayrı, gün ışığının en iyi olduğu saatlerde geniş açı lenslerle çektik. Odanın gerçek ferahlığını gösteren, ancak abartmayan doğal kadrajlar tercih ettik.',
      'Otelin en güçlü kozu konumu: Altınkum plajına 50 metre. Bunu anlatmak için DJI Mavic 3 Pro ile otelden plaja uzanan tek plan drone çekimleri yaptık. Apollon Tapınağı ve D-Marin gibi yakın noktaları da içeren bölge tanıtım videolarıyla "Didim\'de nerede kalınır" sorusuna görsel bir cevap verdik.',
      'Tüm görseller Booking, Google İşletme Profili, web sitesi ve sosyal medya için ayrı ayrı boyutlandırılıp optimize edildi. Böylece "Didim butik otel" ve "Altınkum denize yakın otel" aramalarında otelin listelemeleri daha profesyonel bir görünüme kavuştu.',
    ],
    services: [
      { title: 'Otel Fotoğrafçılığı', desc: 'Oda tipleri, kahvaltı salonu ve ortak alanların profesyonel çekimi.', icon: 'camera' },
      { title: 'Drone & Konum Videosu', desc: 'Otelden Altınkum plajına uzanan havadan tanıtım.', icon: 'drone' },
      { title: 'Tanıtım Filmi', desc: 'Misafir deneyimini anlatan kısa otel tanıtım videoları.', icon: 'video' },
      { title: 'Booking & Google Optimizasyonu', desc: 'Listeleme görsellerinin kanal bazlı düzenlenmesi.', icon: 'seo' },
    ],
    made: [
      'Otelin tüm satış kanallarında kullanılabilecek eksiksiz bir görsel kit hazırladık. Kitte her oda tipi için fotoğraf seti, dikey ve yatay tanıtım videoları, drone konum videosu ve sosyal medya için sezon kampanya görselleri bulunuyor.',
    ],
    deliverables: [
      { value: '150+', label: 'Profesyonel fotoğraf' }, // DÜZENLE
      { value: '5', label: 'Oda tipi seti' },
      { value: '8', label: 'Tanıtım videosu' }, // DÜZENLE
      { value: '1', label: 'Drone konum filmi' },
    ],
    achieved: [
      'Yenilenen görsellerle online kanallarda otelin profesyonel algısı güçlendi ve rezervasyon talepleri arttı.', // DÜZENLE
    ],
    results: [
      { value: '+%40', label: 'Rezervasyon talebi' }, // DÜZENLE
      { value: '+%55', label: 'Listeleme tıklanma' }, // DÜZENLE
      { value: '50 m', label: 'Plaja mesafe: görselde' },
    ],
    milestones: [
      'Tüm oda tipleri için ayrı fotoğraf setleri teslim edildi',
      'Konum avantajı drone videosuyla görünür hale geldi',
      'Booking ve Google görselleri tek elden yenilendi',
    ],
    equipment: ['a7iv', 'gm1635', 'mavic3pro', 'rs4pro', 'amaran200', 'davinci'],
    faq: [
      { q: 'Urus Hotels Didim\'in neresinde?', a: 'Urus Hotels, Didim Çamlık Mahallesi 406. Sokak\'ta, Altınkum plajına yaklaşık 50 metre mesafede yer alıyor.' },
      { q: 'Otel fotoğrafçılığında neye dikkat ettiniz?', a: 'Her oda tipini gün ışığında, geniş açı ama doğal kadrajlarla çektik; konum avantajını drone videosuyla destekledik.' },
    ],
    links: { website: 'https://urushotels.com', maps: maps('Urus Hotels Didim') },
    keywords: ['Urus Hotels Didim', 'Didim butik otel', 'Altınkum otel', 'otel fotoğrafçılığı Didim', 'Didim denize yakın otel'],
  },

  /* ───────────────────────── BEBEK BODRUM ───────────────────────── */
  {
    slug: 'bebekbodrum',
    logoName: 'Bebek Bodrum',
    displayName: 'Bebek Bodrum',
    sector: 'Yeni Nesil Meyhane & Eğlence',
    location: 'Gümbet, Bodrum',
    since: '2024', // DÜZENLE
    seoTitle: 'Bodrum Gümbet yeni nesil meyhane için reels, yemek fotoğrafçılığı ve sosyal medya',
    tagline: 'Gümbet\'in yeni nesil meyhanesini canlı müzik ve meze enerjisiyle ekrana taşıdık.',
    intro:
      'Bebek Bodrum, Gümbet\'te meze, rakı sofrası ve canlı müziği bir araya getiren yeni nesil bir meyhane ve eğlence mekânı. ALTUN MEDYA olarak mekânın sofra kültürünü ve gece atmosferini anlatan foto-video içeriklerini üretiyoruz.',
    cover: cover('bebekbodrum'),
    accent: '#D98E5F',
    did: [
      'Yeni nesil meyhane konseptinin iki yüzü var: masadaki meze çeşitliliği ve gece ilerledikçe yükselen canlı müzik enerjisi. Bebek Bodrum için içerik stratejisini bu iki yüz üzerine kurduk. Akşam erken saatlerde sakin ışıkta meze ve sofra çekimleri, gece ise sahne, şarkı eşliğinde kalkan kadehler ve kalabalık.',
      'Yemek çekimlerinde makro lens ve yumuşak yan ışıkla mezelerin dokusunu öne çıkardık. Gece çekimlerinde ise ortamın doğal ışığını bozmadan, yüksek ISO performanslı kameralarla samimi anları yakaladık. Böylece "Bodrum meyhane", "Gümbet canlı müzik" gibi aramalarda mekân hem lezzet hem eğlence için akla gelen bir adres oldu.',
    ],
    services: [
      { title: 'Yemek & Meze Fotoğrafçılığı', desc: 'Menü ve sofra çekimleri, makro detaylar.', icon: 'camera' },
      { title: 'Gece Reels Çekimi', desc: 'Canlı müzik, sahne ve atmosfer videoları.', icon: 'video' },
      { title: 'Sosyal Medya Yönetimi', desc: 'Haftalık içerik planı, story ve etkinlik duyuruları.', icon: 'social' }, // DÜZENLE
    ],
    made: [
      'Menünün tamamını kapsayan yemek fotoğraf seti, haftalık canlı müzik reels\'leri ve özel gün (doğum günü, bekarlığa veda) rezervasyonlarını hedefleyen kampanya içerikleri ürettik.',
    ],
    deliverables: [
      { value: '60+', label: 'Meze & menü fotoğrafı' }, // DÜZENLE
      { value: '30+', label: 'Reels' }, // DÜZENLE
      { value: '12', label: 'Etkinlik gecesi çekimi' }, // DÜZENLE
    ],
    achieved: ['Gece içerikleri mekânın en çok kaydedilen ve paylaşılan gönderileri oldu, hafta içi doluluk arttı.'], // DÜZENLE
    results: [
      { value: '+%65', label: 'Etkileşim' }, // DÜZENLE
      { value: '200K+', label: 'Toplam erişim' }, // DÜZENLE
      { value: '+%35', label: 'Hafta içi rezervasyon' }, // DÜZENLE
    ],
    milestones: ['Menünün tamamı profesyonel olarak fotoğraflandı', 'Canlı müzik geceleri düzenli reels serisine dönüştü'],
    equipment: ['a7siii', 'gm90macro', 'sigma35', 'amaran200', 'rodentg', 'premiere'],
    faq: [
      { q: 'Bebek Bodrum nerede?', a: 'Bebek Bodrum, Bodrum Gümbet Mahallesi Şakir Esendemir Sokak\'ta yer alıyor.' },
      { q: 'Meyhane çekimlerinde nasıl bir yol izlediniz?', a: 'Erken saatlerde meze ve sofra, gece ise canlı müzik ve atmosfer çekerek iki farklı içerik dili oluşturduk.' },
    ],
    instagram: { handle: 'bebekbodrum', bio: 'Yeni nesil meyhane · Gümbet / Bodrum', posts: [] },
    links: { maps: maps('Bebek Bodrum Gümbet') },
    keywords: ['Bebek Bodrum', 'Bodrum meyhane', 'Gümbet meyhane', 'Bodrum canlı müzik', 'Bodrum reels çekimi'],
  },

  /* ───────────────────────── AYTEPE SOFRASI ───────────────────────── */
  {
    slug: 'aytepesofrasididim',
    logoName: 'Aytepe Sofrası',
    displayName: 'Aytepe Sofrası',
    sector: 'Restoran · Kahvaltı & Izgara',
    location: 'Çamlık, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim restoran ve serpme kahvaltı mekânı için drone açılışlı reels ve yemek fotoğrafçılığı',
    tagline: 'Drone açılışlı kurgularla Aytepe\'nin manzarasını ve sofrasını tek videoda buluşturduk.',
    intro:
      'Aytepe Sofrası, Didim Çamlık Mahallesi Aytepe Caddesi\'nde köy kahvaltısı, ızgara ve geleneksel Türk mutfağı sunan bir restoran. ALTUN MEDYA olarak mekânın tanıtım videolarını ve menü fotoğraflarını ürettik.',
    cover: cover('aytepesofrasididim'),
    accent: '#A3B36B',
    did: [
      'Aytepe Sofrası\'nın en güçlü özelliği konumu ve sofrasının bolluğu. Bunu tek bir kurguda anlatmak için "yukarıdan sofraya" formatını geliştirdik: Video, DJI Mavic 3 Pro ile mekânın çevresini gösteren bir drone açılışıyla başlıyor, ardından gimbal ile masaya iniyor ve serpme kahvaltının, ızgaraların detaylarına geçiyor.',
      'Yemek çekimlerinde doğal gün ışığını ana ışık olarak kullandık, sıcak tonları koruyan bir renk düzenlemesiyle "ev yemeği" hissini öne çıkardık. Bu yaklaşım "Didim kahvaltı", "Didim serpme kahvaltı" ve "Didim restoran" aramalarında hem yerel halka hem tatilcilere hitap eden bir görsel dil sağladı.',
    ],
    services: [
      { title: 'Drone Açılışlı Reels', desc: 'Mekân ve çevresini havadan gösterip sofraya inen kurgular.', icon: 'drone' },
      { title: 'Yemek Fotoğrafçılığı', desc: 'Serpme kahvaltı ve ızgara menü çekimleri.', icon: 'camera' },
      { title: 'Restoran Tanıtım Videosu', desc: 'Mekân, mutfak ve sofra hikâyesi.', icon: 'video' },
    ],
    made: ['Drone açılışlı tanıtım reels\'i, kahvaltı ve ızgara menüsü için fotoğraf seti ve sosyal medyada kullanılacak kısa ürün videoları ürettik.'],
    deliverables: [
      { value: '1', label: 'Drone açılışlı tanıtım' },
      { value: '15+', label: 'Reels' }, // DÜZENLE
      { value: '50+', label: 'Menü fotoğrafı' }, // DÜZENLE
    ],
    achieved: ['Tanıtım reels\'i 420 bin izlenmeye ulaştı. Drone açılışı mekânın imza içerik formatı haline geldi.'],
    results: [
      { value: '420B', label: 'Reels izlenmesi' },
      { value: '+%90', label: 'Hafta sonu talebi' }, // DÜZENLE
      { value: '15+', label: 'Üretilen içerik' }, // DÜZENLE
    ],
    milestones: ['Tanıtım videosu 420 bin izlenmeye ulaştı', '"Yukarıdan sofraya" formatı mekânın imzası oldu'],
    equipment: ['mavic3pro', 'fx3', 'gm2470', 'gm90macro', 'rs4pro', 'davinci'],
    faq: [
      { q: 'Aytepe Sofrası nerede?', a: 'Didim Çamlık Mahallesi Aytepe Caddesi No:2/A adresinde yer alıyor.' },
      { q: 'Restoran tanıtımında hangi format kullanıldı?', a: 'Drone ile başlayıp gimbal ile sofraya inen tek akışlı bir reels formatı kullanıldı.' },
    ],
    reelIds: ['aytepe-sofrasi'],
    instagram: { handle: 'aytepesofrasididim', bio: 'Köy kahvaltısı · Izgara · Didim', posts: [] },
    links: { maps: maps('Aytepe Sofrası Didim'), phone: '+902568132121' },
    keywords: ['Aytepe Sofrası Didim', 'Didim kahvaltı', 'Didim serpme kahvaltı', 'Didim restoran', 'restoran reels çekimi'],
  },

  /* ───────────────────────── NIKA'S ───────────────────────── */
  {
    slug: 'nikasaltinkum',
    logoName: "Nika's Altınkum",
    displayName: "Nika's Altınkum",
    sector: 'Balık & Meze Restoranı',
    location: 'Altınkum, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Altınkum balık restoranı için sinematik mekân kurgusu, yemek fotoğrafçılığı ve reels',
    tagline: 'Et, balık ve meze konseptini gün batımı atmosferiyle 895 bin izlenmeye taşıdık.',
    intro:
      "Nika's, Didim Altınkum'da deniz ürünleri, et ve Ege mezelerini sahil atmosferiyle sunan bir restoran. ALTUN MEDYA olarak mekânın atmosfer odaklı sinematik kurgularını ve menü fotoğraflarını ürettik.",
    cover: cover('nikasaltinkum'),
    accent: '#E07A4F',
    did: [
      "Balık restoranı seçerken misafir üç şeye bakar: tazelik, manzara ve atmosfer. Nika's için içerikleri bu üç başlık üzerine kurguladık. Günün balığının tezgâhtan ızgaraya yolculuğu, gün batımında denize bakan masalar ve akşam ilerledikçe yanan ışıklar.",
      'Sony FX3 ile sığ alan derinliğinde sinematik planlar çektik, ızgaradaki ahtapot ve balıkları makro lensle detaylandırdık. Altınkum bölgesi yoğun yabancı turist aldığı için kurguları dilden bağımsız, sadece görüntü ve müzikle anlaşılır olacak şekilde tasarladık. Bu sayede "Altınkum balık restoranı" ve "Didim fish restaurant" aramalarında hem yerli hem yabancı misafire hitap eden bir dil oluştu.',
    ],
    services: [
      { title: 'Sinematik Mekân Kurgusu', desc: 'Gün batımı ve atmosfer odaklı dikey restoran videoları.', icon: 'video' },
      { title: 'Deniz Ürünleri Fotoğrafçılığı', desc: 'Balık, ahtapot ve meze makro çekimleri.', icon: 'camera' },
      { title: 'Sosyal Medya Yönetimi', desc: 'Sezonluk içerik ve story planı.', icon: 'social' }, // DÜZENLE
    ],
    made: ['Atmosfer odaklı tanıtım kurgusu, günün balığı serisi, meze fotoğraf seti ve turist sezonuna yönelik dilden bağımsız reels içerikleri ürettik.'],
    deliverables: [
      { value: '1', label: 'Sinematik mekân filmi' },
      { value: '20+', label: 'Reels' }, // DÜZENLE
      { value: '70+', label: 'Menü fotoğrafı' }, // DÜZENLE
    ],
    achieved: ['Mekân kurgusu 895 bin izlenmeye ulaştı. Gün batımı içerikleri en çok paylaşılan gönderiler oldu.'],
    results: [
      { value: '895B', label: 'Reels izlenmesi' },
      { value: '+%120', label: 'DM rezervasyon' }, // DÜZENLE
      { value: '20+', label: 'Üretilen içerik' }, // DÜZENLE
    ],
    milestones: ['Sinematik kurgu 895 bin izlenmeye ulaştı', 'Dilden bağımsız kurgularla yabancı turiste ulaşıldı'],
    equipment: ['fx3', 'sigma35', 'gm90macro', 'rs4pro', 'amaran200', 'davinci'],
    faq: [
      { q: "Nika's Altınkum ne tür bir restoran?", a: 'Deniz ürünleri, et ve Ege mezeleri sunan, Altınkum sahilinde bir balık restoranı.' },
      { q: 'Turist sezonu için içerikler nasıl hazırlandı?', a: 'Kurgular dilden bağımsız, sadece görüntü ve müzikle anlaşılır olacak şekilde tasarlandı.' },
    ],
    reelIds: ['nikas-altinkum'],
    instagram: { handle: 'nikasbalik', bio: 'Balık · Et · Meze · Altınkum / Didim', posts: [] },
    links: { maps: maps("Nika's Altınkum Didim") },
    keywords: ["Nika's Altınkum", 'Altınkum balık restoranı', 'Didim balık restoranı', 'Didim fish restaurant', 'restoran video çekimi'],
  },

  /* ───────────────────────── KASTYÖREM ───────────────────────── */
  {
    slug: 'kastyorem',
    logoName: 'Kastyörem',
    displayName: 'Kastyörem',
    sector: 'Yöresel Ürün E-Ticaret',
    location: 'Kastamonu · Online',
    since: '2024', // DÜZENLE
    seoTitle: 'Kastamonu yöresel ürünler e-ticaret markası için viral reels ve ürün fotoğrafçılığı',
    tagline: 'Taşköprü sarımsağından siyez bulguruna, yöresel ürünleri 9.3 milyon izlenmeyle tanıttık.',
    intro:
      "Kastyörem, Kastamonu'nun coğrafi işaretli ve yöresel ürünlerini (Taşköprü sarımsağı, siyez bulguru, Tosya pirinci ve daha fazlası) tarladan doğrudan sofraya ulaştıran bir e-ticaret markası. ALTUN MEDYA olarak markanın viral video içeriklerini ve ürün fotoğraflarını ürettik.",
    cover: cover('kastyorem'),
    accent: '#C48A3A',
    did: [
      'Yöresel ürün satışında en büyük engel güvendir: müşteri ürünün gerçekten o yöreden geldiğinden emin olmak ister. Bu nedenle Kastyörem için içerik stratejisini "üretimin hikâyesi" üzerine kurduk. Tarladan hasat, ürünün ayıklanması, paketlenmesi ve kargoya verilmesi gibi sahneleri samimi ve gerçekçi bir dille anlattık.',
      'Videolarda ürünün dokusunu ve tazeliğini gösteren yakın planları, ortam sesleriyle birlikte kurguladık. Her videonun sonunda doğrudan siteye yönlendiren net bir çağrı kullandık. Bu yaklaşım "Taşköprü sarımsağı satın al", "siyez bulguru" ve "Kastamonu yöresel ürünler" gibi aramalarla birleşerek sosyal medyadan e-ticaret sitesine güçlü bir trafik köprüsü kurdu.',
    ],
    services: [
      { title: 'Viral Reels Prodüksiyonu', desc: 'Üretim hikâyesini anlatan samimi dikey videolar.', icon: 'video' },
      { title: 'E-Ticaret Ürün Fotoğrafı', desc: 'Site ve pazaryerleri için beyaz fon ve konsept çekimler.', icon: 'camera' },
      { title: 'Performans Reklamları', desc: 'Satış odaklı Meta reklam kampanyaları.', icon: 'ads' }, // DÜZENLE
    ],
    made: ['Üretim hikâyesi serisi, ürün tanıtım videoları, e-ticaret sitesi ve pazaryerleri için tüm ürünlerin beyaz fon ve konsept fotoğraflarını ürettik.'],
    deliverables: [
      { value: '40+', label: 'Reels' }, // DÜZENLE
      { value: '120+', label: 'Ürün fotoğrafı' }, // DÜZENLE
      { value: '10+', label: 'Ürün kategorisi' }, // DÜZENLE
    ],
    achieved: ['Tek bir reels 9.3 milyon izlenmeye ulaştı ve viral içerik sonrası sipariş hacminde belirgin bir artış yaşandı.'],
    results: [
      { value: '9.3M', label: 'Reels izlenmesi' },
      { value: '+%300', label: 'Site trafiği' }, // DÜZENLE
      { value: '+%150', label: 'Sipariş artışı' }, // DÜZENLE
    ],
    milestones: ['Tek reels ile 9.3 milyon izlenme', 'Sosyal medyadan siteye sürekli trafik köprüsü kuruldu'],
    equipment: ['fx3', 'a7iv', 'gm90macro', 'rodentg', 'amaran200', 'premiere'],
    faq: [
      { q: 'Kastyörem hangi ürünleri satıyor?', a: 'Taşköprü sarımsağı, siyez bulguru, Tosya pirinci gibi Kastamonu yöresel ürünlerini online satıyor.' },
      { q: 'Kastyörem videosu nasıl 9.3 milyon izlendi?', a: 'Üretimin gerçek hikâyesini samimi bir dille anlatan, güven odaklı bir reels ile organik olarak viral oldu.' },
    ],
    reelIds: ['kastyorem'],
    instagram: { handle: 'kastyoremcom', bio: 'Kastamonu\'nun yöresel lezzetleri tarladan sofranıza', posts: [] },
    links: { website: 'https://kastyorem.com', maps: maps('Kastamonu') },
    keywords: ['Kastyörem', 'Kastamonu yöresel ürünler', 'Taşköprü sarımsağı', 'siyez bulguru', 'e-ticaret reels çekimi'],
  },

  /* ───────────────────────── DEFNE DEKORASYON ───────────────────────── */
  {
    slug: 'defnedekorasyondidim',
    logoName: 'Defne Dekorasyon',
    displayName: 'Defne Dekorasyon',
    sector: 'Taş Duvar & Dekoratif Kaplama',
    location: 'Didim, Aydın',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim taş duvar ve dekoratif kaplama firması için proje fotoğrafçılığı ve önce/sonra videoları',
    tagline: 'Taş duvar işçiliğini önce/sonra videolarıyla teklif getiren bir portföye dönüştürdük.',
    intro:
      'Defne Dekorasyon, Didim ve çevresinde villa, otel ve işletmelere doğal taş duvar, kültür taşı ve dekoratif duvar kaplama uygulamaları yapan bir firma. ALTUN MEDYA olarak tamamlanan projeleri belgeleyen fotoğraf ve video içeriklerini ürettik.',
    cover: cover('defnedekorasyondidim'),
    accent: '#B5A58A',
    did: [
      'Taş duvar ve dekoratif kaplama işinde müşteriyi ikna eden şey bitmiş işin kendisidir. Bu nedenle Defne Dekorasyon için içerik stratejisini "önce / sonra" ve "ustalık süreci" üzerine kurduk. Çıplak bir duvarın taş taş örülerek bir yaşam alanının odak noktasına dönüşmesini hızlandırılmış videolarla gösterdik.',
      'Tamamlanan projeleri geniş açı lens ve dengeli ışıkla çektik, taşın dokusunu yan ışıkla belirginleştirdik. Bahçe duvarları, şömine arkaları ve cephe kaplamaları için ayrı kategoriler oluşturduk. Bu içerikler "Didim taş duvar", "taş duvar ustası Didim" ve "dekoratif taş kaplama" aramalarında firmanın işçiliğini somut olarak gösteren bir portföy işlevi gördü.',
    ],
    services: [
      { title: 'Proje Fotoğrafçılığı', desc: 'Tamamlanan taş duvar uygulamalarının doku odaklı çekimi.', icon: 'camera' },
      { title: 'Önce / Sonra Videoları', desc: 'Dönüşümü anlatan hızlandırılmış reels kurguları.', icon: 'video' },
      { title: 'Usta Süreç Videoları', desc: 'İşçiliği ve detayı gösteren uygulama çekimleri.', icon: 'video' },
    ],
    made: ['Proje bazlı fotoğraf portföyü, önce/sonra reels serisi ve uygulama sürecini anlatan ustalık videoları ürettik.'],
    deliverables: [
      { value: '10+', label: 'Belgelenen proje' }, // DÜZENLE
      { value: '100+', label: 'Proje fotoğrafı' }, // DÜZENLE
      { value: '15+', label: 'Önce/sonra reels' }, // DÜZENLE
    ],
    achieved: ['Önce/sonra formatı en çok etkileşim alan içerik oldu ve teklif talepleri arttı.'], // DÜZENLE
    results: [
      { value: '+%70', label: 'Teklif talebi' }, // DÜZENLE
      { value: '10+', label: 'Proje portföyü' }, // DÜZENLE
      { value: '+%85', label: 'Etkileşim' }, // DÜZENLE
    ],
    milestones: ['Tüm projeler için dijital portföy oluşturuldu', 'Önce/sonra serisi firmanın imza içeriği oldu'],
    equipment: ['a7iv', 'gm1635', 'gm2470', 'rs4pro', 'aputure600', 'premiere'],
    faq: [
      { q: 'Defne Dekorasyon ne iş yapıyor?', a: 'Didim ve çevresinde doğal taş duvar, kültür taşı ve dekoratif duvar kaplama uygulamaları yapıyor.' },
      { q: 'Taş duvar işleri için hangi içerik formatı kullanıldı?', a: 'Önce/sonra dönüşüm videoları ve taş dokusunu öne çıkaran proje fotoğrafları kullanıldı.' },
    ],
    links: { maps: maps('Defne Dekorasyon Didim') },
    keywords: ['Defne Dekorasyon Didim', 'Didim taş duvar', 'taş duvar ustası Didim', 'dekoratif taş kaplama', 'kültür taşı Didim'],
  },

  /* ───────────────────────── CISALAX ───────────────────────── */
  {
    slug: 'cisalax',
    logoName: 'CisaLax',
    displayName: 'CisaLax',
    sector: 'Bitkisel Takviye Edici Gıda',
    location: 'Türkiye · Eczaneler',
    since: '2025', // DÜZENLE
    seoTitle: 'Eczane takviye edici gıda markası için ürün fotoğrafçılığı ve kampanya tasarımı',
    tagline: 'Bitkisel lif takviyesini güven veren, sade ve doğal bir görsel dille konumlandırdık.',
    intro:
      'CisaLax, Pharmacisa tarafından eczanelere sunulan, karnıyarık otu (psyllium), keten tohumu, inülin, kivi ve erik ekstreleri gibi bitkisel bileşenlerden oluşan bir lif takviyesi. Şeker, gluten ve laktoz içermez. ALTUN MEDYA olarak ürünün görsel iletişimini ve kampanya materyallerini hazırladık.',
    cover: cover('cisalax'),
    accent: '#5FB8A3',
    did: [
      'Takviye edici gıda kategorisinde iletişim hassastır: abartılı vaatler hem güveni zedeler hem mevzuata aykırıdır. Bu nedenle CisaLax için içerik dilini "doğal içerik ve şeffaflık" üzerine kurduk. Ürünün bitkisel bileşenlerini (kivi, erik, keten tohumu) gerçek ürünlerle birlikte görselleştirdik.',
      'Stüdyo çekimlerinde temiz beyaz ve mint tonlarında, ferah bir ışık kurgusu kullandık. Eczane vitrinleri, e-ticaret pazaryerleri ve sosyal medya için ayrı formatlarda görseller ürettik. Bu sayede "bitkisel lif takviyesi" ve "psyllium kapsül" gibi aramalarda marka profesyonel ve güvenilir bir görünüme kavuştu.',
    ],
    services: [
      { title: 'Stüdyo Ürün Fotoğrafçılığı', desc: 'Ambalaj, kapsül ve bileşen çekimleri.', icon: 'camera' },
      { title: 'Kampanya Tasarımı', desc: 'Eczane vitrin ve sosyal medya kampanya görselleri.', icon: 'brand' },
      { title: 'Bilgilendirici İçerik', desc: 'Bileşenleri anlatan mevzuata uygun sosyal medya içerikleri.', icon: 'social' },
    ],
    made: ['Ürün ambalaj seti, bileşen konsept fotoğrafları, eczane vitrin görselleri ve bilgilendirici sosyal medya kartları ürettik.'],
    deliverables: [
      { value: '60+', label: 'Kampanya görseli' }, // DÜZENLE
      { value: '40+', label: 'Ürün fotoğrafı' }, // DÜZENLE
      { value: '3', label: 'Satış kanalı formatı' },
    ],
    achieved: ['Tüm satış kanalları için standart, güven veren bir ürün görsel kimliği oluşturuldu.'],
    results: [
      { value: '3', label: 'Kanal: eczane, e-ticaret, sosyal' },
      { value: '+%50', label: 'Etkileşim' }, // DÜZENLE
      { value: '100+', label: 'Teslim edilen görsel' }, // DÜZENLE
    ],
    milestones: ['Bileşen odaklı şeffaf bir iletişim dili oluşturuldu', 'Eczane ve online kanallar için standart görseller teslim edildi'],
    equipment: ['a7iv', 'gm90macro', 'amaran200', 'aputure600', 'davinci'],
    faq: [
      { q: 'CisaLax nedir?', a: 'Psyllium, keten tohumu, inülin, kivi ve erik ekstresi gibi bitkisel bileşenler içeren, eczanelerde satılan bir lif takviyesidir.' },
      { q: 'Takviye gıda tanıtımında nelere dikkat edildi?', a: 'Abartılı vaatlerden kaçınıp bileşenleri şeffaf biçimde gösteren, mevzuata uygun bir dil kullanıldı.' },
    ],
    instagram: { handle: 'pharmacisatr', bio: 'Pharmacisa · CisaLax üreticisi', posts: [] },
    links: { maps: maps('Pharmacisa') },
    keywords: ['CisaLax', 'CisaLax kapsül', 'bitkisel lif takviyesi', 'Pharmacisa', 'ürün fotoğrafçılığı'],
  },
];
