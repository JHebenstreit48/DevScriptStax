import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Basics/Fundamentals/Introduction'));
const VueCLI = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Basics/Fundamentals/VueCLI'));
const Syntax = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Basics/Fundamentals/Syntax'));
const Components = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Basics/Fundamentals/Components'));

const Fundamentals: RouteObject[] = [
  {
    path: '/vue/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/vue/basics/fundamentals/cli',
    element: <VueCLI />,
  },
  {
    path: '/vue/basics/fundamentals/syntax',
    element: <Syntax />,
  },
  {
    path: '/vue/basics/fundamentals/components',
    element: <Components />,
  },
];

export default Fundamentals;
