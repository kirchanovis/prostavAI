import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './NewsPage.module.scss';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { OnSceneReportCard } from '../components/report/OnSceneReportCard';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';
import reportApi, { type ReportDetail } from '../mocks/reportApi';

export function ReportPage() {
  const { id } = useParams();
  const numericId = Number(id);

  const [detail, setDetail] = useState<ReportDetail | null>(null);

  useEffect(() => {
    if (!Number.isFinite(numericId)) return;

    reportApi.getReportById(numericId, ({ items }) => {
      setDetail(items[0] ?? null);
    });
  }, [numericId]);

  if (!detail) return null;

  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>{detail.title}</h1>

      {detail.items.map((it) => (
        <OnSceneReportCard key={it.id} timeLabel={it.timeLabel} title={it.title} media={it.media} />
      ))}

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
