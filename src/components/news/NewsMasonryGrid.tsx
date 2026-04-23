import styles from './NewsMasonryGrid.module.scss';

import type React from 'react';

type BlockAwareItem = { block?: string };

export function NewsMasonryGrid<T extends BlockAwareItem>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <div className={styles.grid}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={styles.item}
          data-block={item.block ?? 'NewsCard'}
          style={
            item.block === 'NewsImageWideCard' || item.block === 'NewsVideoCard' ? { gridColumn: 'span 2' } : undefined
          }
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
