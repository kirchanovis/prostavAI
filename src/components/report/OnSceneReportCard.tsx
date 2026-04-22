import styles from './OnSceneReportCard.module.scss';

export function OnSceneReportCard({
  timeLabel,
  title,
  media,
}: {
  timeLabel: string;
  title: string;
  media?:
    | { type: 'image'; src: string; alt?: string }
    | { type: 'video'; src: string }
    | { type: 'youtube'; videoId: string; title?: string };
}) {
  return (
    <div className={styles.card}>
      <div className={styles.time}>{timeLabel}</div>

      {media?.type === 'image' && <img className={styles.media} src={media.src} alt={media.alt ?? ''} />}

      {media?.type === 'video' && <video className={styles.media} src={media.src} controls preload="metadata" />}

      {media?.type === 'youtube' && (
        <iframe
          className={styles.media}
          src={`https://www.youtube.com/embed/${media.videoId}`}
          title={media.title ?? 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}

      <div className={styles.title}>{title}</div>
    </div>
  );
}
