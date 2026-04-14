import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  { key: '/', label: 'Главная' },
  { key: '/stavropol', label: 'Ставрополь' },
  { key: '/krai', label: 'Ставропольский край' },
  { key: '/skfo', label: 'СКФО' },
  { key: '/articles', label: 'Статьи' },
  { key: '/photo-reports', label: 'Фоторепортажи' },
  { key: '/history', label: 'История Ставрополья' },
] as const;

export function TopNav({ className }: { className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Select best matching key by current pathname
  const selectedKeys = [
    items
      .map((i) => i.key)
      .sort((a, b) => b.length - a.length)
      .find((k) => (k === '/' ? location.pathname === '/' : location.pathname.startsWith(k))) ?? '/',
  ];

  return (
    <Menu
      mode="horizontal"
      selectedKeys={selectedKeys}
      items={items.map((i) => ({ key: i.key, label: i.label }))}
      onClick={(e) => navigate(e.key)}
      className={className}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
}
