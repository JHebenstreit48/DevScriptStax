import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CompressionAndETag = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Performance/CompressionAndETag'));
const StaticCacheControl = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Performance/StaticCacheControl'));
const RouterSplitting = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Performance/RouterSplitting'));

const Performance: RouteObject[] = [
  {
    path: '/frameworks/express/advanced/performance/compression-etag',
    element: <CompressionAndETag />,
  },
  {
    path: '/frameworks/express/advanced/performance/static-cache-control',
    element: <StaticCacheControl />,
  },
  {
    path: '/frameworks/express/advanced/performance/router-splitting',
    element: <RouterSplitting />,
  },
];

export default Performance;
