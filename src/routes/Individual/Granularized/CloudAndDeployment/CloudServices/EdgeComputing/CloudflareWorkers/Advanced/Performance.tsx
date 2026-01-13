import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CachingStrategies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Performance/CachingStrategies'));
const CPUTimeAndOptimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Performance/CPUTimeAndOptimization'));

const Performance: RouteObject[] = [
  {
    path: '/cloudflare-workers/advanced/performance/caching-strategies',
    element: <CachingStrategies />,
  },
  {
    path: '/cloudflare-workers/advanced/performance/cpu-optimization',
    element: <CPUTimeAndOptimization />,
  },
];

export default Performance;
