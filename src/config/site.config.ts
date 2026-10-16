export const siteConfig = {
  name: 'ALTUN MEDYA',
  legalName: 'Altun Medya Branding & Marketing Studio',
  description: 'Didim, Aydın ve Ege bölgesinde markaları dijitalde harekete geçiren 360° medya, web tasarım, fotoğraf & video prodüksiyon ve dijital pazarlama stüdyosu.',
  url: 'https://altunmedya.com',
  email: 'info@altunmedya.com',
  phone: '+90 544 313 5557',
  address: 'Didim • Aydın • Bodrum • Kuşadası',
  social: {
    instagram: 'https://instagram.com/altunmedya',
    linkedin: 'https://linkedin.com/company/altunmedya',
    youtube: 'https://youtube.com/@altunmedya',
    whatsapp: 'https://wa.me/905443135557',
  },
  // Primary Header Navigation
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
    { name: 'İşlerimiz', href: '/#works' },
    { name: 'Referanslar', href: '/referanslar' },
    { name: 'İnfluencer ✦', href: '/influencer', isHighlight: true },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/#contact' },
  ],
  // Mobile / Full Navigation Drawer
  mobileNavigation: [
    { name: 'Anasayfa', href: '/' },
    { name: 'Kurumsal', href: '/kurumsal/hakkimizda' },
    { name: 'İşlerimiz', href: '/#works' },
    { name: 'Hizmetlerimiz', href: '/#services' },
    { name: 'İnfluencer Network ✦', href: '/influencer', isHighlight: true },
    { name: 'Didim SEO & Blog', href: '/blog' },
    { name: 'Reels Lab', href: '/#reels-section' },
    { name: 'Referanslarımız', href: '/referanslar' },
    { name: 'İletişim', href: '/#contact' },
  ],
};
