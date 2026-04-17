import styles from './NewsMasonryGrid.module.scss';

import type React from 'react';

export function NewsMasonryGrid<T>({ items, renderItem }: { items: T[]; renderItem: (item: T) => React.ReactNode }) {
  return (
    <div className={styles.grid}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.item}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
