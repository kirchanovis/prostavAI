import styles from './ArticleAuthorBlock.module.scss';

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
      <div className={styles.left}>
        <div className={styles.title}>{authorName}</div>
        <div className={styles.sub}>{publishedLabel}</div>
      </div>
      <img className={styles.avatar} src={authorAvatarUrl} alt={authorName} />
    </div>
  );
}
