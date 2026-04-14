import { useEffect, useMemo, useState } from 'react';
import { Layout, Typography, List, Card, Segmented, Image, Space, Tag } from 'antd';
import { mockFetch } from './api/mockFetch';
import './App.css';

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

type PhotoItem = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

type ReportItem = {
  id: number;
  time: string;
  media: 'video' | 'photo';
  source: string;
  text: string;
};

type ApiResponse<T> = {
  items: T[];
};

const { Header, Content, Footer } = Layout;

type TabKey = 'Новости' | 'Фото' | 'Репортаж';

export default function App() {
  const [tab, setTab] = useState<TabKey>('Новости');

  const [news, setNews] = useState<NewsItem[]>([]);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [report, setReport] = useState<ReportItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await mockFetch<ApiResponse<NewsItem>>('/api/news');
      if (res.ok) setNews((await res.json()).items);
    })();
    (async () => {
      const res = await mockFetch<ApiResponse<PhotoItem>>('/api/photos');
      if (res.ok) setPhotos((await res.json()).items);
    })();
    (async () => {
      const res = await mockFetch<ApiResponse<ReportItem>>('/api/report');
      if (res.ok) setReport((await res.json()).items);
    })();
  }, []);

  const headerTitle = useMemo(() => {
    switch (tab) {
      case 'Фото':
        return 'Фотогалерея';
      case 'Репортаж':
        return 'Репортаж / прямое включение';
      default:
        return 'Лента новостей';
    }
  }, [tab]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Typography.Title level={3} style={{ color: '#fff', margin: 0 }}>
          Ставрополь — Новости
        </Typography.Title>

        <Segmented<TabKey>
          value={tab}
          onChange={(v) => setTab(v)}
          options={['Новости', 'Фото', 'Репортаж']}
          style={{ background: '#fff' }}
        />
      </Header>

      <Content style={{ padding: 24, maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        <Typography.Title level={4}>{headerTitle}</Typography.Title>

        {tab === 'Новости' && (
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
                    <Typography.Paragraph>{item.description}</Typography.Paragraph>
                    <Typography.Text type="secondary">Просмотры: {item.views} · Лайки: {item.likes}</Typography.Text>
                  </Space>
                </Card>
              </List.Item>
            )}
          />
        )}

        {tab === 'Фото' && (
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={photos}
            renderItem={(p) => (
              <List.Item key={p.id}>
                <Card
                  cover={<Image src={p.imageUrl} alt={p.title} height={180} style={{ objectFit: 'cover' }} />}
                  title={p.title}
                >
                  <Typography.Paragraph>{p.description}</Typography.Paragraph>
                  <Typography.Text type="secondary">
                    {p.author} · {new Date(p.date).toLocaleString()}
                  </Typography.Text>
                </Card>
              </List.Item>
            )}
          />
        )}

        {tab === 'Репортаж' && (
          <List
            dataSource={report}
            renderItem={(r) => (
              <List.Item key={r.id}>
                <Card
                  title={
                    <Space wrap>
                      <Tag color="geekblue">{r.time}</Tag>
                      <Tag color={r.media === 'video' ? 'red' : 'green'}>{r.media.toUpperCase()}</Tag>
                      <Typography.Text>{r.text}</Typography.Text>
                    </Space>
                  }
                  style={{ width: '100%' }}
                >
                  <Typography.Link href={r.source} target="_blank" rel="noreferrer">
                    Открыть источник
                  </Typography.Link>
                </Card>
              </List.Item>
            )}
          />
        )}
      </Content>

      <Footer style={{ textAlign: 'center' }}>prostavAI · React + Ant Design · моковые эндпоинты</Footer>
    </Layout>
  );
}
