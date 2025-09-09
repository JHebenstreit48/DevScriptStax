import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/Fundamentals/Introduction'));
const VersionControl = lazy(
  () => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/Fundamentals/VersionControl')
);

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/containerization/git/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tools/containerization/git/basics/fundamentals/version-control',
    element: <VersionControl />,
  },
];

export default Fundamentals;