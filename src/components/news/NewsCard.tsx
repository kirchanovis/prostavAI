import styles from './NewsCard.module.scss';
import { ClockIcon } from '../icons/ClockIcon';

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

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.category}>{category}</div>

        <div className={styles.title}>{title}</div>

        <div className={styles.meta}>
          <ClockIcon />
          <span>
            {formattedTime} · {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
}
