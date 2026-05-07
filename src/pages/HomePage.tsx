import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AdImageCard } from '../components/news/AdImageCard';
import { NewsCard } from '../components/news/NewsCard';
import { NewsImageCard } from '../components/news/NewsImageCard';
import { NewsImageWideCard } from '../components/news/NewsImageWideCard';
import { NewsMasonryGrid } from '../components/news/NewsMasonryGrid';
import { NewsVideoCard } from '../components/news/NewsVideoCard';
import newsApi, { type NewsItem } from '../mocks/newsApi';

export function HomePage() {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    newsApi.getNews(({ items }) => setNews(items));
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <NewsMasonryGrid
        items={news}
        renderItem={(item) => {
          const onOpen = () => navigate(`/news/${item.id}`);

          switch (item.block) {
            case 'AdImageCard':
              return (
                <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
                  <AdImageCard title={item.title} publishedAt={item.date} imageUrl={item.image} />
                </div>
              );

            case 'NewsImageCard':
              return (
                <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
                  <NewsImageCard
                    category={item.category}
                    title={item.title}
                    publishedAt={item.date}
                    imageUrl={item.image}
                  />
                </div>
              );

            case 'NewsImageWideCard':
              return (
                <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
                  <NewsImageWideCard
                    category={item.category}
                    title={item.title}
                    publishedAt={item.date}
                    imageUrl={item.image}
                  />
                </div>
              );

            case 'NewsVideoCard':
              return (
                <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
                  <NewsVideoCard
                    category={item.category}
                    title={item.title}
                    subtitle={item.videoUrl ? 'Видео' : (item.description ?? '')}
                    publishedAt={item.date}
                    imageUrl={item.image}
                  />
                </div>
              );

            case 'NewsCard':
            default:
              return (
                <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
                  <NewsCard category={item.category} title={item.title} publishedAt={item.date} />
                </div>
              );
          }
        }}
      />
    </Space>
  );
}
