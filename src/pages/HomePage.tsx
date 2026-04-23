import { Space } from 'antd';
import { useEffect, useState } from 'react';

import { AdImageCard } from '../components/news/AdImageCard';
import { NewsCard } from '../components/news/NewsCard';
import { NewsImageCard } from '../components/news/NewsImageCard';
import { NewsImageWideCard } from '../components/news/NewsImageWideCard';
import { NewsMasonryGrid } from '../components/news/NewsMasonryGrid';
import { NewsVideoCard } from '../components/news/NewsVideoCard';
import newsApi, { type NewsItem } from '../mocks/newsApi';

export function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    newsApi.getNews(({ items }) => setNews(items));
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <NewsMasonryGrid
        items={news}
        renderItem={(item) => {
          switch (item.block) {
            case 'AdImageCard':
              return <AdImageCard title={item.title} publishedAt={item.date} imageUrl={item.image} />;

            case 'NewsImageCard':
              return (
                <NewsImageCard
                  category={item.category}
                  title={item.title}
                  publishedAt={item.date}
                  imageUrl={item.image}
                />
              );

            case 'NewsImageWideCard':
              return (
                <NewsImageWideCard
                  category={item.category}
                  title={item.title}
                  publishedAt={item.date}
                  imageUrl={item.image}
                />
              );

            case 'NewsVideoCard':
              return (
                <NewsVideoCard
                  category={item.category}
                  title={item.title}
                  subtitle={item.videoUrl ? 'Видео' : (item.description ?? '')}
                  publishedAt={item.date}
                  imageUrl={item.image}
                />
              );

            case 'NewsCard':
            default:
              return <NewsCard category={item.category} title={item.title} publishedAt={item.date} />;
          }
        }}
      />
    </Space>
  );
}
