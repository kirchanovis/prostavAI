import { useLocation } from 'react-router-dom';

import { IconHistory } from '../icons';
import styles from './TopNav.module.scss';

export type TopNavItem = { key: string; label: string };

export function TopNav({
  className,
  items,
  onSelect,
}: {
  className?: string;
  items: readonly TopNavItem[];
  onSelect: (key: string) => void;
}) {
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
            className={[styles.link, i.key === '/history' ? styles.linkWithIcon : '', isActive ? styles.linkActive : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => onSelect(i.key)}
          >
            {i.key === '/history' && (
              <div className={styles.iconWrap}>
                <IconHistory size={18} />
              </div>
            )}
            {i.label}
          </button>
        );
      })}
    </nav>
  );
}
