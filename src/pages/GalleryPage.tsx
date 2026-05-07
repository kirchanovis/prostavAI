import styles from './DetailPage.module.scss';
import { ArticleAuthorBlock } from '../components/article/ArticleAuthorBlock';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { PhotoGallery } from '../components/gallery/PhotoGallery';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';
import { photosData } from '../mocks/photos';

export function GalleryPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Российская студенческая весна 2018 Первый день</h1>

      <ArticleAuthorBlock
        authorName="Редакция"
        authorAvatarUrl="https://i.pravatar.cc/80?img=8"
        publishedAt="2018-05-15T09:00:00.000Z"
      />

      <PhotoGallery items={photosData} />

      <SocialBlock stats={{ comments: commentsMockData.length, likes: 34, views: 1520 }} />

      <div className={styles.center}>
        <div className={styles.centerInner}>
          <CommentsBlock items={commentsMockData} />
        </div>
      </div>
    </div>
  );
}
