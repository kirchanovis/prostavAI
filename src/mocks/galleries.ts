export type GalleryPhoto = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

export type GalleryDetail = {
  id: number;
  title: string;
  description: string;
  date: string;
  authorName: string;
  authorAvatarUrl: string;
  cover: { src: string; alt?: string; logoUrl?: string };
  stats?: { views?: number; likes?: number; comments?: number };
  photos: GalleryPhoto[];
};

export const galleriesMockData: GalleryDetail[] = [
  {
    id: 1,
    title: 'Российская студенческая весна 2018 — Первый день',
    description: 'Фотоподборка с первого дня фестиваля.',
    date: '2018-05-15T09:00:00.000Z',
    authorName: 'Редакция',
    authorAvatarUrl: 'https://i.pravatar.cc/80?img=8',
    cover: {
      src: '/src/assets/photos/den-goroda-stavropol-5.jpg',
      alt: 'Студенческая весна — первый день',
    },
    stats: { views: 1520, likes: 34, comments: 3 },
    photos: [
      {
        id: 1,
        imageUrl: '/src/assets/photos/0093724560526005.jpg',
        title: 'Главная площадь города',
        description: 'Красивый фонтан на главной площади города',
        author: 'Иван Иванов',
        date: '2018-05-15T12:30:00.000Z',
      },
      {
        id: 2,
        imageUrl: '/src/assets/photos/AqI6FFiBDNE.jpg',
        title: 'Концерт на стадионе',
        description: 'Музыкальный концерт на стадионе',
        author: 'Анна Петрова',
        date: '2018-05-15T18:00:00.000Z',
      },
      {
        id: 3,
        imageUrl: '/src/assets/photos/IMG_1817.png',
        title: 'Красивый закат над городом',
        description: 'Закат на реке в центре города',
        author: 'Елена Козлова',
        date: '2018-05-15T20:30:00.000Z',
      },
      {
        id: 4,
        imageUrl: '/src/assets/photos/IMG_2530.png',
        title: 'Городской пейзаж',
        description: 'Панорама города в солнечный день',
        author: 'Илья',
        date: '2018-05-15T21:10:00.000Z',
      },
      {
        id: 5,
        imageUrl: '/src/assets/photos/IMG_2608.png',
        title: 'Вечерний город',
        description: 'Огни города вечером',
        author: 'Илья',
        date: '2018-05-15T22:00:00.000Z',
      },
    ],
  },
];
