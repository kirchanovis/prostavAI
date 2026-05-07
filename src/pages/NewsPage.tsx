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

  if (numericId === 2) {
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

  // Default: detail/1
  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>16 апреля стартует краевой автопробег «Эх, путь-дорожка фронтовая» от Вечного огня</h1>

      <PhotoBlock
        src="/src/assets/photos/den-goroda-stavropol-5.jpg"
        alt="Автопробег"
        description="Автопробег «Эх, путь-дорожка фронтовая» стартует от мемориала Вечный огонь"
        author="Пресс-служба"
        logoUrl="/src/assets/brand/logo-white.png"
      />

      <ArticleAuthorBlock
        authorName="Администрация Ставрополя"
        authorAvatarUrl="https://i.pravatar.cc/80?img=5"
        publishedAt="2022-04-16T09:00:00.000Z"
      />

      <h3 className={styles.h3}>
        4 района и округа, более 100 населенных пунктов Ставропольского края посетят участники автопробега «Эх,
        путь-дорожка фронтовая».
      </h3>

      <p className={styles.body}>
        У мемориала Вечный огонь ветераны, школьники, студенты, жители города развёрнут копию Знамени Победы в честь
        73-й годовщины Победы в Великой Отечественной войне, почтут память всех павших и возложат цветы к подножию
        памятника – дадут старт автопробегу. Его цель - объединить одной памятью, одной историей и единым чувством
        гордости и благодарности поколению победителей.
      </p>

      <p className={styles.body}>
        По информации пресс-службы администрации Ставрополя, завершится автопробег «Эх, путь-дорожка фронтовая» 8 мая на
        территории Ставропольского кадетского президентского училища.
      </p>

      <SocialBlock stats={{ comments: commentsMockData.length, likes: 12, views: 420 }} />

      <div className={styles.center}>
        <div className={styles.centerInner}>
          <CommentsBlock items={commentsMockData} />
        </div>
      </div>
    </div>
  );
}
