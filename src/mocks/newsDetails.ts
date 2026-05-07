export type NewsDetailBlock =
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'photo'; src: string; alt?: string; logoUrl?: string; caption?: string; author?: string };

export type NewsDetailItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  authorName: string;
  authorAvatarUrl: string;
  image: { src: string; alt?: string; logoUrl?: string };
  stats?: { views?: number; likes?: number; comments?: number };
  content: NewsDetailBlock[];
};

export const newsDetailsMockData: NewsDetailItem[] = [
  {
    id: 2,
    title: 'Как нескучно провести майские праздники',
    description:
      'В окрестностях Ставрополя есть прекрасное место, о котором многие слышали, но не все были. Мы вместе с командой «Спорт мастера» решили отправиться в путь на велосипедах.',
    date: '2022-05-02T09:00:00.000Z',
    authorName: 'Спорт мастер',
    authorAvatarUrl: '/src/assets/brand/sportmaster.png',
    image: {
      src: '/src/assets/ads/fatbike-ad-01.jpg',
      alt: 'Майские праздники',
      logoUrl: '/src/assets/brand/logo-white.png',
    },
    stats: { views: 860, likes: 18, comments: 3 },
    content: [
      { type: 'photo', src: '/src/assets/ads/tent-ad-01.png', alt: 'Палатка' },
      {
        type: 'p',
        text: 'Поляны также весьма популярны у велосипедистов. Вообще, Беспутка расположена в 5 км от Ставрополя.',
      },
      { type: 'photo', src: '/src/assets/ads/ad-600-01.jpg', alt: 'Реклама 600' },
      { type: 'p', text: 'На поляне есть памятник авиаторам. Надпись на нем гласит: «Небо забирает лучших».' },
      { type: 'photo', src: '/src/assets/ads/ad-600-02.jpg', alt: 'Реклама 600 (2)' },
      { type: 'p', text: 'Ещё один кадр из поездки — и небольшой рекламный блок для теста отображения.' },
      { type: 'photo', src: '/src/assets/ads/ad-image-01.jpg', alt: 'Реклама' },
    ],
  },
];
