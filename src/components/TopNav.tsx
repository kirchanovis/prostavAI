import { IconHistory } from '../icons';
import { getActiveNavKey } from './getActiveNavKey';
import styles from './TopNav.module.scss';

export type TopNavItem = { key: string; label: string };

export function TopNav({
  className,
  items,
  onSelect,
  locationPathname,
}: {
  className?: string;
  items: readonly TopNavItem[];
  onSelect: (key: string) => void;
  locationPathname: string;
}) {
  const activeKey = getActiveNavKey(items, locationPathname);

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
                <IconHistory className={styles.icon} size={18} />
              </div>
            )}
            {i.label}
          </button>
        );
      })}
    </nav>
  );
}
