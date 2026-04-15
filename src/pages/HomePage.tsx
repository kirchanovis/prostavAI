import { Card, Image, List, Space, Tag, Typography } from 'antd';
import { useEffect, useState } from 'react';

import { mockFetch } from '../api/mockFetch';

type NewsItem = {
  id: number;
  category: string;
  title: string;
  date: string;
  author: string;
  image: string;
  description: string;
  views: number;
  likes: number;
};

type ApiResponse<T> = { items: T[] };

export function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await mockFetch<ApiResponse<NewsItem>>('/api/news');
      if (res.ok) setNews((await res.json()).items);
    })();
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        Главная
      </Typography.Title>

      <List
        dataSource={news}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              title={
                <Space direction="vertical" size={4} style={{ width: '100%' }}>
                  <Space wrap>
                    <Tag color="blue">{item.category}</Tag>
                    <Typography.Text type="secondary">
                      {item.date} · {item.author}
                    </Typography.Text>
                  </Space>
                  <Typography.Text strong>{item.title}</Typography.Text>
                </Space>
              }
              style={{ width: '100%' }}
            >
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Image src={item.image} alt={item.title} width={360} />
                <Typography.Paragraph style={{ marginBottom: 0 }}>{item.description}</Typography.Paragraph>
                <Typography.Text type="secondary">Просмотры: {item.views} · Лайки: {item.likes}</Typography.Text>
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </Space>
  );
}
