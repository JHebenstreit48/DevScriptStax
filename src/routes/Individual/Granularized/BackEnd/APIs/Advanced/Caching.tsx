import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Advanced/Caching/Basics'));
const ControlAndExpiry = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Advanced/Caching/ControlAndExpiry'));
const BestPractices = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Advanced/Caching/BestPractices'));

const Caching: RouteObject[] = [
  {
    path: '/apis/advanced/caching/basics',
    element: <Basics />,
  },
  {
    path: '/apis/advanced/caching/control-and-expiry',
    element: <ControlAndExpiry />,
  },
  {
    path: '/apis/advanced/caching/best-practices',
    element: <BestPractices />,
  },
];

export default Caching;
