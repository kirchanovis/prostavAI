import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './NewsPage.module.scss';
import { ArticleAuthorBlock } from '../components/article/ArticleAuthorBlock';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { PhotoBlock } from '../components/photo/PhotoBlock';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';
import newsApi, { type NewsDetailItem } from '../mocks/newsApi';

export function NewsPage() {
  const { id } = useParams();
  const numericId = Number(id);

  const [detail, setDetail] = useState<NewsDetailItem | null>(null);

  useEffect(() => {
    if (!Number.isFinite(numericId)) return;

    newsApi.getNewsDetailById(numericId, ({ items }) => {
      setDetail(items[0] ?? null);
    });
  }, [numericId]);

  const shouldUseDetailMock = numericId === 1 || numericId === 2;

  if (shouldUseDetailMock) {
    if (!detail) return null;

    return (
      <div className={styles.wrap}>
        <h1 className={styles.h1}>{detail.title}</h1>

        <PhotoBlock src={detail.image.src} alt={detail.image.alt ?? detail.title} logoUrl={detail.image.logoUrl} />

        <ArticleAuthorBlock
          authorName={detail.authorName}
          authorAvatarUrl={detail.authorAvatarUrl}
          publishedAt={detail.date}
        />

        {detail.description ? <p className={styles.body}>{detail.description}</p> : null}

        {detail.content.map((b, idx) => {
          if (b.type === 'h3')
            return (
              <h3 key={idx} className={styles.h3}>
                {b.text}
              </h3>
            );
          if (b.type === 'p')
            return (
              <p key={idx} className={styles.body}>
                {b.text}
              </p>
            );
          if (b.type === 'photo') {
            return (
              <PhotoBlock
                key={idx}
                src={b.src}
                alt={b.alt ?? ''}
                logoUrl={b.logoUrl}
                description={b.caption}
                author={b.author}
              />
            );
          }
          return null;
        })}

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

  return null;
}
