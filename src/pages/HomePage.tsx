import { Space } from 'antd';
import { useEffect, useState } from 'react';

import { NewsCard } from '../components/news/NewsCard';
import { NewsMasonryGrid } from '../components/news/NewsMasonryGrid';

type NewsItem = {
  id: number;
  category: string;
  title: string;
  date: string;
};

export function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/news');
      if (!res.ok) return;

      const data: { items: NewsItem[] } = await res.json();
      setNews(data.items);
    })();
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <NewsMasonryGrid
        items={news}
        renderItem={(item) => <NewsCard category={item.category} title={item.title} publishedAt={item.date} />}
      />
    </Space>
  );
}
