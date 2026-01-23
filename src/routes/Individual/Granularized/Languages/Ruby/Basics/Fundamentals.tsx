import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/Fundamentals/Introduction'));
const SyntaxAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/Fundamentals/SyntaxAndTypes'));
const ControlFlow = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/Fundamentals/ControlFlow'));
const OOPAndModules = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/Fundamentals/OOPAndModules'));

const Fundamentals: RouteObject[] = [
  {
    path: '/languages/ruby/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/languages/ruby/basics/fundamentals/syntax-types',
    element: <SyntaxAndTypes />,
  },
  {
    path: '/languages/ruby/basics/fundamentals/control-flow',
    element: <ControlFlow />,
  },
  {
    path: '/languages/ruby/basics/fundamentals/oop-modules',
    element: <OOPAndModules />,
  },
];

export default Fundamentals;