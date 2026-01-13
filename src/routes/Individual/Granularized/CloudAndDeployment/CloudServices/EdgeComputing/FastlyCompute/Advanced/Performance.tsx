import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CachingStrategies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Performance/CachingStrategies'));
const Optimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Performance/Optimization'));

const Performance: RouteObject[] = [
  {
    path: '/fastly-compute/advanced/performance/caching-strategies',
    element: <CachingStrategies />,
  },
  {
    path: '/fastly-compute/advanced/performance/optimization',
    element: <Optimization />,
  },
];

export default Performance;
