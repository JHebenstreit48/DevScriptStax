import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Caching = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Performance/Caching'));
const Compression = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Performance/Compression'));

const Performance: RouteObject[] = [
  {
    path: '/frameworks/flask/advanced/performance/caching',
    element: <Caching />,
  },
  {
    path: '/frameworks/flask/advanced/performance/compression',
    element: <Compression />,
  },
];

export default Performance;
