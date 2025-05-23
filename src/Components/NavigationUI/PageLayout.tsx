import { ReactNode, useState } from 'react';
import { useBreadcrumbTrail } from '@/Navigation/CombinedNav/CombinedNavAndTypes/useBreadCrumbTrail';
import '@/scss/NavigationStyles/PageLayout.scss';

type PageLayoutProps = {
  children: ReactNode;
  shortTitle?: string; // Optional override for <title>
};

const PageLayout = ({ children, shortTitle }: PageLayoutProps) => {
  const breadcrumb = useBreadcrumbTrail();
  const [showTooltip, setShowTooltip] = useState(false);

  const title =
    shortTitle ||
    (breadcrumb.length > 0 ? breadcrumb.join(' > ') : 'Untitled Page');

  // ✅ Set document title with proper separator
  document.title = title;

  // ✅ Group breadcrumb pairs (for tooltip rows)
  const rows: [string, string][] = [];
  for (let i = 0; i < breadcrumb.length; i += 2) {
    rows.push([breadcrumb[i], breadcrumb[i + 1] ?? '']);
  }

  return (
    <div
      className="PageLayout"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {showTooltip && breadcrumb.length > 1 && (
        <div className="BreadcrumbTooltip">
          {rows.map(([left, right], i) => (
            <div key={i} className="BreadcrumbRow">
              <span className="BreadcrumbLeft">{left}</span>
              <span className="BreadcrumbArrow">›</span>
              <span className="BreadcrumbRight">{right}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageLayout;
