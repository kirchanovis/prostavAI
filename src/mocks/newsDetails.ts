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
    id: 1,
    title: '16 апреля стартует краевой автопробег «Эх, путь-дорожка фронтовая» от Вечного огня',
    description:
      '4 района и округа, более 100 населенных пунктов Ставропольского края посетят участники автопробега «Эх, путь-дорожка фронтовая».',
    date: '2022-04-16T09:00:00.000Z',
    authorName: 'Администрация Ставрополя',
    authorAvatarUrl: 'https://i.pravatar.cc/80?img=5',
    image: {
      src: '/src/assets/photos/den-goroda-stavropol-5.jpg',
      alt: 'Автопробег',
      logoUrl: '/src/assets/brand/logo-white.png',
    },
    stats: { views: 420, likes: 12, comments: 3 },
    content: [
      {
        type: 'p',
        text: 'У мемориала Вечный огонь ветераны, школьники, студенты, жители города развёрнут копию Знамени Победы в честь 73-й годовщины Победы в Великой Отечественной войне, почтут память всех павших и возложат цветы к подножию памятника – дадут старт автопробегу. Его цель - объединить одной памятью, одной историей и единым чувством гордости и благодарности поколению победителей.',
      },
      {
        type: 'p',
        text: 'По информации пресс-службы администрации Ставрополя, завершится автопробег «Эх, путь-дорожка фронтовая» 8 мая на территории Ставропольского кадетского президентского училища.',
      },
    ],
  },
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
