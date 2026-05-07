import styles from './DetailPage.module.scss';
import { ArticleAuthorBlock } from '../components/article/ArticleAuthorBlock';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { PhotoBlock } from '../components/photo/PhotoBlock';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';

export function DetailPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>16 апреля стартует краевой автопробег «Эх, путь-дорожка фронтовая» от Вечного огня</h1>

      <PhotoBlock
        src="/src/assets/photos/den-goroda-stavropol-5.jpg"
        alt="Автопробег"
        description="Автопробег «Эх, путь-дорожка фронтовая» стартует от мемориала Вечный огонь"
        author="Пресс-служба"
        logoUrl="/src/assets/brand/logo-white.png"
      />

      <ArticleAuthorBlock
        authorName="Администрация Ставрополя"
        authorAvatarUrl="https://i.pravatar.cc/80?img=5"
        publishedAt="2022-04-16T09:00:00.000Z"
      />

      <h3 className={styles.h3}>
        4 района и округа, более 100 населенных пунктов Ставропольского края посетят участники автопробега «Эх,
        путь-дорожка фронтовая».
      </h3>

      <h3 className={styles.h3}>
        У мемориала Вечный огонь ветераны, школьники, студенты, жители города развёрнут копию Знамени Победы в честь
        73-й годовщины Победы в Великой Отечественной войне, почтут память всех павших и возложат цветы к подножию
        памятника – дадут старт автопробегу. Его цель - объединить одной памятью, одной историей и единым чувством
        гордости и благодарности поколению победителей.
      </h3>

      <h3 className={styles.h3}>
        По информации пресс-службы администрации Ставрополя, завершится автопробег «Эх, путь-дорожка фронтовая» 8 мая на
        территории Ставропольского кадетского президентского училища.
      </h3>

      <SocialBlock stats={{ comments: commentsMockData.length, likes: 12, views: 420 }} />

      <CommentsBlock items={commentsMockData} />
    </div>
  );
}
