import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Conditionals = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/ControlFlow/Conditionals'));
const Loops = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/ControlFlow/Loops'));

const ControlFlow: RouteObject[] = [
  {
    path: '/dart/basics/control/conditionals',
    element: <Conditionals />,
  },
  {
    path: '/dart/basics/control/loops',
    element: <Loops />,
  },
];

export default ControlFlow;