import { Space, Typography } from 'antd';
import { useEffect, useState } from 'react';

import { mockFetch } from '../api/mockFetch';
import { NewsCard } from '../components/news/NewsCard';
import { NewsMasonryGrid } from '../components/news/NewsMasonryGrid';

type NewsItem = {
  id: number;
  category: string;
  title: string;
  date: string;
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

      <NewsMasonryGrid
        items={news}
        renderItem={(item) => <NewsCard category={item.category} title={item.title} publishedAt={item.date} />}
      />
    </Space>
  );
}
