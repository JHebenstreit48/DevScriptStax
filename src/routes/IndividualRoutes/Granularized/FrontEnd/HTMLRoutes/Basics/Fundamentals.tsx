import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/Introduction')
);
const History = lazy(
  () => import('@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Fundamentals/History')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/html/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/html/basics/fundamentals/history',
    element: <History />,
  },
];

export default Fundamentals;