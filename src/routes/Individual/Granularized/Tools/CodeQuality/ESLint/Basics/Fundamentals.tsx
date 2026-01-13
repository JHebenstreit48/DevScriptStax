import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/eslint/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/eslint/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;
