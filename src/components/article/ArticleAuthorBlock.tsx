import styles from './ArticleAuthorBlock.module.scss';
import { ClockIcon } from '../icons/ClockIcon';

export function ArticleAuthorBlock({
  authorName,
  authorAvatarUrl,
  publishedAt,
}: {
  authorName: string;
  authorAvatarUrl: string;
  publishedAt: string | Date;
}) {
  const date = typeof publishedAt === 'string' ? new Date(publishedAt) : publishedAt;

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  const publishedLabel = `${formattedTime}, ${formattedDate}`;

  return (
    <div className={styles.wrap}>
      <img className={styles.avatar} src={authorAvatarUrl} alt={authorName} />
      <div className={styles.left}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{authorName}</span>
          <button type="button" className={styles.subscribeBtn}>
            Подписаться
          </button>
        </div>
        <div className={styles.sub}>
          <ClockIcon className={styles.clock} />
          <span>{publishedLabel}</span>
        </div>
      </div>
    </div>
  );
}
