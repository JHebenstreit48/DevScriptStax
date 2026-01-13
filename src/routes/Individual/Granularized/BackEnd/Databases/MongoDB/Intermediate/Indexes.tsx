import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/Introduction'));
const IndexTypes = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/IndexTypes'));
const Management = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/Management'));
const Performance = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/Performance'));

const Indexes: RouteObject[] = [
  {
    path: '/mongodb/intermediate/indexes/overview',
    element: <Introduction />,
  },
  {
    path: '/mongodb/intermediate/indexes/types',
    element: <IndexTypes />,
  },
  {
    path: '/mongodb/intermediate/indexes/management',
    element: <Management />,
  },
  {
    path: '/mongodb/intermediate/indexes/performance',
    element: <Performance />,
  },
];

export default Indexes;
