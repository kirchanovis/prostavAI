import { useLocation, useNavigate } from 'react-router-dom';

import styles from './TopNav.module.scss';

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

  const activeKey =
    items
      .map((i) => i.key)
      .sort((a, b) => b.length - a.length)
      .find((k) => (k === '/' ? location.pathname === '/' : location.pathname.startsWith(k))) ?? '/';

  return (
    <nav className={[styles.nav, className].filter(Boolean).join(' ')}>
      {items.map((i) => {
        const isActive = i.key === activeKey;
        return (
          <button
            key={i.key}
            type="button"
            className={[styles.link, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')}
            onClick={() => navigate(i.key)}
          >
            {i.label}
          </button>
        );
      })}
    </nav>
  );
}
