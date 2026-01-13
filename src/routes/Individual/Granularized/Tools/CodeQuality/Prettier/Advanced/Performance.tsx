import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LargeRepos = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/Performance/LargeRepos'));
const CIFormatting = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/Performance/CIFormatting'));

const Performance: RouteObject[] = [
  {
    path: '/prettier/advanced/performance/large-repos',
    element: <LargeRepos />,
  },
  {
    path: '/prettier/advanced/performance/ci-formatting',
    element: <CIFormatting />,
  },
];

export default Performance;
