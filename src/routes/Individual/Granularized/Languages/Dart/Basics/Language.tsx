import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Syntax = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Language/Syntax'));
const Types = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Language/Types'));

const Language: RouteObject[] = [
  {
    path: '/dart/basics/language/syntax',
    element: <Syntax />,
  },
  {
    path: '/dart/basics/language/types',
    element: <Types />,
  },
];

export default Language;