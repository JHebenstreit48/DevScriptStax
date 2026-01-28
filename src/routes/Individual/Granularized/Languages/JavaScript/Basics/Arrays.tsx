import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Arrays/Introduction'));
const Methods = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Arrays/Methods'));
const AdvancedTechniques = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/Arrays/AdvancedTechniques'));

const Arrays: RouteObject[] = [
  {
    path: '/javascript/basics/arrays/introduction',
    element: <Introduction />,
  },
  {
    path: '/javascript/basics/arrays/methods',
    element: <Methods />,
  },
  {
    path: '/javascript/basics/arrays/advanced-techniques',
    element: <AdvancedTechniques />,
  }
];

export default Arrays;