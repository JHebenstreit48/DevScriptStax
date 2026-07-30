import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/React/Basics/Fundamentals/Introduction'));

const Fundamentals: RouteObject[] = [
  {
    path: '/react/basics/fundamentals/introduction',
    element: <Introduction />,
  },
];

export default Fundamentals;