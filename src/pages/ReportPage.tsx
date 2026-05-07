import styles from './DetailPage.module.scss';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { OnSceneReportCard } from '../components/report/OnSceneReportCard';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';

export function ReportPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Репортажи с места событий</h1>

      <OnSceneReportCard
        timeLabel="10 минут назад"
        title="На проспекте перекрыли движение: что известно"
        media={{ type: 'image', src: '/src/assets/photos/IMG_2244.png', alt: 'Сцена' }}
      />

      <OnSceneReportCard
        timeLabel="35 минут назад"
        title="Очевидцы публикуют видео: ситуация развивается"
        media={{ type: 'youtube', videoId: 'k_TqWxnGbL4', title: 'YouTube' }}
      />

      <OnSceneReportCard
        timeLabel="1 час назад"
        title="Коммунальные службы приступили к работам"
        media={{ type: 'image', src: '/src/assets/photos/IMG_2608.png', alt: 'Работы' }}
      />

      <OnSceneReportCard
        timeLabel="2 часа назад"
        title="Заявление пресс-службы: комментарий официальных лиц"
        media={{ type: 'image', src: '/src/assets/photos/IMG_1817.png', alt: 'Комментарий' }}
      />

      <OnSceneReportCard timeLabel="3 часа назад" title="Обновление: подробности уточняются (без медиа)" />

      <OnSceneReportCard
        timeLabel="Сегодня"
        title="Фотоподборка: хроника событий"
        media={{ type: 'image', src: '/src/assets/photos/den-goroda-stavropol-5.jpg', alt: 'Хроника' }}
      />

      <SocialBlock stats={{ comments: commentsMockData.length, likes: 28, views: 1040 }} />

      <div className={styles.center}>
        <div className={styles.centerInner}>
          <CommentsBlock items={commentsMockData} />
        </div>
      </div>
    </div>
  );
}
