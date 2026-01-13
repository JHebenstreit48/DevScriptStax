import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Fundamentals/Introduction'));
const InstallingDocker = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Basics/Fundamentals/InstallingDocker'));

const Fundamentals: RouteObject[] = [
  {
    path: '/docker/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/docker/basics/fundamentals/installing',
    element: <InstallingDocker />,
  },
];

export default Fundamentals;
