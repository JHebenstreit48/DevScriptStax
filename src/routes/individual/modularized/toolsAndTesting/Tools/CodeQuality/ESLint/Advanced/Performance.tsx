import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerformanceTuning = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/ESLint/Advanced/Performance/PerformanceTuning'));
const CachingStrategies = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/ESLint/Advanced/Performance/CachingStrategies'));

const Performance: RouteObject[] = [
  {
    path: '/eslint/advanced/performance/performance-tuning',
    element: <PerformanceTuning />,
  },
  {
    path: '/eslint/advanced/performance/caching-strategies',
    element: <CachingStrategies />,
  },
];

export default Performance;
