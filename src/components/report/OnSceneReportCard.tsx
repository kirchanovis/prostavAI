import styles from './OnSceneReportCard.module.scss';

export function OnSceneReportCard({
  timeLabel,
  title,
  media,
}: {
  timeLabel: string;
  title: string;
  media?: { type: 'image' | 'video'; src: string; alt?: string };
}) {
  return (
    <div className={styles.card}>
      {media?.type === 'image' && <img className={styles.media} src={media.src} alt={media.alt ?? ''} />}
      {media?.type === 'video' && <video className={styles.media} src={media.src} controls preload="metadata" />}
      <div className={styles.time}>{timeLabel}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
