import styles from './PhotoBlock.module.scss';

export function PhotoBlock({
  src,
  alt,
  description,
  author,
}: {
  src: string;
  alt: string;
  description?: string;
  author?: string;
}) {
  return (
    <div className={styles.block}>
      <div className={styles.wrap}>
        <img className={styles.image} src={src} alt={alt} />
      </div>

      {(description || author) && (
        <div className={styles.meta}>
          <div className={styles.desc}>{description}</div>
          <div className={styles.author}>{author ? `Фото ${author}` : ''}</div>
        </div>
      )}
    </div>
  );
}
