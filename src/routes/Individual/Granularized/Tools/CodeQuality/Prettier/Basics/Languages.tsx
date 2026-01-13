import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypeScript = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Languages/TypeScript'));
const ReactAndJSX = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Languages/ReactAndJSX'));

const Languages: RouteObject[] = [
  {
    path: '/prettier/basics/languages/typescript',
    element: <TypeScript />,
  },
  {
    path: '/prettier/basics/languages/react-jsx',
    element: <ReactAndJSX />,
  },
];

export default Languages;
