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
    <Masonry
      columns={columns}
      gutter={gutter}
      items={items.map((item, idx) => ({ key: idx, data: item }))}
      itemRender={(info) => renderItem(info.data)}
    />
  );
}
