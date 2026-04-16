export type CommentItem = {
  id: string;
  parentId?: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
};

// Only one level of nesting is used in UI (replies to first-level comments)
export const commentsMockData: CommentItem[] = [
  {
    id: 'c1',
    author: {
      name: 'Мария',
      avatarUrl: 'https://i.pravatar.cc/80?img=32',
    },
    text: 'Классная новость. Если будет апдейт по месту и времени — добавьте, пожалуйста, в пост.',
    createdAt: '2022-04-05T10:15:00.000Z',
  },
  {
    id: 'c2',
    author: {
      name: 'Алексей',
      avatarUrl: 'https://i.pravatar.cc/80?img=12',
    },
    text: 'Поддерживаю. Было бы круто добавить карту и контакты.',
    createdAt: '2022-04-05T10:40:00.000Z',
  },
  {
    id: 'r1',
    parentId: 'c1',
    author: {
      name: 'Редакция',
      avatarUrl: 'https://i.pravatar.cc/80?img=5',
    },
    text: 'Спасибо! Обновим материал, как только появятся подтверждённые детали.',
    createdAt: '2022-04-05T11:05:00.000Z',
  },
];
