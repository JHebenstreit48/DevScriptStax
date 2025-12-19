import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Classes = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/OOP/Classes'));
const MixinsAndAbstract = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/OOP/MixinsAndAbstract'));

const OOP: RouteObject[] = [
  {
    path: '/dart/basics/oop/classes',
    element: <Classes />,
  },
  {
    path: '/dart/basics/oop/mixins-abstract',
    element: <MixinsAndAbstract />,
  },
];

export default OOP;
