import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/HTML/Basics/Fundamentals/Introduction')
);
const History = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/HTML/Basics/Fundamentals/History')
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