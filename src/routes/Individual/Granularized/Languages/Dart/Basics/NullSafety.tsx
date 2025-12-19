import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Concepts = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/NullSafety/Concepts'));
const DefiniteAssign = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/NullSafety/DefiniteAssign'));

const NullSafety: RouteObject[] = [
  {
    path: '/dart/basics/null-safety/concepts',
    element: <Concepts />,
  },
  {
    path: '/dart/basics/null-safety/definite-assign',
    element: <DefiniteAssign />,
  },
];

export default NullSafety;
