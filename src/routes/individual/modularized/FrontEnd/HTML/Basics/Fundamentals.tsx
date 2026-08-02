import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/Fundamentals/Introduction'));
const History = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/Fundamentals/History'));

const Fundamentals: RouteObject[] = [
  {
    path: '/front-end/html/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/front-end/html/basics/fundamentals/history',
    element: <History />,
  },
];

export default Fundamentals;