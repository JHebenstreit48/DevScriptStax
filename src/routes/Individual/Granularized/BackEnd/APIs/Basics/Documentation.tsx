import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Tools = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/Documentation/Tools'));
const BestPractices = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/Documentation/BestPractices'));
const Examples = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/Documentation/Examples'));

const Documentation: RouteObject[] = [
  {
    path: '/apis/basics/documentation/tools',
    element: <Tools />,
  },
  {
    path: '/apis/basics/documentation/best-practices',
    element: <BestPractices />,
  },
  {
    path: '/apis/basics/documentation/examples',
    element: <Examples />,
  },
];

export default Documentation;
