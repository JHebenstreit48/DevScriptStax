import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Basics/Fundamentals/Introduction'));
const Syntax = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Basics/Fundamentals/Syntax'));

const Fundamentals: RouteObject[] = [
  {
    path: '/markdown/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/markdown/basics/fundamentals/syntax',
    element: <Syntax />,
  },
];

export default Fundamentals;
