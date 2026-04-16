import { Space, Typography } from 'antd';

import { CommentsBlock } from '../components/comments/CommentsBlock';
import { commentsMockData } from '../mocks/comments';

export function ArticlesPage() {
  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        Статьи
      </Typography.Title>

      <CommentsBlock items={commentsMockData} />
    </Space>
  );
}
