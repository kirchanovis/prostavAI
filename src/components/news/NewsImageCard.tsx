import styles from './NewsImageCard.module.scss';

export function NewsImageCard({
  category,
  title,
  publishedAt,
  imageUrl,
}: {
  category: string;
  title: string;
  publishedAt: string | Date;
  imageUrl: string;
}) {
  const date = typeof publishedAt === 'string' ? new Date(publishedAt) : publishedAt;

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.max(0, Math.floor(diffMs / 60000));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const pluralRu = (n: number, one: string, few: string, many: string) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 14) return many;
    if (mod10 === 1) return one;
    if (mod10 >= 2 && mod10 <= 4) return few;
    return many;
  };

  const formatRelative = () => {
    if (diffMinutes < 60) {
      const word = pluralRu(diffMinutes, 'минуту', 'минуты', 'минут');
      return `${diffMinutes} ${word} назад`;
    }

    if (diffHours < 24) {
      const word = pluralRu(diffHours, 'час', 'часа', 'часов');
      return `${diffHours} ${word} назад`;
    }

    const word = pluralRu(diffDays, 'день', 'дня', 'дней');
    return `${diffDays} ${word} назад`;
  };

  return (
    <div className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay} />
      <div className={styles.grid}>
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>{formatRelative()}</div>
      </div>
    </div>
  );
}
