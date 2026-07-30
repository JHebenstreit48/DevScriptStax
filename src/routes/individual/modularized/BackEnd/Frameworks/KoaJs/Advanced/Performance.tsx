import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CompressionAndETag = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Performance/CompressionAndETag'));
const StaticCacheControl = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/KoaJs/Advanced/Performance/StaticCacheControl'));

const Performance: RouteObject[] = [
  {
    path: '/frameworks/koa/advanced/performance/compression-etag',
    element: <CompressionAndETag />,
  },
  {
    path: '/frameworks/koa/advanced/performance/static-cache-control',
    element: <StaticCacheControl />,
  },
];

export default Performance;
