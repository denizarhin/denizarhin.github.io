import type { ImageMetadata } from 'astro';
import { featured, games } from './games';

// TASLAK / DRAFT: role and system lists are drawn from each game's itch.io page
// (2026-11-21); networking per game confirmed by Deniz. Edit freely.

type Text = { tr: string; en: string };
type List = { tr: string[]; en: string[] };

export interface GameDetail {
  slug: string;
  role: Text;
  systems: List;
  facts: { label: Text; value: Text }[];
  context?: Text;
}

// Every screenshot in src/assets/games/<slug>/, in file order.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/games/*/*.{jpg,png}', { eager: true });
const shotsBySlug: Record<string, { name: string; src: ImageMetadata }[]> = {};
for (const [path, mod] of Object.entries(files)) {
  const [, slug, name] = path.match(/games\/([^/]+)\/([^/]+)$/)!;
  (shotsBySlug[slug] ??= []).push({ name, src: mod.default });
}
for (const list of Object.values(shotsBySlug)) list.sort((a, b) => a.name.localeCompare(b.name));

export function shotsFor(slug: string): ImageMetadata[] {
  if (slug === featured.slug) return featured.shots.map((s) => s.src); // owner's order, menu first
  return (shotsBySlug[slug] ?? []).map((s) => s.src);
}

const solo: Text = {
  tr: 'Oyunu tek başıma tasarlayıp geliştirdim: oyun tasarımı, programlama ve oynanış sistemleri.',
  en: 'I designed and built the game on my own: game design, programming and gameplay systems.',
};

export const details: Record<string, GameDetail> = {
  'son-hasat': {
    slug: 'son-hasat',
    role: solo,
    systems: {
      tr: [
        'Netcode for GameObjects ile 1–4 kişilik LAN co-op: IP ile host/katıl lobisi, yere düşen takım arkadaşını canlandırma.',
        'Üç bölüm, üç ayrı mekanik: fener ısısını yöneterek totem taşıma, ışığı kristallerle yansıtıp kapı açma, sesle avlanan “Dinleyen” yaratığından saklanma.',
        'Rüya bölümünde ışık dengesi: fener bir ışığı açarken diğerini kısıyor; kilitli yataklar bulmacalarla açılıyor.',
        'Host’un başlangıç bölümünü seçebildiği menü.',
      ],
      en: [
        '1–4 player LAN co-op with Netcode for GameObjects: host/join lobby by IP, reviving a downed teammate.',
        'Three chapters, three mechanics: carrying totems while managing a lantern’s heat, reflecting light with crystals to open doors, hiding from “the Listener”, a creature that hunts by sound.',
        'Light balance in the dream chapter: the lantern brightens one light and dims another; locked beds open through puzzles.',
        'A menu that lets the host choose the starting chapter.',
      ],
    },
    facts: [
      { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Gerilim · Bulmaca', en: 'Tension · Puzzle' } },
      { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: '1–4, LAN co-op', en: '1–4, LAN co-op' } },
      { label: { tr: 'Ağ', en: 'Networking' }, value: { tr: 'Netcode for GameObjects', en: 'Netcode for GameObjects' } },
      { label: { tr: 'Motor', en: 'Engine' }, value: { tr: 'Unity', en: 'Unity' } },
    ],
  },
  eggous: {
    slug: 'eggous',
    role: solo,
    systems: {
      tr: [
        'Photon ile 2–8 kişilik çevrim içi oturum.',
        'Her tur gizli rol dağıtımı: Haşlanmış, Sahanda, Omlet ve Çürük Yumurta; her rolün kendi kazanma koşulu var.',
        'Fiziğe dayalı saman balyası taşıma, döndürme ve dizme; ıslanan balyalar kayıyor.',
        'Zille toplantı ve oylama; elenen oyuncular hayalet olarak balya taşımaya devam ediyor.',
        'Gökten düşen ikmal sandıkları ve sabotaj eşyaları: kova, yağ, toz.',
      ],
      en: [
        '2–8 player online sessions with Photon.',
        'A secret role every round: Boiled, Fried, Omelet and Rotten Egg, each with its own win condition.',
        'Physics-based hay bales to carry, rotate and stack; wet bales slide.',
        'A bell calls a meeting and a vote; eliminated players keep moving bales as ghosts.',
        'Airdrop crates and sabotage items: a bucket, oil and dust.',
      ],
    },
    facts: [
      { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Sosyal çıkarım · Fizik', en: 'Social deduction · Physics' } },
      { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: '2–8, çevrim içi', en: '2–8, online' } },
      { label: { tr: 'Ağ', en: 'Networking' }, value: { tr: 'Photon', en: 'Photon' } },
      { label: { tr: 'Durum', en: 'Status' }, value: { tr: 'Geliştirmede · v0.1.1', en: 'In development · v0.1.1' } },
    ],
  },
  'polar-clash': {
    slug: 'polar-clash',
    role: solo,
    systems: {
      tr: [
        'Mıknatıs ipiyle topları çekme ve itme fiziği; küçük top 1, büyük top 3 puan.',
        'İpler dolanırsa 3 saniyelik kilit; “Ters Kutup” olayında çekme ve itme yer değiştiriyor.',
        'Rastgele açılan tuzak duvarlar, ortada gidip gelen hareketli duvar ve 5 dakikalık maç.',
        'Kaydedilen kozmetikler (8 mıknatıs, 5 iz, 5 toplama efekti), seyirci tepkileri ve kamera sarsıntısı.',
      ],
      en: [
        'Magnet-rope physics to pull and push balls; small balls score 1, large balls 3.',
        'Tangled ropes lock you out for 3 seconds; the “Reverse Pole” event swaps pull and push.',
        'Trap walls that pop up at random, a moving wall in the middle and 5-minute matches.',
        'Saved cosmetics (8 magnets, 5 trails, 5 collect effects), crowd reactions and camera shake.',
      ],
    },
    facts: [
      { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Arcade · Fizik', en: 'Arcade · Physics' } },
      { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: '2, tek klavye', en: '2, one keyboard' } },
      { label: { tr: 'Kaynak', en: 'Source' }, value: { tr: 'GitHub’da açık', en: 'Open on GitHub' } },
      { label: { tr: 'Sürüm', en: 'Version' }, value: { tr: 'v1.0.0', en: 'v1.0.0' } },
    ],
  },
  'takipci-avi': {
    slug: 'takipci-avi',
    role: solo,
    systems: {
      tr: [
        'Asimetrik roller: Influencer fareyle kalp topluyor, Hacker klavyeyle pop-up açıyor; her tur roller değişiyor.',
        'Altın kalpler, “VİRAL” kombolar ve ip çekme düelloları.',
        'Fırlatma fiziği olan beş farklı pop-up türü ve canlı yayın olayları.',
        'Solak düzen seçeneği dahil ayarlar.',
      ],
      en: [
        'Asymmetric roles: the Influencer collects hearts with the mouse, the Hacker opens pop-ups with the keyboard; roles swap every round.',
        'Golden hearts, “VIRAL” combos and rope-pull duels.',
        'Five pop-up types with launch physics, and livestream events.',
        'Settings including a left-handed layout.',
      ],
    },
    facts: [
      { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Parti · Versus', en: 'Party · Versus' } },
      { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: '2, tek bilgisayar', en: '2, one computer' } },
      { label: { tr: 'Kontrol', en: 'Input' }, value: { tr: 'Fare + klavye', en: 'Mouse + keyboard' } },
      { label: { tr: 'Sürüm', en: 'Version' }, value: { tr: 'v1.0.0', en: 'v1.0.0' } },
    ],
  },
  shadebound: {
    slug: 'shadebound',
    role: solo,
    systems: {
      tr: [
        'İnsan ve gölge formu arasında geçiş; gölge formunda güvenlik kameraları seni göremiyor ve geçici olarak devre dışı kalıyor.',
        'Görünmeden düşman etkisiz hale getirme ve zararlı maddeleri temizleme.',
        'Yakalandıkça zorlaşan oyun; her bölüm doğru formu doğru anda kullanmayı istiyor.',
      ],
      en: [
        'Switching between human and shadow form; in shadow form security cameras can’t see you and go offline for a while.',
        'Taking out enemies unseen and cleaning up hazardous substances.',
        'Getting caught makes the game harder; each level asks for the right form at the right moment.',
      ],
    },
    facts: [
      { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Gizlilik · Bulmaca', en: 'Stealth · Puzzle' } },
      { label: { tr: 'Görünüm', en: 'View' }, value: { tr: '2D piksel art, yandan', en: '2D pixel art, side-on' } },
      { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: 'Tek oyuncu', en: 'Single player' } },
      { label: { tr: 'Platform', en: 'Platform' }, value: { tr: 'Windows', en: 'Windows' } },
    ],
    context: {
      tr: 'İstanbul Beykent Üniversitesi, Tasarımda Bilgisayar Uygulamaları dersi projesi.',
      en: 'Course project for Computer Applications in Design, Istanbul Beykent University.',
    },
  },
  'aeternus-depth': {
    slug: 'aeternus-depth',
    role: solo,
    systems: {
      tr: [
        'Ders brifindeki üç kamera açısı: izometrik, 2D ve FPS.',
        'Mariana Çukuru’nun dibinde düşmanlarla dolu bir zindan ve sonunda Cthulhu ile boss dövüşü.',
        'Roguelite yapı; Kelt mitolojisi, Subnautica ve Dredge’den beslenen atmosfer.',
      ],
      en: [
        'The three camera angles from the course brief: isometric, 2D and FPS.',
        'A dungeon full of enemies at the bottom of the Mariana Trench, ending in a boss fight with Cthulhu.',
        'A roguelite structure; the mood draws on Celtic mythology, Subnautica and Dredge.',
      ],
    },
    facts: [
      { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Roguelite', en: 'Roguelite' } },
      { label: { tr: 'Tema', en: 'Theme' }, value: { tr: 'Lovecraft korku', en: 'Lovecraftian horror' } },
      { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: 'Tek oyuncu', en: 'Single player' } },
      { label: { tr: 'Platform', en: 'Platform' }, value: { tr: 'Windows', en: 'Windows' } },
    ],
    context: {
      tr: 'İstanbul Beykent Üniversitesi, Oyun Geliştirme dersi projesi.',
      en: 'Course project for Game Development, Istanbul Beykent University.',
    },
  },
};

/** Featured game first, then the others in home-page order. */
export const allGames = [featured, ...games];
