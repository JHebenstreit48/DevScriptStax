import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/Fundamentals/Introduction'));
const VueCLI = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/Fundamentals/VueCLI'));
const Syntax = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/Fundamentals/Syntax'));
const Components = lazy(() => import('@/pages/mainTabs/FrontEnd/Vue/Basics/Fundamentals/Components'));

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
