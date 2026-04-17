import styles from './NewsCard.module.scss';

export function NewsCard({
  category,
  title,
  publishedAt,
}: {
  category: string;
  title: string;
  publishedAt: string | Date;
}) {
  const date = typeof publishedAt === 'string' ? new Date(publishedAt) : publishedAt;

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.max(0, Math.floor(diffMs / 60000));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const formatRelative = () => {
    if (diffMinutes < 60) return `${diffMinutes} минут назад`;
    if (diffHours < 24) return `${diffHours} часов назад`;
    return `${diffDays} дней назад`;
  };

  const relativeLabel = formatRelative();

  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.category}>{category}</div>

        <div className={styles.title}>{title}</div>

        <div className={styles.meta}>{relativeLabel}</div>
      </div>
    </div>
  );
}
