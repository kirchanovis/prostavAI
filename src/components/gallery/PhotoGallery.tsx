import { Card, Image, Space, Typography } from 'antd';
import { useMemo, useState } from 'react';

import styles from './PhotoGallery.module.scss';

import type { PhotoItem } from '../../mocks/photos';

export function PhotoGallery({ items }: { items: ReadonlyArray<PhotoItem> }) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [activeId, setActiveId] = useState<number>(() => safeItems[0]?.id ?? 0);

  const activeIndex = useMemo(() => safeItems.findIndex((i) => i.id === activeId), [activeId, safeItems]);
  const activeItem = safeItems[activeIndex] ?? safeItems[0];

  if (!activeItem) {
    return (
      <Card>
        <Typography.Text type="secondary">Нет фотографий</Typography.Text>
      </Card>
    );
  }

  return (
    <Space direction="vertical" size={12} style={{ width: '100%' }}>
      <Card className={styles.mainCard} bodyStyle={{ padding: 16 }}>
        <div className={styles.mainArea}>
          <div key={activeItem.id} className={styles.mainImageWrap}>
            <Image className={styles.mainImage} src={activeItem.imageUrl} alt={activeItem.title} preview={false} />
          </div>
          <div className={styles.metaRow}>
            <div className={styles.metaLeft}>
              <Typography.Text className={styles.metaLabel}>Автор:</Typography.Text>{' '}
              <Typography.Text>{activeItem.author}</Typography.Text>
            </div>
            <div className={styles.metaRight}>
              <Typography.Text className={styles.metaLabel}>Описание:</Typography.Text>{' '}
              <Typography.Text>{activeItem.description}</Typography.Text>
            </div>
          </div>
        </div>
      </Card>

      <div className={styles.thumbs}>
        {safeItems.map((p) => {
          const active = p.id === activeItem.id;
          return (
            <button
              key={p.id}
              className={active ? `${styles.thumbBtn} ${styles.thumbActive}` : styles.thumbBtn}
              onClick={() => setActiveId(p.id)}
              aria-label={`Открыть фото: ${p.title}`}
            >
              <img className={styles.thumbImg} src={p.imageUrl} alt={p.title} />
            </button>
          );
        })}
      </div>
    </Space>
  );
}
