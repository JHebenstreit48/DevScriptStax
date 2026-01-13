import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Syntax = lazy(() => import('@/Pages/MainTabs/Languages/Go/Basics/Fundamentals/Syntax'));
const ControlFlow = lazy(() => import('@/Pages/MainTabs/Languages/Go/Basics/Fundamentals/ControlFlow'));
const FunctionsAndPackages = lazy(() => import('@/Pages/MainTabs/Languages/Go/Basics/Fundamentals/FunctionsAndPackages'));

const Fundamentals: RouteObject[] = [
  {
    path: '/go/basics/fundamentals/syntax',
    element: <Syntax />,
  },
  {
    path: '/go/basics/fundamentals/control-flow',
    element: <ControlFlow />,
  },
  {
    path: '/go/basics/fundamentals/functions-packages',
    element: <FunctionsAndPackages />,
  },
];

export default Fundamentals;
