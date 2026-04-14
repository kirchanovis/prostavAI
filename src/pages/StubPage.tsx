import { Typography } from 'antd';

export function StubPage({ title }: { title: string }) {
  return (
    <div>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        {title}
      </Typography.Title>
      <Typography.Paragraph type="secondary">Страница в разработке.</Typography.Paragraph>
    </div>
  );
}
