import { Masonry } from 'antd';

import type React from 'react';

type BlockAwareItem = { block?: string };

export function NewsMasonryGrid<T extends BlockAwareItem>({
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
      items={items.map((item, idx) => ({
        key: idx,
        data: item,
        // Make wide cards span 2 columns
        column: item.block === 'NewsImageWideCard' ? 2 : 1,
      }))}
      itemRender={(info) => renderItem(info.data)}
    />
  );
}
