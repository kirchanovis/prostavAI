import { Layout, Typography } from 'antd';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { TopNav } from './components/TopNav';
import { HomePage } from './pages/HomePage';
import { StubPage } from './pages/StubPage';
import styles from './styles/menu.module.scss';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.topHeader}>
        <Typography.Title level={3} className={styles.brand}>
          Ставрополь — Новости
        </Typography.Title>
        <TopNav className={styles.topMenu} />
      </Header>

      <Content style={{ padding: 24, maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stavropol" element={<StubPage title="Ставрополь" />} />
          <Route path="/krai" element={<StubPage title="Ставропольский край" />} />
          <Route path="/skfo" element={<StubPage title="СКФО" />} />
          <Route path="/articles" element={<StubPage title="Статьи" />} />
          <Route path="/photo-reports" element={<StubPage title="Фоторепортажи" />} />
          <Route path="/history" element={<StubPage title="История Ставрополья" />} />
          <Route path="*" element={<StubPage title="404" />} />
        </Routes>
      </Content>

      <Footer style={{ textAlign: 'center' }}>prostavAI · React + Ant Design · моковые эндпоинты</Footer>
    </Layout>
  );
}
