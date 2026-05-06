import { useParams } from 'react-router-dom';

import { StubPage } from './StubPage';

export function DetailPage() {
  const { id } = useParams();

  return <StubPage title={`Detail/${id ?? ''}`.replace(/\/$/, '')} />;
}
