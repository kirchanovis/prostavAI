import { useLocation, useNavigate } from 'react-router-dom';

import { TopNav } from '../components/TopNav';
import { topNavItems } from '../components/topNavItems';

export function MenuContainer({ className }: { className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TopNav
      className={className}
      items={topNavItems}
      onSelect={(key) => navigate(key)}
      locationPathname={location.pathname}
    />
  );
}
