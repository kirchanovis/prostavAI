import styles from './OnSceneReportCard.module.scss';

export function OnSceneReportCard({ timeLabel, title }: { timeLabel: string; title: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.time}>{timeLabel}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
