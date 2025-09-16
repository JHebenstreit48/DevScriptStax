import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Arrays/Introduction'));

const Arrays: RouteObject[] = [
  {
    path: '/javascript/basics/arrays/introduction',
    element: <Introduction />,
  },
];

export default Arrays;