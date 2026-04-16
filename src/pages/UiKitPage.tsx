import { Card, Divider, Space, Typography } from 'antd';

import { CommentsBlock } from '../components/comments/CommentsBlock';

import type { CommentItem } from '../mocks/comments';

const demoComments: CommentItem[] = [
  {
    id: 'c1',
    author: { name: 'Мария', avatarUrl: 'https://i.pravatar.cc/80?img=32' },
    text: 'Классная новость! Хотелось бы больше подробностей.',
    createdAt: '2022-04-05T10:15:00.000Z',
  },
  {
    id: 'r1',
    parentId: 'c1',
    author: { name: 'Редакция', avatarUrl: 'https://i.pravatar.cc/80?img=5' },
    text: 'Спасибо! Добавим детали, как только появится подтверждение.',
    createdAt: '2022-04-05T11:05:00.000Z',
  },
  {
    id: 'c2',
    author: { name: 'Алексей', avatarUrl: 'https://i.pravatar.cc/80?img=12' },
    text: 'А можно добавить карту и контакты организаторов?',
    createdAt: '2022-04-05T10:40:00.000Z',
  },
];

export function UiKitPage() {
  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        UI Kit
      </Typography.Title>
      <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
        Страница для сборки и проверки переиспользуемых компонентов/токенов.
      </Typography.Paragraph>

      <Divider style={{ margin: '12px 0' }} />

      <Card title="CommentsBlock" style={{ width: '100%' }}>
        <CommentsBlock items={demoComments} />
      </Card>
    </Space>
  );
}
