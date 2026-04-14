import { useEffect, useState } from 'react';
import { Layout, Typography, List, Card } from 'antd';
import { mockFetch } from './api/mockFetch';
import './App.css';

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

type NewsResponse = {
  items: NewsItem[];
};

const { Header, Content, Footer } = Layout;

export default function App() {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await mockFetch<NewsResponse>('/api/news');
      if (res.ok) {
        const data = await res.json();
        setItems(data.items);
      }
    })();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Typography.Title level={3} style={{ color: '#fff', margin: 0 }}>
          Ставрополь — Новости
        </Typography.Title>
      </Header>

      <Content style={{ padding: 24, maxWidth: 1000, width: '100%', margin: '0 auto' }}>
        <Typography.Title level={4}>Лента</Typography.Title>

        <List
          dataSource={items}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Card title={item.title} style={{ width: '100%' }}>
                <Typography.Paragraph>{item.excerpt}</Typography.Paragraph>
                <Typography.Text type="secondary">{new Date(item.publishedAt).toLocaleString()}</Typography.Text>
              </Card>
            </List.Item>
          )}
        />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        prostavAI · React + Ant Design · моковые эндпоинты
      </Footer>
    </Layout>
  );
}
