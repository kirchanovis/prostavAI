import { Space, Typography } from 'antd';

import { ArticleAuthorBlock } from '../components/article/ArticleAuthorBlock';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { commentsMockData } from '../mocks/comments';

export function ArticlesPage() {
  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        Статьи
      </Typography.Title>

      <ArticleAuthorBlock
        authorName="Иван Иванов"
        authorAvatarUrl="https://i.pravatar.cc/80?img=8"
        publishedAt="2022-04-05T09:30:00.000Z"
      />

      <CommentsBlock items={commentsMockData} />
    </Space>
  );
}
