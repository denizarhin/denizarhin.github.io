import type { ImageMetadata } from 'astro';

// Screenshots and covers: downloaded from each game's itch.io page (img.itch.zone), 2026-11-20.
import sh1 from '../assets/games/son-hasat/s1.jpg';
import sh3 from '../assets/games/son-hasat/s3.jpg';
import sh4 from '../assets/games/son-hasat/s4.jpg';
import sh5 from '../assets/games/son-hasat/s5.jpg';
import sh6 from '../assets/games/son-hasat/s6.jpg';
import eggous from '../assets/games/eggous/s1.jpg';
import polar from '../assets/games/polar-clash/s1.png';
import takipci from '../assets/games/takipci-avi/s1.png';
import shadebound from '../assets/games/shadebound/s1.png';
import aeternus from '../assets/games/aeternus-depth/s1.png';
import eggous2 from '../assets/games/eggous/s2.jpg';
import eggous3 from '../assets/games/eggous/s3.jpg';
import polar2 from '../assets/games/polar-clash/s2.png';
import polar3 from '../assets/games/polar-clash/s3.png';
import takipci2 from '../assets/games/takipci-avi/s2.png';
import takipci3 from '../assets/games/takipci-avi/s3.png';
import shadebound2 from '../assets/games/shadebound/s2.png';
import shadebound3 from '../assets/games/shadebound/s3.png';
import aeternus2 from '../assets/games/aeternus-depth/s2.png';
import aeternus3 from '../assets/games/aeternus-depth/s3.png';

type Text = { tr: string; en: string };

export interface Game {
  slug: string;
  title: string;
  itch: string;
  source?: string;
  inDevelopment?: boolean;
  /** The game's own colour, sampled from its screenshots. Accents only; the CTA stays blue. */
  hue: string;
  tags: { tr: string[]; en: string[] };
  pitch: Text;
  thumb: ImageMetadata;
  thumbAlt: Text;
  /** Extra screenshots cycled on card hover. */
  gallery?: ImageMetadata[];
}

export interface FeaturedGame extends Game {
  shots: { src: ImageMetadata; alt: Text }[];
  download: string;
  facts: { label: Text; value: Text }[];
}

export const featured: FeaturedGame = {
  slug: 'son-hasat',
  title: 'Son Hasat',
  itch: 'https://d3xs.itch.io/son-hasat',
  hue: '#b69cff',
  tags: {
    tr: ['Birinci şahıs', 'Gerilim · Bulmaca', '1–4 oyuncu, LAN co-op', 'Unity'],
    en: ['First-person', 'Tension · Puzzle', '1–4 players, LAN co-op', 'Unity'],
  },
  pitch: {
    tr: 'Sisli bir adada mahsur kalan oyuncular, yeraltı ve rüya bölgelerinde bulmaca çözerek ilerliyor. Arkadaşlarınla LAN üzerinden ya da tek başına oynanıyor.',
    en: 'Stranded on a foggy island, players push through underground and dream areas by solving puzzles. Play with friends over LAN, or alone.',
  },
  download: 'Windows · 142 MB',
  facts: [
    { label: { tr: 'Tür', en: 'Genre' }, value: { tr: 'Gerilim · Bulmaca', en: 'Tension · Puzzle' } },
    { label: { tr: 'Oyuncu', en: 'Players' }, value: { tr: '1–4, LAN co-op', en: '1–4, LAN co-op' } },
    { label: { tr: 'Bakış', en: 'View' }, value: { tr: 'Birinci şahıs', en: 'First-person' } },
    { label: { tr: 'Motor', en: 'Engine' }, value: { tr: 'Unity', en: 'Unity' } },
  ],
  thumb: sh4,
  thumbAlt: { tr: 'Son Hasat ana menüsü', en: 'Son Hasat main menu' },
  shots: [
    { src: sh4, alt: { tr: 'Ana menü: kamp ateşi başında iki korkuluk figürü', en: 'Main menu: two scarecrow figures around a campfire' } },
    { src: sh1, alt: { tr: 'Mor sis içinde dev mantarlar arasında bir figür', en: 'A figure among giant mushrooms in purple fog' } },
    { src: sh5, alt: { tr: 'Mantar evlerin arasından geçen taş patika', en: 'A stone path between mushroom houses' } },
    { src: sh6, alt: { tr: 'Gece karanlık denizde bir kayıkta oturan figür', en: 'A figure sitting in a rowboat on a dark sea at night' } },
    { src: sh3, alt: { tr: 'Mavi kristallerin aydınlattığı karanlık bir mağara', en: 'A dark cave lit by blue crystals' } },
  ],
};

export const games: Game[] = [
  {
    slug: 'eggous',
    title: 'Eggous',
    itch: 'https://d3xs.itch.io/eggous',
    inDevelopment: true,
    hue: '#7ed957',
    tags: { tr: ['Sosyal çıkarım', 'Fizik platform', '2–8 oyuncu, çevrim içi'], en: ['Social deduction', 'Physics platformer', '2–8 players, online'] },
    pitch: {
      tr: 'Oyuncular yuvaya ulaşmak için saman balyalarını üst üste diziyor; aralarında gizli bir sabotajcı var.',
      en: 'Players stack hay bales to build a path to the nest, with a secret saboteur among them.',
    },
    thumb: eggous,
    gallery: [eggous2, eggous3],
    thumbAlt: { tr: 'Uçan bir adada saman balyası merdiveni', en: 'A hay-bale staircase on a floating island' },
  },
  {
    slug: 'polar-clash',
    title: 'Polar Clash',
    itch: 'https://d3xs.itch.io/polar-clash',
    source: 'https://github.com/d3xsz/Polar-Clash',
    hue: '#3fd8f0',
    tags: { tr: ['Yerel versus', 'Arcade · Fizik', '2 oyuncu, tek klavye'], en: ['Local versus', 'Arcade · Physics', '2 players, one keyboard'] },
    pitch: {
      tr: 'Arenanın iki yanında birer mıknatıs: ipini kullanıp topları çek, it ve rakibinin tarafına gönder.',
      en: 'A magnet on each side of the arena: use your rope to pull and push the balls over to your rival’s side.',
    },
    thumb: polar,
    gallery: [polar2, polar3],
    thumbAlt: { tr: 'Neon arenada kırmızı ve mavi mıknatıslar', en: 'Red and blue magnets in a neon arena' },
  },
  {
    slug: 'takipci-avi',
    title: 'Takipçi Avı',
    itch: 'https://d3xs.itch.io/takipci-avi',
    hue: '#ff5fa2',
    tags: { tr: ['Yerel versus', 'Sosyal medya parodisi', '2 oyuncu'], en: ['Local versus', 'Social media parody', '2 players'] },
    pitch: {
      tr: 'Biri Influencer olup fareyle kalp topluyor, diğeri Hacker olup klavyeyle pop-up yağdırıyor. Her turda roller değişiyor.',
      en: 'One player is the Influencer collecting hearts with the mouse, the other a Hacker flooding the screen with pop-ups. Roles swap every round.',
    },
    thumb: takipci,
    gallery: [takipci2, takipci3],
    thumbAlt: { tr: 'Kalpler ve pop-up pencerelerle dolu bir akış', en: 'A feed full of hearts and pop-up windows' },
  },
  {
    slug: 'shadebound',
    title: 'SHADEBOUND',
    itch: 'https://d3xs.itch.io/shadebound',
    hue: '#ff7a59',
    tags: { tr: ['2D piksel art', 'Gizlilik · Bulmaca', 'Tek oyuncu'], en: ['2D pixel art', 'Stealth · Puzzle', 'Single player'] },
    pitch: {
      tr: 'İnsan ve gölge formu arasında geçerek güvenlik kameralarına yakalanmadan ilerle.',
      en: 'Switch between human and shadow form to slip past the security cameras.',
    },
    thumb: shadebound,
    gallery: [shadebound2, shadebound3],
    thumbAlt: { tr: 'Gece sokakta güvenlik kamerası ve SHADEBOUND logosu', en: 'A night street with a security camera and the SHADEBOUND logo' },
  },
  {
    slug: 'aeternus-depth',
    title: 'Aeternus Depth',
    itch: 'https://d3xs.itch.io/aeternus-depth',
    hue: '#3ccf9a',
    tags: { tr: ['Roguelite', 'Lovecraft korku', 'Tek oyuncu'], en: ['Roguelite', 'Lovecraftian horror', 'Single player'] },
    pitch: {
      tr: 'Mariana Çukuru’na inen bir dalgıç zindanları temizleyip Cthulhu ile yüzleşiyor; oyun izometrik, 2D ve FPS kamera arasında geçiyor.',
      en: 'A diver descends the Mariana Trench, clears its dungeons and faces Cthulhu, switching between isometric, 2D and FPS cameras.',
    },
    thumb: aeternus,
    gallery: [aeternus2, aeternus3],
    thumbAlt: { tr: 'Dalgıç ve Aeternus Depth başlık ekranı', en: 'A diver on the Aeternus Depth title screen' },
  },
];
