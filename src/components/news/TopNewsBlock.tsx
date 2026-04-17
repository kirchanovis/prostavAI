import styles from './TopNewsBlock.module.scss';

export function TopNewsBlock({ titles }: { titles: string[] }) {
  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.category}>Главные новости</div>

        <div className={styles.listWrap}>
          <ul className={styles.list}>
            {titles.map((t) => (
              <li key={t} className={styles.item}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
