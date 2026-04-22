import styles from './SocialBlock.module.scss';
import { IconChat, IconEye, IconFacebook, IconLike, IconOk, IconTwitter, IconVk } from '../../icons';

export function SocialBlock({
  onShare,
  stats,
}: {
  onShare?: (platform: 'facebook' | 'vk' | 'twitter' | 'ok') => void;
  stats?: { comments?: number; likes?: number; views?: number };
}) {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <div className={styles.share}>
          <button type="button" className={styles.iconBtn} onClick={() => onShare?.('facebook')}>
            <IconFacebook size={22} />
          </button>
          <button type="button" className={styles.iconBtn} onClick={() => onShare?.('vk')}>
            <IconVk size={22} />
          </button>
          <button type="button" className={styles.iconBtn} onClick={() => onShare?.('twitter')}>
            <IconTwitter size={22} />
          </button>
          <button type="button" className={styles.iconBtn} onClick={() => onShare?.('ok')}>
            <IconOk size={22} />
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stat}>
          <IconChat size={16} />
          <span className={styles.count}>{stats?.comments ?? 0}</span>
        </div>
        <div className={[styles.stat, styles.statLike].join(' ')}>
          <IconLike size={16} />
          <span className={styles.count}>{stats?.likes ?? 0}</span>
        </div>
        <div className={styles.stat}>
          <IconEye size={16} />
          <span className={styles.count}>{stats?.views ?? 0}</span>
        </div>
      </div>
    </div>
  );
}
