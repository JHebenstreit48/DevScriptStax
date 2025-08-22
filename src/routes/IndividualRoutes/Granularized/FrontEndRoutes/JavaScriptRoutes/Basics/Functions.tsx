import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/FunctionsPages/Basics')
);

const Functions: RouteObject[] = [
  {
    path: '/javascript/basics/functions/basics-and-declarations',
    element: <Basics />,
  },
];

export default Functions;