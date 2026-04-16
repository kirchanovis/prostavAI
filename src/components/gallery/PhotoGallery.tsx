import { useMemo, useState } from 'react';

import styles from './PhotoGallery.module.scss';

import type { PhotoItem } from '../../mocks/photos';

export function PhotoGallery({ items }: { items: ReadonlyArray<PhotoItem> }) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [activeId, setActiveId] = useState<number>(() => safeItems[0]?.id ?? 0);

  const activeIndex = useMemo(() => safeItems.findIndex((i) => i.id === activeId), [activeId, safeItems]);
  const activeItem = safeItems[activeIndex] ?? safeItems[0];

  if (!activeItem) {
    return <div className={styles.empty}>Нет фотографий</div>;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.mainCard}>
        <div className={styles.mainArea}>
          <div key={activeItem.id} className={styles.mainImageWrap}>
            <img className={styles.mainImage} src={activeItem.imageUrl} alt={activeItem.title} />
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaLeft}>
              <span className={styles.metaLabel}>{activeItem.author}</span>
            </div>
            <div className={styles.metaRight}>
              <span className={styles.metaLabel}>{activeItem.description}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thumbs}>
        {safeItems.map((p) => {
          const active = p.id === activeItem.id;
          return (
            <button
              key={p.id}
              type="button"
              className={active ? `${styles.thumbBtn} ${styles.thumbActive}` : styles.thumbBtn}
              onClick={() => setActiveId(p.id)}
              aria-label={`Открыть фото: ${p.title}`}
            >
              <img className={styles.thumbImg} src={p.imageUrl} alt={p.title} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
