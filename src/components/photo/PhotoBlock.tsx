import styles from './PhotoBlock.module.scss';

export function PhotoBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.wrap}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
}
