import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Functions/Basics'));
const ParamsAndArrow = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Functions/ParamsAndArrow'));

const Functions: RouteObject[] = [
  {
    path: '/dart/basics/functions/basics',
    element: <Basics />,
  },
  {
    path: '/dart/basics/functions/params-arrow',
    element: <ParamsAndArrow />,
  },
];

export default Functions;
