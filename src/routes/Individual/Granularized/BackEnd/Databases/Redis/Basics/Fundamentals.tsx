import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Redis/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Redis/Basics/Fundamentals/InstallAndSetup'));
const UseCases = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Redis/Basics/Fundamentals/UseCases'));

const Fundamentals: RouteObject[] = [
  {
    path: '/redis/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/redis/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/redis/basics/fundamentals/use-cases',
    element: <UseCases />,
  },
];

export default Fundamentals;
