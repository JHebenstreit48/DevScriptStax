import { ReactNode, useRef } from 'react';
import { useBreadcrumbTrail } from '@/hooks/navigation/useBreadcrumbTrail';
import { useHighlightOnArrival } from '@/hooks/navigation/useHighlightOnArrival';

type PageLayoutProps = {
  children: ReactNode;
  shortTitle?: string;
};

const PageLayout = ({ children, shortTitle }: PageLayoutProps) => {
  const breadcrumb = useBreadcrumbTrail();
  const containerRef = useRef<HTMLDivElement>(null);

  useHighlightOnArrival(containerRef);

  const title =
    shortTitle || (breadcrumb.length > 0 ? breadcrumb.join(' > ') : 'Untitled Page');

  document.title = title;

  return (
    <div className="PageLayout" ref={containerRef}>
      {children}
    </div>
  );
};

export default PageLayout;