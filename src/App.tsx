import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import logo from './assets/brand/logo.jpg';
import { MenuContainer } from './containers/MenuContainer';
import { ArticlesPage } from './pages/ArticlesPage';
import { HomePage } from './pages/HomePage';
import { StubPage } from './pages/StubPage';
import { UiKitPage } from './pages/UiKitPage';
import styles from './styles/menu.module.scss';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.topHeader}>
        <div className={styles.brand}>
          <img src={logo} className={styles.logo} alt="Логотип" />
        </div>
        <MenuContainer className={styles.topMenu} />
      </Header>

      <Content style={{ padding: 24, maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stavropol" element={<StubPage title="Ставрополь" />} />
          <Route path="/krai" element={<StubPage title="Ставропольский край" />} />
          <Route path="/skfo" element={<StubPage title="СКФО" />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/photo-reports" element={<StubPage title="Фоторепортажи" />} />
          <Route path="/history" element={<StubPage title="История Ставрополья" />} />
          <Route path="/ui" element={<UiKitPage />} />
          <Route path="*" element={<StubPage title="404" />} />
        </Routes>
      </Content>

      <Footer style={{ textAlign: 'center' }}>prostavAI · React + Ant Design · моковые эндпоинты</Footer>
    </Layout>
  );
}
