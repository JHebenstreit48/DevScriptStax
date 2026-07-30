import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/Introduction'));
const IndexTypes = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/IndexTypes'));
const Management = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/Management'));
const Performance = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Intermediate/Indexes/Performance'));

const Indexes: RouteObject[] = [
  {
    path: '/mongodb/intermediate/indexes/introduction',
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
