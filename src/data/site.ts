// Owner profile. Empty strings render as dim "not yet added" slots on the page.
export const profile = {
  name: 'Deniz Arhın',
  itch: 'https://d3xs.itch.io',
  github: 'https://github.com/d3xsz',
  email: 'arhindeniz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deniz-arh%C4%B1n-798521291/',
};

export type Lang = 'tr' | 'en';

// Copy written with Deniz, 2026-11-21 (TR source, EN translation).
export const t = {
  tr: {
    htmlTitle: 'Deniz Arhın · Oyun geliştirici',
    role: 'Oyun geliştirici',
    metaDescription:
      'Deniz Arhın: Beykent Üniversitesi Dijital Oyun Tasarımı son sınıf öğrencisi. Unity ile çok oyunculu oyunlar ve hızlı prototipler. Son Hasat, Eggous, Polar Clash ve diğerleri.',
    nav: { games: 'Oyunlar', about: 'Hakkımda', contact: 'İletişim' },
    skip: 'İçeriğe geç',
    tagline:
      'Unity ile çok oyunculu oyunlar ve hızlı prototipler geliştiriyorum.',
    about: [
      'İstanbul Beykent Üniversitesi Dijital Oyun Tasarımı bölümünde son sınıf öğrencisiyim. Yerel ağ ve çevrim içi ortak oyundan aynı klavyede oynanan düellolara kadar çok oyunculu sistemler kuruyor, fikirleri kısa sürede oynanabilir prototiplere dönüştürüyorum.',
      'Staj, tam zamanlı iş ve freelance projelere açığım.',
    ],
    featuredHeading: 'Öne çıkan oyun',
    play: 'Oyna',
    playHint: 'itch.io’da indir',
    source: 'Kaynak',
    sourceNone: 'Kaynak kapalı',
    shotLabel: (n: number, total: number) => `Ekran görüntüsü ${n} / ${total}`,
    pause: 'Durdur',
    resume: 'Oynat',
    stagesHeading: 'Diğer oyunlar',
    stagesIntro: 'Hepsi Windows için, itch.io’dan ücretsiz indirilebilir.',
    withPartner: 'ile birlikte',
    inDev: 'Geliştirmede',
    contactHeading: 'İletişim',
    contactIntro: 'Staj, iş ya da freelance bir proje için e-posta veya LinkedIn üzerinden ulaşabilirsin.',
    email: 'E-posta',
    notAdded: 'Eklenecek',
    footer: 'Tüm oyun görselleri ilgili oyunların itch.io sayfalarından.',
    langSwitch: 'Dil',
  },
  en: {
    htmlTitle: 'Deniz Arhın · Game developer',
    role: 'Game developer',
    metaDescription:
      'Deniz Arhın: final-year Digital Game Design student at Beykent University. Multiplayer games and fast prototypes in Unity. Son Hasat, Eggous, Polar Clash and more.',
    nav: { games: 'Games', about: 'About', contact: 'Contact' },
    skip: 'Skip to content',
    tagline:
      'I build multiplayer games and fast prototypes in Unity.',
    about: [
      'I’m a final-year Digital Game Design student at Beykent University in Istanbul. I build multiplayer systems, from LAN and online co-op to duels on a shared keyboard, and I turn ideas into playable prototypes quickly.',
      'I’m open to internships, full-time roles and freelance projects.',
    ],
    featuredHeading: 'Featured game',
    play: 'Play',
    playHint: 'Download on itch.io',
    source: 'Source',
    sourceNone: 'Source closed',
    shotLabel: (n: number, total: number) => `Screenshot ${n} of ${total}`,
    pause: 'Pause',
    resume: 'Play',
    stagesHeading: 'More games',
    stagesIntro: 'All for Windows, free to download on itch.io.',
    withPartner: 'with',
    inDev: 'In development',
    contactHeading: 'Contact',
    contactIntro: 'For an internship, a job or a freelance project, reach me by email or LinkedIn.',
    email: 'Email',
    notAdded: 'Coming soon',
    footer: 'All game images are from each game’s itch.io page.',
    langSwitch: 'Language',
  },
} as const;
