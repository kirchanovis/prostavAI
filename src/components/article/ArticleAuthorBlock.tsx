import { Typography } from 'antd';

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
        <Typography.Text className={styles.title}>Автор статьи: {authorName}</Typography.Text>
        <Typography.Text className={styles.sub}>{date.toLocaleString()}</Typography.Text>
      </div>
      <img className={styles.avatar} src={authorAvatarUrl} alt={authorName} />
    </div>
  );
}
