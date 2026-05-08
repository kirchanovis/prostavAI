import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './NewsPage.module.scss';
import { ArticleAuthorBlock } from '../components/article/ArticleAuthorBlock';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { PhotoGallery } from '../components/gallery/PhotoGallery';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';
import galleryApi, { type GalleryDetail } from '../mocks/galleryApi';

export function GalleryPage() {
  const { id } = useParams();
  const numericId = Number(id);

  const [detail, setDetail] = useState<GalleryDetail | null>(null);

  useEffect(() => {
    if (!Number.isFinite(numericId)) return;

    galleryApi.getGalleryById(numericId, ({ items }) => {
      setDetail(items[0] ?? null);
    });
  }, [numericId]);

  if (!detail) return null;

  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>{detail.title}</h1>

      <ArticleAuthorBlock
        authorName={detail.authorName}
        authorAvatarUrl={detail.authorAvatarUrl}
        publishedAt={detail.date}
      />

      <PhotoGallery items={detail.photos as unknown as Parameters<typeof PhotoGallery>[0]['items']} />

      <SocialBlock
        stats={{
          comments: detail.stats?.comments ?? commentsMockData.length,
          likes: detail.stats?.likes,
          views: detail.stats?.views,
        }}
      />

      <div className={styles.center}>
        <div className={styles.centerInner}>
          <CommentsBlock items={commentsMockData} />
        </div>
      </div>
    </div>
  );
}
