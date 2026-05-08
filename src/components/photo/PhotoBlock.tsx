import { useId, useMemo, useState } from 'react';

import styles from './PhotoBlock.module.scss';

type CaptionMode = 'with' | 'without';

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
  const hasMeta = Boolean(description || author);
  const [captionMode, setCaptionMode] = useState<CaptionMode>('with');

  const radioName = useId();

  const captionText = useMemo(() => {
    return {
      with: 'С подписью',
      without: 'Без подписи',
    } satisfies Record<CaptionMode, string>;
  }, []);

  return (
    <div className={styles.block}>
      {hasMeta ? (
        <div className={styles.controls}>
          <div className={styles.radios}>
            <label className={styles.radio}>
              <input
                type="radio"
                name={radioName}
                checked={captionMode === 'with'}
                onChange={() => setCaptionMode('with')}
              />
              <span>{captionText.with}</span>
            </label>

            <label className={styles.radio}>
              <input
                type="radio"
                name={radioName}
                checked={captionMode === 'without'}
                onChange={() => setCaptionMode('without')}
              />
              <span>{captionText.without}</span>
            </label>
          </div>

          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => setCaptionMode((m) => (m === 'with' ? 'without' : 'with'))}
          >
            Переключить
          </button>
        </div>
      ) : null}

      <div className={styles.wrap}>
        {logoUrl && <img className={styles.logo} src={logoUrl} alt="logo" />}
        <img className={styles.image} src={src} alt={alt} />
      </div>

      {hasMeta && captionMode === 'with' ? (
        <div className={styles.meta}>
          <div className={styles.desc}>{description}</div>
          <div className={styles.author}>{author ? `Фото ${author}` : ''}</div>
        </div>
      ) : null}
    </div>
  );
}
