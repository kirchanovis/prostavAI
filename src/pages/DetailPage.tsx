import { Typography } from 'antd';

import { CommentsBlock } from '../components/comments/CommentsBlock';
import { PhotoBlock } from '../components/photo/PhotoBlock';
import { SocialBlock } from '../components/social/SocialBlock';
import { commentsMockData } from '../mocks/comments';

export function DetailPage() {
  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      <Typography.Title level={1} style={{ margin: 0, fontSize: 42, lineHeight: 1.15 }}>
        16 апреля стартует краевой автопробег «Эх, путь-дорожка фронтовая» от Вечного огня
      </Typography.Title>

      <PhotoBlock src="/src/assets/photos/den-goroda-stavropol-5.jpg" alt="Автопробег" />

      <Typography.Title level={3} style={{ margin: 0, fontSize: 21, lineHeight: 1.35 }}>
        4 района и округа, более 100 населенных пунктов Ставропольского края посетят участники автопробега «Эх,
        путь-дорожка фронтовая».
      </Typography.Title>

      <Typography.Title level={3} style={{ margin: 0, fontSize: 21, lineHeight: 1.35 }}>
        У мемориала Вечный огонь ветераны, школьники, студенты, жители города развёрнут копию Знамени Победы в честь
        73-й годовщины Победы в Великой Отечественной войне, почтут память всех павших и возложат цветы к подножию
        памятника – дадут старт автопробегу. Его цель - объединить одной памятью, одной историей и единым чувством
        гордости и благодарности поколению победителей.
      </Typography.Title>

      <Typography.Title level={3} style={{ margin: 0, fontSize: 21, lineHeight: 1.35 }}>
        По информации пресс-службы администрации Ставрополя, завершится автопробег «Эх, путь-дорожка фронтовая» 8 мая на
        территории Ставропольского кадетского президентского училища.
      </Typography.Title>

      <SocialBlock stats={{ comments: commentsMockData.length, likes: 12, views: 420 }} />

      <CommentsBlock items={commentsMockData} />
    </div>
  );
}
