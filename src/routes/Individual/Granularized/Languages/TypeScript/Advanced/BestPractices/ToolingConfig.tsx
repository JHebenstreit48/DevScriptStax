import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LintingStrict = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/BestPractices/ToolingConfig/LintingStrict'));
const Organization = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/BestPractices/ToolingConfig/Organization'));

const ToolingConfig: RouteObject[] = [
  {
    path: '/typescript/best-practices/tooling/lintingstrict',
    element: <LintingStrict />,
  },
  {
    path: '/typescript/best-practices/tooling/organization',
    element: <Organization />,
  },
];

export default ToolingConfig;
