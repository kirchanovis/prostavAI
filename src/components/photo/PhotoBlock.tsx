import styles from './PhotoBlock.module.scss';

export function PhotoBlock({
  src,
  alt,
  description,
  author,
  logoUrl,
}: {
  src: string;
  alt: string;
  description?: string;
  author?: string;
  logoUrl?: string;
}) {
  return (
    <div className={styles.block}>
      <div className={styles.wrap}>
        {logoUrl && <img className={styles.logo} src={logoUrl} alt="logo" />}
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
