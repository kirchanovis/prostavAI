import { Card, Divider, Space, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { ArticleAuthorBlock } from '../components/article/ArticleAuthorBlock';
import { CommentsBlock } from '../components/comments/CommentsBlock';
import { PhotoGallery } from '../components/gallery/PhotoGallery';
import { AdImageCard } from '../components/news/AdImageCard';
import { NewsCard } from '../components/news/NewsCard';
import { NewsImageCard } from '../components/news/NewsImageCard';
import { NewsImageWideCard } from '../components/news/NewsImageWideCard';
import { NewsVideoCard } from '../components/news/NewsVideoCard';
import { TopNewsBlock } from '../components/news/TopNewsBlock';
import { PhotoBlock } from '../components/photo/PhotoBlock';
import { OnSceneReportCard } from '../components/report/OnSceneReportCard';
import { TopNav } from '../components/TopNav';
import { topNavItems } from '../components/topNavItems';
import {
  IconChat,
  IconClock,
  IconError,
  IconEye,
  IconFacebook,
  IconHistory,
  IconLike,
  IconOk,
  IconPlay,
  IconSuccess,
  IconTwitter,
  IconVk,
} from '../icons';
import { commentsMockData } from '../mocks/comments';
import { photosData } from '../mocks/photos';

const demoTopNewsTitles: string[] = [
  'Открыта регистрация на весенний митап',
  'В центре перекроют движение на выходных',
  'Обновили дизайн-систему: новые токены и иконки',
  'Запускаем новую рубрику с подборками недели',
  'Фестиваль уличной еды возвращается в мае',
];

export function UiKitPage() {
  const location = useLocation();
  useNavigate();
  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        UI Kit
      </Typography.Title>
      <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
        Страница для сборки и проверки переиспользуемых компонентов/токенов (типографика, цвета, иконки).
      </Typography.Paragraph>

      <Divider style={{ margin: '12px 0' }} />

      <Card title="Typography (tokens)" style={{ width: '100%' }}>
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <div style={{ fontSize: 'var(--typo-h1-size)', fontWeight: 'var(--typo-h1-weight)' }}>H1 — 42</div>
          <div style={{ fontSize: 'var(--typo-h2-size)', fontWeight: 'var(--typo-h2-weight)' }}>H2 — 24</div>
          <div style={{ fontSize: 'var(--typo-h3-size)', fontWeight: 'var(--typo-h3-weight)' }}>H3 — 21</div>
          <div style={{ fontSize: 'var(--typo-body-size)', fontWeight: 'var(--typo-body-weight)' }}>
            Body — 21: обычный текст
          </div>
          <div style={{ fontSize: 'var(--typo-h4-size)', fontWeight: 'var(--typo-h4-weight)' }}>H4 — 16</div>
          <div
            style={{
              fontSize: 'var(--typo-comment-size)',
              fontWeight: 'var(--typo-comment-weight)',
              fontStyle: 'italic',
            }}
          >
            Comment — 21 (semibold italic)
          </div>
          <div style={{ fontSize: 'var(--typo-news-caption-size)', fontWeight: 'var(--typo-news-caption-weight)' }}>
            News caption — 16
          </div>
          <div style={{ fontSize: 'var(--typo-home-caption-size)', fontWeight: 'var(--typo-home-caption-weight)' }}>
            Home caption — 12
          </div>
          <div style={{ fontSize: 'var(--typo-caption-size)', fontWeight: 'var(--typo-caption-weight)' }}>
            Caption — 12
          </div>
        </Space>
      </Card>

      <Card title="Colors (tokens)" style={{ width: '100%' }}>
        <Space wrap size={12}>
          {[
            ['primary', 'var(--color-primary)'],
            ['bg', 'var(--color-bg)'],
            ['bg-light', 'var(--color-bg-light)'],
            ['text', 'var(--color-text)'],
            ['title', 'var(--color-text-title)'],
            ['caption', 'var(--color-text-caption)'],
            ['comment', 'var(--color-text-comment)'],
          ].map(([name, value]) => (
            <div key={name} style={{ width: 160 }}>
              <div
                style={{
                  height: 48,
                  borderRadius: 10,
                  background: value,
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              />
              <Typography.Text>{name}</Typography.Text>
              <br />
              <Typography.Text type="secondary">{value}</Typography.Text>
            </div>
          ))}
        </Space>
      </Card>

      <Card title="Icons" style={{ width: '100%' }}>
        <Space wrap size={16} align="center">
          {[
            { name: 'chat', icon: <IconChat size={28} /> },
            { name: 'clock', icon: <IconClock size={28} /> },
            { name: 'error', icon: <IconError size={28} /> },
            { name: 'eye', icon: <IconEye size={28} /> },
            { name: 'facebook', icon: <IconFacebook size={28} /> },
            { name: 'history', icon: <IconHistory size={28} /> },
            { name: 'like', icon: <IconLike size={28} /> },
            { name: 'ok', icon: <IconOk size={28} /> },
            { name: 'play', icon: <IconPlay size={28} /> },
            { name: 'success', icon: <IconSuccess size={28} /> },
            { name: 'twitter', icon: <IconTwitter size={28} /> },
            { name: 'vk', icon: <IconVk size={28} /> },
          ].map(({ name, icon }) => (
            <Space key={name} direction="vertical" align="center">
              {icon}
              <Typography.Text type="secondary">{name}</Typography.Text>
            </Space>
          ))}
        </Space>
      </Card>

      <Card title="PhotoGallery" style={{ width: '100%' }}>
        <PhotoGallery items={photosData} />
      </Card>

      <Card title="Comments (for gallery)" style={{ width: '100%' }}>
        <CommentsBlock items={commentsMockData} />
      </Card>

      <Card title="ArticleAuthorBlock" style={{ width: '100%' }}>
        <ArticleAuthorBlock
          authorName="Иван Иванов"
          authorAvatarUrl="https://i.pravatar.cc/80?img=8"
          publishedAt="2022-04-05T09:30:00.000Z"
        />
      </Card>

      <Card title="NewsCard" style={{ width: '100%' }}>
        <NewsCard
          category="События"
          title="Открыта регистрация на весенний митап"
          publishedAt="2026-04-17T10:15:00.000Z"
        />
      </Card>

      <Card title="Top news block" style={{ width: '100%' }}>
        <TopNewsBlock titles={demoTopNewsTitles} />
      </Card>

      <Card title="NewsImageCard" style={{ width: '100%' }}>
        <NewsImageCard
          category="События"
          title="Вечерняя программа: что посмотреть в городе"
          publishedAt="2026-04-17T10:15:00.000Z"
          imageUrl="/src/assets/photos/den-goroda-stavropol-5.jpg"
        />
      </Card>

      <Card title="AdImageCard" style={{ width: '100%' }}>
        <AdImageCard
          title="Скидки на выходные — успей забронировать"
          publishedAt="2026-04-17T10:15:00.000Z"
          imageUrl="/src/assets/photos/IMG_1817.png"
        />
      </Card>

      <Card title="NewsImageWideCard" style={{ width: '100%' }}>
        <NewsImageWideCard
          category="События"
          title="Открыта регистрация на весенний митап"
          publishedAt="2026-04-17T10:15:00.000Z"
          imageUrl="/src/assets/photos/AqI6FFiBDNE.jpg"
        />
      </Card>

      <Card title="NewsVideoCard (620)" style={{ width: '100%' }}>
        <NewsVideoCard
          category="События"
          title="Гид по выходным: что успеть за два дня"
          subtitle="Короткое видео с маршрутами и советами"
          publishedAt="2026-04-17T10:15:00.000Z"
          imageUrl="/src/assets/photos/IMG_2608.png"
        />
      </Card>

      <Card title="TopNav" style={{ width: '100%' }}>
        <TopNav items={topNavItems} onSelect={() => {}} locationPathname={location.pathname} />
      </Card>

      <Card title="PhotoBlock" style={{ width: '100%' }}>
        <PhotoBlock src="/src/assets/photos/IMG_2530.png" alt="Demo photo" />
      </Card>

      <Card title="OnSceneReportCard" style={{ width: '100%' }}>
        <OnSceneReportCard timeLabel="1 час назад" title="Репортаж с места событий: что известно к этому часу" />
      </Card>
    </Space>
  );
}
