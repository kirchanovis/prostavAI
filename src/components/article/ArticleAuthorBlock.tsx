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

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <div className={styles.title}>{authorName}</div>
        <div className={styles.sub}>{date.toLocaleString()}</div>
      </div>
      <img className={styles.avatar} src={authorAvatarUrl} alt={authorName} />
    </div>
  );
}
