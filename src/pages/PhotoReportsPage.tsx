import { Space, Typography } from 'antd';
import { useEffect, useState } from 'react';

import { mockFetch } from '../api/mockFetch';
import { PhotoGallery } from '../components/gallery/PhotoGallery';

import type { PhotoItem } from '../mocks/photos';

type ApiResponse<T> = { items: T[] };

export function PhotoReportsPage() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await mockFetch<ApiResponse<PhotoItem>>('/api/photos');
      if (res.ok) setPhotos((await res.json()).items);
    })();
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        Фоторепортажи
      </Typography.Title>

      <PhotoGallery items={photos} />
    </Space>
  );
}
