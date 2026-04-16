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
    <div className={styles.gallery}>
      <div className={styles.mainPhoto}>
        <div key={activeItem.id} className={styles.mainPhotoImgWrap}>
          <img className={styles.mainPhotoImg} src={activeItem.imageUrl} alt={activeItem.title} />
        </div>

        <div className={styles.mainPhotoMeta}>
          <div className={styles.mainPhotoDesc}>{activeItem.description}</div>
          <div className={styles.mainPhotoAuthor}>Фото {activeItem.author}</div>
        </div>
      </div>

      <div className={styles.minPhoto}>
        {safeItems.map((p) => {
          const active = p.id === activeItem.id;
          return (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              className={active ? `${styles.minPhotoItem} ${styles.minPhotoItemActive}` : styles.minPhotoItem}
              onClick={() => setActiveId(p.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveId(p.id);
              }}
              aria-label={`Открыть фото: ${p.title}`}
            >
              <img className={styles.minPhotoImg} src={p.imageUrl} alt={p.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
