import { Masonry } from 'antd';

import type React from 'react';

export function NewsMasonryGrid<T>({
  items,
  renderItem,
  columns = 4,
  gutter = 16,
}: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  columns?: number;
  gutter?: number;
}) {
  return (
    <Masonry columns={columns} gutter={gutter}>
      {items.map((item, idx) => (
        <div key={idx}>{renderItem(item)}</div>
      ))}
    </Masonry>
  );
}
