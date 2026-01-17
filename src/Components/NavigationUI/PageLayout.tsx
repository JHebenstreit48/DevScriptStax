import { ReactNode } from 'react';
import { useBreadcrumbTrail } from '@/hooks/navigation/useBreadcrumbTrail';
import '@/scss/Navigation/index.scss';

type PageLayoutProps = {
  children: ReactNode;
  shortTitle?: string; // Optional override for <title>
};

const PageLayout = ({ children, shortTitle }: PageLayoutProps) => {
  const breadcrumb = useBreadcrumbTrail();

  const title =
    shortTitle || (breadcrumb.length > 0 ? breadcrumb.join(' > ') : 'Untitled Page');

  // ✅ Keep this — it sets the browser tab title
  document.title = title;

  return (
    <div className="PageLayout">
      {children}
    </div>
  );
};

export default PageLayout;