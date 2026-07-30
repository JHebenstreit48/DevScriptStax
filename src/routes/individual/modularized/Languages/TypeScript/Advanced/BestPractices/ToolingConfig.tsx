import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LintingStrict = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/BestPractices/ToolingConfig/LintingStrict'));
const Organization = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/BestPractices/ToolingConfig/Organization'));

const ToolingConfig: RouteObject[] = [
  {
    path: '/typescript/advanced/best-practices/tooling/lintingstrict',
    element: <LintingStrict />,
  },
  {
    path: '/typescript/advanced/best-practices/tooling/organization',
    element: <Organization />,
  },
];

export default ToolingConfig;