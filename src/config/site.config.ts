export const siteConfig = {
  name: 'ALTUN MEDYA',
  legalName: 'Altun Medya Branding & Marketing Studio',
  description: 'Didim, Aydın ve Ege bölgesinde markaları dijitalde harekete geçiren 360° medya, web tasarım, fotoğraf & video prodüksiyon ve dijital pazarlama stüdyosu.',
  url: 'https://altunmedya.com',
  email: 'info@altunmedya.com',
  phone: '+90 544 555 0909',
  address: 'Didim • Aydın • Bodrum • Kuşadası',
  social: {
    instagram: 'https://instagram.com/altunmedya',
    linkedin: 'https://linkedin.com/company/altunmedya',
    youtube: 'https://youtube.com/@altunmedya',
    whatsapp: 'https://wa.me/905445550909',
  },
  // Primary Header Navigation (Strictly: Anasayfa | Kurumsal [Dropdown: Hakkımızda, Biz Kimiz, Hikayemiz] | İşlerimiz | İletişim)
  navigation: [
    { name: 'Anasayfa', href: '/' },
    {
      name: 'Kurumsal',
      href: '/kurumsal/hakkimizda',
      dropdown: [
        { name: 'Hakkımızda', desc: 'Stüdyo mimarimiz, vizyon ve değerlerimiz', href: '/kurumsal/hakkimizda' },
        { name: 'Biz Kimiz', desc: 'Kreatif ekip, yönetmenler ve yazılım stüdyomuz', href: '/kurumsal/biz-kimiz' },
        { name: 'Hikayemiz', desc: "2018'den bugüne ilham veren yolculuğumuz", href: '/kurumsal/hikayemiz' },
      ],
    },
    { name: 'İşlerimiz', href: '#works' },
    { name: 'İletişim', href: '#contact' },
  ],
  // Mobile / Full Navigation Drawer
  mobileNavigation: [
    { name: 'Anasayfa', href: '#' },
    { name: 'Kurumsal', href: '#about' },
    { name: 'İşlerimiz', href: '#works' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Creator Network ✦', href: '#influencer-network', isHighlight: true },
    { name: 'Reels Lab', href: '#reels-section' },
    { name: 'Referanslarımız', href: '#partners-reviews' },
    { name: 'İletişim', href: '#contact' },
  ],
};
