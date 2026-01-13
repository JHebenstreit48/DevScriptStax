import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CachingStrategies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Performance/CachingStrategies'));
const Optimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Performance/Optimization'));

const Performance: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/advanced/performance/caching-strategies',
    element: <CachingStrategies />,
  },
  {
    path: '/akamai-edgeworkers/advanced/performance/optimization',
    element: <Optimization />,
  },
];

export default Performance;
