import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Functions/Basics'));

const Functions: RouteObject[] = [
  {
    path: '/javascript/basics/functions/basics-and-declarations',
    element: <Basics />,
  },
];

export default Functions;