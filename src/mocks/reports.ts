export type ReportMedia =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'youtube'; videoId: string; title?: string }
  | { type: 'video'; src: string };

export type ReportItem = {
  id: number;
  timeLabel: string;
  title: string;
  media?: ReportMedia;
};

export type ReportDetail = {
  id: number;
  title: string;
  items: ReportItem[];
  stats?: { views?: number; likes?: number; comments?: number };
};

export const reportsMockData: ReportDetail[] = [
  {
    id: 1,
    title: 'Репортажи с места событий',
    stats: { views: 1040, likes: 28, comments: 3 },
    items: [
      {
        id: 1,
        timeLabel: '10 минут назад',
        title: 'На проспекте перекрыли движение: что известно',
        media: { type: 'image', src: '/src/assets/photos/IMG_2244.png', alt: 'Сцена' },
      },
      {
        id: 2,
        timeLabel: '35 минут назад',
        title: 'Очевидцы публикуют видео: ситуация развивается',
        media: { type: 'youtube', videoId: 'k_TqWxnGbL4', title: 'YouTube' },
      },
      {
        id: 3,
        timeLabel: '1 час назад',
        title: 'Коммунальные службы приступили к работам',
        media: { type: 'image', src: '/src/assets/photos/IMG_2608.png', alt: 'Работы' },
      },
      {
        id: 4,
        timeLabel: '2 часа назад',
        title: 'Заявление пресс-службы: комментарий официальных лиц',
        media: { type: 'image', src: '/src/assets/photos/IMG_1817.png', alt: 'Комментарий' },
      },
      {
        id: 5,
        timeLabel: '3 часа назад',
        title: 'Обновление: подробности уточняются (без медиа)',
      },
      {
        id: 6,
        timeLabel: 'Сегодня',
        title: 'Фотоподборка: хроника событий',
        media: { type: 'image', src: '/src/assets/photos/den-goroda-stavropol-5.jpg', alt: 'Хроника' },
      },
    ],
  },
];
