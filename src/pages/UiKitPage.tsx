import { Card, Divider, Space, Typography } from 'antd';

import { IconChat, IconClock, IconEye, IconLike } from '../icons';

export function UiKitPage() {
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
        <Space size={16} align="center">
          <IconChat size={28} />
          <IconClock size={28} />
          <IconEye size={28} />
          <IconLike size={28} />
        </Space>
      </Card>
    </Space>
  );
}
