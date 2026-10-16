import { type ClientProfile, maps, cover } from '../client-profile-types';

export const profilesPart2: ClientProfile[] = [
  /* ───────────────────────── DARK ROOM ───────────────────────── */
  {
    slug: 'darkroomistanbul',
    logoName: 'Dark Room İstanbul',
    displayName: 'Dark Room İstanbul',
    sector: 'Gece Kulübü',
    location: 'Bahçeşehir, İstanbul',
    since: '2025', // DÜZENLE
    seoTitle: 'İstanbul Bahçeşehir gece kulübü için etkinlik videosu, aftermovie ve gece fotoğrafçılığı',
    tagline: 'Bahçeşehir\'in karanlık, kontrastlı gece kulübü estetiğini kameraya taşıdık.',
    intro:
      'Dark Room İstanbul, Bahçeşehir Koza Mahallesi\'nde, Akbatı çevresinde DJ performansları ve tematik gecelerle öne çıkan bir gece kulübü. ALTUN MEDYA olarak kulübün etkinlik videolarını, aftermovie\'lerini ve duyuru içeriklerini ürettik.',
    cover: cover('darkroomistanbul'),
    accent: '#9A9AA8',
    did: [
      'Gece kulübü içeriğinde en büyük zorluk ışıktır: ortam karanlıktır, ışıklar hızlı değişir ve sıradan bir kamera bu enerjiyi gürültülü, bulanık görüntülere dönüştürür. Dark Room için yüksek ISO performanslı Sony A7S III ve hızlı lenslerle çalıştık, mekânın adına yakışan karanlık ve kontrastlı estetiği bozmadan net görüntüler elde ettik.',
      'Her etkinlik için iki aşamalı bir içerik döngüsü kurduk. Etkinlik öncesinde DJ ve tema duyuruları, etkinlik sonrasında ise 48 saat içinde teslim edilen aftermovie. Bu döngü hem bilet ve rezervasyon satışını destekledi hem de "Bahçeşehir gece kulübü" ve "İstanbul Avrupa yakası club" aramalarında kulübü canlı ve güncel gösterdi.',
    ],
    services: [
      { title: 'Etkinlik Aftermovie', desc: 'Her geceden 48 saat içinde teslim edilen kurgu.', icon: 'video' },
      { title: 'Gece Fotoğrafçılığı', desc: 'Düşük ışıkta DJ, kalabalık ve ışık şovu kareleri.', icon: 'camera' },
      { title: 'Etkinlik Duyuruları', desc: 'DJ ve tema tanıtım görselleri, story içerikleri.', icon: 'social' },
    ],
    made: ['Etkinlik bazlı aftermovie serisi, DJ tanıtım reels\'leri, gece fotoğraf albümleri ve haftalık duyuru tasarımları ürettik.'],
    deliverables: [
      { value: '15+', label: 'Etkinlik çekimi' }, // DÜZENLE
      { value: '50+', label: 'Reels & story' }, // DÜZENLE
      { value: '48 sa', label: 'Aftermovie teslim' },
    ],
    achieved: ['Etkinlik öncesi ve sonrası içerik döngüsüyle kulübün erişimi ve rezervasyon talepleri arttı.'], // DÜZENLE
    results: [
      { value: '+%85', label: 'Etkinlik erişimi' }, // DÜZENLE
      { value: '48 sa', label: 'Teslim süresi' },
      { value: '+%40', label: 'Rezervasyon' }, // DÜZENLE
    ],
    milestones: ['Her etkinlik için 48 saatte aftermovie', 'Kulübe özel karanlık ve kontrastlı görsel dil'],
    equipment: ['a7siii', 'fx3', 'sigma35', 'nanlite', 'rs4pro', 'davinci'],
    faq: [
      { q: 'Dark Room İstanbul nerede?', a: 'Bahçeşehir Koza Mahallesi\'nde, Akbatı ve Akkoza çevresinde yer alıyor.' },
      { q: 'Gece kulübü çekimlerinde hangi ekipman kullanıldı?', a: 'Düşük ışıkta net görüntü için Sony A7S III, FX3 ve hızlı f/1.4 lensler kullanıldı.' },
    ],
    instagram: { handle: 'darkroom.bahcesehir', bio: 'Night Club · Bahçeşehir / İstanbul', posts: [] },
    links: { maps: maps('Dark Room Bahçeşehir İstanbul') },
    keywords: ['Dark Room İstanbul', 'Bahçeşehir gece kulübü', 'İstanbul club', 'etkinlik video çekimi', 'aftermovie çekimi'],
  },

  /* ───────────────────────── SQ BEACH ───────────────────────── */
  {
    slug: 'sqbeachclubdidim',
    logoName: 'SQ Beach Club Didim',
    displayName: 'SQ Beach & Club',
    sector: 'Beach & Night Club',
    location: 'Altınkum, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim Altınkum beach club sezon lansmanı: reels prodüksiyonu, Meta Ads ve influencer marketing',
    tagline: 'Sezon öncesi lansmanla rezervasyonları %340 artırdık.',
    intro:
      'SQ Beach & Club, Didim Altınkum sahil şeridinde gündüz beach, gece konser ve DJ performanslarıyla çalışan bir mekân. ALTUN MEDYA olarak mekânın sezon lansman kampanyasını uçtan uca yönettik.',
    cover: cover('sqbeachclubdidim'),
    accent: '#3FB6C9',
    did: [
      'Beach club\'lar için sezonun ilk haftaları kritiktir: Mayıs ve Haziran\'da oluşan algı tüm yazı belirler. SQ Beach için sezon açılmadan önce 4K dikey reels çekimleri yaptık ve mekânı tatil planı yapan kitleye erkenden gösterdik.',
      'Çekimleri Meta Ads lansman kampanyasıyla birleştirdik: Didim\'e gelecek turistleri, yazlıkçıları ve çevre illerden hafta sonu gelen kitleyi ayrı ayrı hedefledik. Bölgeye uygun influencer iş birlikleriyle mekânın gerçek misafir deneyimini gösterdik. Sonuç olarak "Didim beach club" ve "Altınkum plaj" aramalarında mekân sezonun en çok konuşulan adreslerinden biri oldu.',
    ],
    services: [
      { title: '4K Reels Prodüksiyonu', desc: 'Sezon öncesi dikey tanıtım videoları.', icon: 'video' },
      { title: 'Meta Ads Lansmanı', desc: 'Turist, yazlıkçı ve hafta sonu kitlesine ayrı kampanyalar.', icon: 'ads' },
      { title: 'Influencer Marketing', desc: 'Bölgeye uygun içerik üreticileriyle iş birlikleri.', icon: 'influencer' },
    ],
    made: ['Sezon lansman filmi, 4K dikey reels serisi, Meta reklam kreatifleri ve influencer iş birliği içerikleri ürettik.'],
    deliverables: [
      { value: '1', label: 'Lansman kampanyası' },
      { value: '20+', label: '4K reels' }, // DÜZENLE
      { value: '10+', label: 'Influencer iş birliği' }, // DÜZENLE
    ],
    achieved: ['Lansman kampanyasıyla rezervasyonlarda %340 artış sağlandı.'],
    results: [
      { value: '+%340', label: 'Rezervasyon artışı' },
      { value: '4K', label: 'Dikey prodüksiyon' },
      { value: '10+', label: 'Influencer' }, // DÜZENLE
    ],
    milestones: ['Rezervasyonlarda %340 artış', 'Sezon öncesi güçlü bilinirlik'],
    equipment: ['fx3', 'mavic3pro', 'gm2470', 'rs4pro', 'premiere'],
    faq: [
      { q: 'SQ Beach Didim\'in neresinde?', a: 'Didim Altınkum sahil şeridinde yer alıyor.' },
      { q: 'Rezervasyonlar nasıl %340 arttı?', a: 'Sezon öncesi 4K reels çekimleri, hedefli Meta Ads kampanyası ve influencer iş birlikleri birlikte kurgulandı.' },
    ],
    links: { maps: maps('SQ Beach Club Altınkum Didim') },
    keywords: ['SQ Beach Didim', 'Didim beach club', 'Altınkum plaj', 'Didim Meta reklam', 'Didim sosyal medya ajansı'],
  },

  /* ───────────────────────── MNA KUYUMCULUK ───────────────────────── */
  {
    slug: 'mnakuyumculukdidim',
    logoName: 'MNA Kuyumculuk',
    displayName: 'MNA Kuyumculuk',
    sector: 'Kuyumcu & Mücevher',
    location: 'Yeni Mahalle, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim kuyumcu için kampanya reels\'i, makro mücevher çekimi ve sosyal medya',
    tagline: 'Yılbaşı çekiliş kampanyasıyla 4.3 milyon izlenmeye ulaştık.',
    intro:
      'MNA Kuyumculuk, Didim Yeni Mahalle\'de altın, pırlanta ve özel tasarım mücevher satışı yapan bir kuyumcu. ALTUN MEDYA olarak markanın kampanya videolarını, makro ürün çekimlerini ve sosyal medya içeriklerini üretiyoruz.',
    cover: cover('mnakuyumculukdidim'),
    accent: '#D4AF37',
    did: [
      'Kuyumculukta ürün küçük, detay büyüktür: bir yüzüğün taşındaki ışık kırılımı ya da bir zincirin işçiliği satın alma kararını doğrudan etkiler. MNA için makro lens ve kontrollü stüdyo ışığıyla her ürünün parıltısını ve işçiliğini öne çıkaran çekimler yaptık.',
      'En büyük hamle ise yılbaşı çekiliş kampanyası oldu. Katılımı kolay, paylaşımı teşvik eden ve heyecanı canlı tutan bir reels kurgusu tasarladık. Kampanya Didim\'in sınırlarını aşarak tüm Ege\'de konuşuldu ve "Didim kuyumcu", "Didim altın" aramalarında marka bilinirliğini katladı.',
    ],
    services: [
      { title: 'Kampanya Reels\'i', desc: 'Çekiliş ve özel gün kampanya videoları.', icon: 'video' },
      { title: 'Makro Mücevher Çekimi', desc: 'Yüzük, kolye ve bilezik detay fotoğrafları.', icon: 'camera' },
      { title: 'Sosyal Medya Yönetimi', desc: 'Ürün, kampanya ve özel gün içerik planı.', icon: 'social' },
    ],
    made: ['Yılbaşı çekiliş kampanyası, sevgililer günü ve anneler günü kampanya videoları, makro ürün kataloğu ve haftalık ürün paylaşımları ürettik.'],
    deliverables: [
      { value: '1', label: 'Viral çekiliş kampanyası' },
      { value: '30+', label: 'Makro ürün çekimi' }, // DÜZENLE
      { value: '20+', label: 'Reels' }, // DÜZENLE
    ],
    achieved: ['Yılbaşı çekilişi 4.3 milyon izlenmeyle viral oldu ve markanın takipçi kitlesi hızla büyüdü.'],
    results: [
      { value: '4.3M', label: 'Kampanya izlenmesi' },
      { value: '+%250', label: 'Takipçi artışı' }, // DÜZENLE
      { value: '+%60', label: 'Mağaza trafiği' }, // DÜZENLE
    ],
    milestones: ['Çekiliş kampanyası 4.3 milyon izlenme', 'Ege genelinde marka bilinirliği'],
    equipment: ['a7iv', 'gm90macro', 'fx3', 'amaran200', 'aputure600', 'davinci'],
    faq: [
      { q: 'MNA Kuyumculuk nerede?', a: 'Didim Yeni Mahalle 830. Sokak\'ta, Kent Lokantası karşısında yer alıyor.' },
      { q: 'Kuyumcu kampanyası nasıl viral oldu?', a: 'Katılımı kolay ve paylaşımı teşvik eden bir yılbaşı çekiliş kurgusu, organik olarak 4.3 milyon izlenmeye ulaştı.' },
    ],
    reelIds: ['mna-kuyumculuk'],
    instagram: { handle: 'mnakuyumculukdidim', bio: 'Altın · Pırlanta · Didim', posts: [] },
    links: { maps: maps('MNA Kuyumculuk Didim'), phone: '+905322123309' },
    keywords: ['MNA Kuyumculuk Didim', 'Didim kuyumcu', 'Didim altın', 'kuyumcu reklam çekimi', 'mücevher fotoğrafçılığı'],
  },

  /* ───────────────────────── VAY VAY ───────────────────────── */
  {
    slug: 'vayvaydidim',
    logoName: 'Vay Vay',
    displayName: 'Vay Vay',
    sector: 'Restoran & Bar',
    location: 'Çamlık, Didim',
    since: '2025', // DÜZENLE
    seoTitle: 'Didim restoran & bar için reels prodüksiyonu, kokteyl fotoğrafçılığı ve sosyal medya',
    tagline: 'Yalı Caddesi\'ndeki restoran & barın enerjisini paylaşılabilir içeriklere dönüştürdük.',
    intro:
      'Vay Vay, Didim Çamlık Mahallesi Yalı Caddesi\'nde yemek, kokteyl ve müziği bir araya getiren bir restoran & bar. ALTUN MEDYA olarak mekânın reels ve fotoğraf içeriklerini üretiyoruz.',
    accent: '#E8B04A',
    did: [
      'Markanın ismi zaten bir duygu: "vay vay!". İçerik stratejisini de bu tepkiyi izleyicide uyandırmak üzerine kurduk. Tabakların masaya geldiği an, kokteylin hazırlanışı, barmenin şovu ve akşam ilerledikçe yükselen müzik.',
      'Kokteyl çekimlerinde RGB tüp ışıklarla renkli, enerjik bir atmosfer yarattık; yemeklerde makro lensle iştah açıcı detaylar yakaladık. Hızlı kesmeli, ritmik reels kurgularıyla "Didim bar", "Didim kokteyl" ve "Yalı Caddesi restoran" aramalarında mekânı genç ve dinamik bir adres olarak konumlandırdık.',
    ],
    services: [
      { title: 'Reels Prodüksiyonu', desc: 'Ritmik, hızlı kesmeli yemek ve bar videoları.', icon: 'video' },
      { title: 'Kokteyl & Yemek Fotoğrafı', desc: 'RGB ışıklı bar ve makro menü çekimleri.', icon: 'camera' },
      { title: 'Sosyal Medya Yönetimi', desc: 'Haftalık içerik ve etkinlik planı.', icon: 'social' }, // DÜZENLE
    ],
    made: ['Kokteyl menüsü fotoğraf seti, barmen şov videoları, yemek reels serisi ve etkinlik gecesi duyuruları ürettik.'],
    deliverables: [
      { value: '25+', label: 'Reels' }, // DÜZENLE
      { value: '60+', label: 'Kokteyl & menü fotoğrafı' }, // DÜZENLE
      { value: '10+', label: 'Etkinlik duyurusu' }, // DÜZENLE
    ],
    achieved: ['Ritmik reels formatı mekânın en çok etkileşim alan içerik türü oldu.'], // DÜZENLE
    results: [
      { value: '+%95', label: 'Etkileşim' }, // DÜZENLE
      { value: '150K+', label: 'Toplam erişim' }, // DÜZENLE
      { value: '25+', label: 'Üretilen içerik' }, // DÜZENLE
    ],
    milestones: ['Markaya özel ritmik reels formatı geliştirildi', 'Kokteyl menüsü tamamen yeniden çekildi'],
    equipment: ['fx3', 'gm90macro', 'sigma35', 'nanlite', 'rs4pro', 'premiere'],
    faq: [
      { q: 'Vay Vay Didim nerede?', a: 'Didim Çamlık Mahallesi Yalı Caddesi üzerinde yer alıyor.' },
      { q: 'Bar çekimlerinde nasıl bir ışık kullanıldı?', a: 'Kokteyllerde RGB tüp ışıklarla renkli ve enerjik bir atmosfer kuruldu.' },
    ],
    instagram: { handle: 'vayvay.didim', bio: 'Restoran & Bar · Yalı Caddesi / Didim', posts: [] },
    links: { website: 'https://vayvay.tr', maps: maps('Vay Vay Didim Yalı Caddesi') },
    keywords: ['Vay Vay Didim', 'Didim bar', 'Didim restoran', 'Didim kokteyl', 'Yalı Caddesi restoran'],
  },

  /* ───────────────────────── MERTSKY ───────────────────────── */
  {
    slug: 'mertsky',
    logoName: 'Mertsky',
    displayName: 'MertSky Telekomünikasyon',
    sector: 'İnternet Servis Sağlayıcı',
    location: 'Didim, Aydın',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim internet servis sağlayıcısı için sosyal medya yönetimi, kampanya tasarımı ve dijital reklam',
    tagline: 'Didim\'in yerel internet sağlayıcısının fiber ve kablosuz internet kampanyalarını dijitalde büyüttük.',
    intro:
      'MertSky Telekomünikasyon, Didim ve çevresinde ev ve işletmelere fiber altyapılı ve kablosuz internet hizmeti sunan yerel bir internet servis sağlayıcı. ALTUN MEDYA olarak markanın kampanya iletişimini, sosyal medya içeriklerini ve dijital reklamlarını yönetiyoruz.',
    accent: '#3B82F6',
    did: [
      'İnternet sağlayıcı seçimi; hız, kesintisizlik ve kurulum kolaylığı üzerine verilen bir karardır. Ancak bu teknik kavramlar sosyal medyada sıkıcı kalabilir. MertSky için bu teknik avantajları günlük hayattan sahnelerle anlattık: yazlığında evden çalışan biri, maç izleyen bir aile, sezonda yoğunlaşan bir kafe.',
      'Didim\'in kendine özgü bir ihtiyacı var: yaz aylarında nüfus katlanıyor ve yazlıkçılar, apart ve pansiyon işletmeleri hızlı kurulum ve sezonluk çözümler arıyor. Kampanya iletişimini bu kitleye göre kurguladık, Meta ve Google reklamlarını "Didim internet", "Didim fiber internet" ve "Didim wifi bağlatma" aramalarına göre konumlandırdık.',
      'Tüm kampanya görsellerinde net bir bilgi hiyerarşisi kurduk: paket hızı, fiyat ve iletişim kanalı ilk bakışta okunuyor. Böylece reklamdan doğrudan aramaya ve WhatsApp başvurusuna giden kısa bir yol oluştu.',
    ],
    services: [
      { title: 'Sosyal Medya Yönetimi', desc: 'Kampanya duyuruları, bilgilendirici ve günlük hayat içerikleri.', icon: 'social' },
      { title: 'Kampanya Tasarımı', desc: 'Paket ve fiyat odaklı net, okunur görseller.', icon: 'brand' },
      { title: 'Meta & Google Reklamları', desc: 'Didim internet aramalarına ve yazlıkçı kitlesine hedefli reklam.', icon: 'ads' },
      { title: 'Tanıtım Videoları', desc: 'Kurulum süreci ve hizmet tanıtım reels\'leri.', icon: 'video' }, // DÜZENLE
    ],
    made: ['Fiber ve kablosuz internet paketleri için kampanya görselleri, kurulum sürecini anlatan videolar, sezon kampanyaları ve bilgilendirici sosyal medya serileri ürettik.'],
    deliverables: [
      { value: '80+', label: 'Kampanya görseli' }, // DÜZENLE
      { value: '15+', label: 'Tanıtım videosu' }, // DÜZENLE
      { value: '4', label: 'Sezon kampanyası' }, // DÜZENLE
    ],
    achieved: ['Hedefli reklamlar ve net kampanya diliyle başvuru sayısında belirgin artış sağlandı.'], // DÜZENLE
    results: [
      { value: '+%210', label: 'Başvuru talebi' }, // DÜZENLE
      { value: '+%120', label: 'WhatsApp iletişim' }, // DÜZENLE
      { value: 'Top 3', label: '"Didim internet" araması' }, // DÜZENLE
    ],
    milestones: ['Yazlıkçı ve işletmelere özel kampanya dili', 'Reklamdan başvuruya kısa dönüşüm yolu'],
    equipment: ['fx3', 'a7iv', 'gm2470', 'rodewireless', 'premiere'],
    faq: [
      { q: 'MertSky ne hizmeti veriyor?', a: 'Didim ve çevresinde ev ve işletmelere fiber altyapılı ve kablosuz internet hizmeti sunan yerel bir internet servis sağlayıcıdır.' },
      { q: 'İnternet sağlayıcı için dijital pazarlamada neye odaklanıldı?', a: 'Paket hızı, fiyat ve hızlı kurulum mesajlarını yazlıkçı ve işletme kitlesine hedefli reklamlarla ulaştırmaya odaklanıldı.' },
    ],
    instagram: { handle: 'mertsky.com.tr', bio: 'Didim\'in internet sağlayıcısı · Fiber & Kablosuz', posts: [] },
    links: { website: 'https://mertsky.com.tr', maps: maps('MertSky Didim') },
    keywords: ['MertSky', 'Didim internet', 'Didim fiber internet', 'Didim internet sağlayıcı', 'Didim wifi'],
  },

  /* ───────────────────────── HALIL USTA ───────────────────────── */
  {
    slug: 'halilustaford',
    logoName: 'Halil Usta Ford Servis',
    displayName: 'Halil Usta Ford Özel Servis',
    sector: 'Ford Özel Servis',
    location: 'Cumhuriyet Mah., Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim Ford özel servis için konuşmalı tanıtım videosu ve oto servis dijital pazarlama',
    tagline: 'Ustanın kendi anlatımıyla güveni anlatan kurgu 1.1 milyon izlendi.',
    intro:
      'Halil Usta Ford Özel Servis, Didim Cumhuriyet Mahallesi\'nde Ford araçlara motor ve şanzıman revizyonu, diferansiyel, elektronik arıza tespiti ve DPF/EGR çözümleri sunan bir özel servis. ALTUN MEDYA olarak servisin tanıtım videolarını ve sosyal medya içeriklerini ürettik.',
    cover: '/videos/reels/posters/halil-usta.jpg',
    accent: '#3A6FD8',
    did: [
      'Oto serviste müşteri en çok "aracım güvenilir ellerde mi?" diye düşünür. Bu sorunun en iyi cevabı ustanın kendisidir. Halil Usta için konuşmalı, ustanın kendi sesiyle anlattığı tanıtım videoları kurguladık. Kablosuz yaka mikrofonlarıyla atölye gürültüsüne rağmen temiz ses kaydı aldık.',
      'Videolarda DPF temizliği, şanzıman revizyonu ve elektronik arıza tespiti gibi teknik işlemleri sade ve anlaşılır bir dille anlattık. Bu samimi ve bilgilendirici format "Didim Ford servis", "Didim oto tamir" ve "DPF temizleme Didim" aramalarında servisi uzman ve güvenilir bir adres olarak öne çıkardı.',
    ],
    services: [
      { title: 'Konuşmalı Tanıtım Videosu', desc: 'Usta anlatımlı, güven odaklı reels.', icon: 'video' },
      { title: 'Bilgilendirici Teknik İçerik', desc: 'DPF, EGR, şanzıman işlemlerini anlatan seri.', icon: 'video' },
      { title: 'Google İşletme Optimizasyonu', desc: 'Harita görünürlüğü ve yorum yönetimi.', icon: 'seo' }, // DÜZENLE
    ],
    made: ['Ustanın anlatımıyla servis tanıtımı, teknik işlemleri açıklayan bilgilendirici video serisi ve atölye fotoğrafları ürettik.'],
    deliverables: [
      { value: '1', label: 'Konuşmalı tanıtım' },
      { value: '10+', label: 'Teknik bilgi videosu' }, // DÜZENLE
      { value: '30+', label: 'Atölye fotoğrafı' }, // DÜZENLE
    ],
    achieved: ['Tanıtım videosu 1.1 milyon izlenmeye ulaştı. Ustanın anlatımı markanın en güçlü güven unsuru oldu.'],
    results: [
      { value: '1.1M', label: 'Reels izlenmesi' },
      { value: '+%60', label: 'Randevu talebi' }, // DÜZENLE
      { value: '10+', label: 'Üretilen içerik' }, // DÜZENLE
    ],
    milestones: ['Konuşmalı tanıtım 1.1 milyon izlenme', 'Teknik konular sade bir dille anlatıldı'],
    equipment: ['fx3', 'gm2470', 'rodewireless', 'rs4pro', 'amaran200', 'premiere'],
    faq: [
      { q: 'Halil Usta Ford Özel Servis hangi hizmetleri veriyor?', a: 'Ford araçlara motor ve şanzıman revizyonu, diferansiyel, elektronik arıza tespiti ve DPF/EGR çözümleri sunuyor.' },
      { q: 'Servis tanıtımında neden konuşmalı video tercih edildi?', a: 'Müşteri güvenini en iyi ustanın kendi anlatımı sağladığı için samimi, konuşmalı format seçildi.' },
    ],
    reelIds: ['halil-usta'],
    instagram: { handle: 'halilustaozelservis', bio: 'Ford Özel Servis · Motor · Şanzıman · DPF/EGR · Didim', posts: [] },
    links: { maps: maps('Halil Usta Ford Özel Servis Didim') },
    keywords: ['Halil Usta Ford Servis', 'Didim Ford servis', 'Didim oto tamir', 'DPF temizleme Didim', 'şanzıman revizyonu'],
  },

  /* ───────────────────────── BULVAR KÜNEFE ───────────────────────── */
  {
    slug: 'bulvarkunefe',
    logoName: 'Bulvar Künefe',
    displayName: 'Didim Bulvar Künefe',
    sector: 'Künefe & Tatlı',
    location: 'Atatürk Bulvarı, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim künefeci için yakın plan ürün reels\'i, yemek fotoğrafçılığı ve paket servis kampanyası',
    tagline: 'Sıcak künefenin uzayan peynirini ekranın öbür ucuna taşıdık.',
    intro:
      'Didim Bulvar Künefe, Atatürk Bulvarı üzerinde mağaza ve paket servisle künefe sunan bir tatlıcı. ALTUN MEDYA olarak ürünün iştah açıcı videolarını ve kampanya görsellerini ürettik.',
    accent: '#E39B3B',
    did: [
      'Künefede her şey o tek anda gizli: tepsiden kaldırılan dilimde uzayan sıcak peynir. Bulvar Künefe için tüm içerik stratejisini bu "peynir çekme" anı etrafında kurduk. Makro lens, ağır çekim ve yan ışıkla şerbetin parlaklığını, kadayıfın çıtırlığını ve peynirin uzamasını yakın plan kaydettik.',
      'Paket servis siparişlerini artırmak için kısa, net mesajlı reels\'ler hazırladık: ürün, fiyat ve sipariş hattı ilk saniyelerde görünüyor. Bu sayede "Didim künefe", "Didim tatlıcı" ve "Didim paket künefe" aramalarında marka akla ilk gelen adres oldu.',
    ],
    services: [
      { title: 'Ağır Çekim Ürün Reels\'i', desc: 'Peynir çekme anını yakalayan makro videolar.', icon: 'video' },
      { title: 'Yemek Fotoğrafçılığı', desc: 'Menü ve kampanya görselleri.', icon: 'camera' },
      { title: 'Paket Servis Kampanyası', desc: 'Sipariş hattına yönlendiren kısa reklam içerikleri.', icon: 'ads' }, // DÜZENLE
    ],
    made: ['Ağır çekim ürün videoları, menü fotoğraf seti ve paket servis kampanya içerikleri ürettik.'],
    deliverables: [
      { value: '20+', label: 'Ürün reels\'i' }, // DÜZENLE
      { value: '30+', label: 'Menü fotoğrafı' }, // DÜZENLE
      { value: '5', label: 'Kampanya' }, // DÜZENLE
    ],
    achieved: ['Yakın plan ürün videoları en çok kaydedilen içerikler oldu ve paket servis siparişleri arttı.'], // DÜZENLE
    results: [
      { value: '+%45', label: 'Paket sipariş' }, // DÜZENLE
      { value: '100K+', label: 'Toplam erişim' }, // DÜZENLE
      { value: '20+', label: 'Üretilen içerik' }, // DÜZENLE
    ],
    milestones: ['"Peynir çekme" anı markanın imza görseli oldu', 'Paket servis için net mesajlı kampanyalar'],
    equipment: ['fx3', 'gm90macro', 'amaran200', 'rodentg', 'davinci'],
    faq: [
      { q: 'Bulvar Künefe nerede?', a: 'Didim Yeni Mahalle Atatürk Bulvarı No:102/A adresinde yer alıyor.' },
      { q: 'Künefe çekimlerinde hangi teknik kullanıldı?', a: 'Makro lens, ağır çekim ve yan ışıkla peynir çekme anı yakın plan kaydedildi.' },
    ],
    instagram: { handle: 'bulvarkunefe', bio: 'Didim Bulvar Künefe · Paket servis: 0546 591 18 45', posts: [] },
    links: { maps: maps('Didim Bulvar Künefe Atatürk Bulvarı'), phone: '+905465911845' },
    keywords: ['Bulvar Künefe', 'Didim künefe', 'Didim tatlıcı', 'Didim paket künefe', 'yemek reels çekimi'],
  },

  /* ───────────────────────── ONYX LOUNGE ───────────────────────── */
  {
    slug: 'onyxlounge',
    logoName: 'Onyx Lounge',
    displayName: 'Onyx Lounge',
    sector: 'Marina Lounge',
    location: 'D-Marin, Didim',
    since: '2024', // DÜZENLE
    seoTitle: 'Didim D-Marin lounge için atmosfer odaklı foto-video prodüksiyonu ve sosyal medya',
    tagline: 'D-Marin\'in yat manzaralı lounge\'una premium bir görsel kimlik kazandırdık.',
    intro:
      'Onyx Lounge, Didim D-Marin yat limanında marina manzarasıyla yemek, içecek ve müzik sunan premium bir lounge. ALTUN MEDYA olarak mekânın atmosfer odaklı fotoğraf ve video içeriklerini ürettik.',
    accent: '#7D7DA8',
    did: [
      'Marina lounge\'larının en güçlü sahnesi manzaradır: lüks yatlar, gün batımı ve akşam yanan liman ışıkları. Onyx Lounge için içerikleri bu manzarayı mekânın kendisiyle birleştiren kadrajlar üzerine kurduk. Gün batımında yatlara bakan masalar, kokteyl detayları ve gece loş ışıkta lounge atmosferi.',
      'D-Marin\'e gelen yerli ve yabancı yatçılar ile Didim\'in premium kitlesine hitap eden sakin, şık ve dengeli bir görsel dil oluşturduk. "D-Marin restoran", "Didim marina lounge" ve "Didim gün batımı" aramalarında mekânı premium bir buluşma noktası olarak konumlandırdık.',
    ],
    services: [
      { title: 'Atmosfer Prodüksiyonu', desc: 'Marina manzaralı foto ve video çekimleri.', icon: 'video' },
      { title: 'Drone Çekimi', desc: 'D-Marin ve mekân konumunu gösteren havadan planlar.', icon: 'drone' },
      { title: 'Etkinlik Görselleri', desc: 'Özel gece ve menü duyuru tasarımları.', icon: 'brand' },
    ],
    made: ['Marina manzaralı tanıtım videosu, gün batımı ve gece atmosfer fotoğrafları, menü görselleri ve etkinlik duyuruları ürettik.'],
    deliverables: [
      { value: '15+', label: 'Reels' }, // DÜZENLE
      { value: '80+', label: 'Atmosfer fotoğrafı' }, // DÜZENLE
      { value: '30+', label: 'Etkinlik görseli' }, // DÜZENLE
    ],
    achieved: ['Mekâna özel, marina manzarasıyla bütünleşen tutarlı bir premium görsel dil oluşturuldu.'],
    results: [
      { value: '+%70', label: 'Etkileşim' }, // DÜZENLE
      { value: '+%35', label: 'Rezervasyon' }, // DÜZENLE
      { value: '15+', label: 'Reels' }, // DÜZENLE
    ],
    milestones: ['Marina manzarası mekânın imza görseli oldu', 'Premium ve tutarlı bir görsel dil'],
    equipment: ['fx3', 'mavic3pro', 'sigma35', 'gm2470', 'rs4pro', 'davinci'],
    faq: [
      { q: 'Onyx Lounge nerede?', a: 'Didim D-Marin yat limanı içinde, marina manzaralı bir konumda yer alıyor.' },
      { q: 'Lounge çekimlerinde öne çıkan unsur neydi?', a: 'Yat limanı manzarası ve gün batımı ile mekân atmosferini birleştiren kadrajlar.' },
    ],
    instagram: { handle: 'onyxlounge.co', bio: 'Lounge · D-Marin / Didim', posts: [] },
    links: { maps: maps('Onyx Lounge D-Marin Didim') },
    keywords: ['Onyx Lounge', 'D-Marin restoran', 'Didim marina lounge', 'Didim lounge', 'Didim gün batımı'],
  },
];
