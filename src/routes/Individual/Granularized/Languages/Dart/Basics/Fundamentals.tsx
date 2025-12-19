import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/dart/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/dart/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;