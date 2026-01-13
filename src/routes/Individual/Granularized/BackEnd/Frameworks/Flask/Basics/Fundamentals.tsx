import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Fundamentals/Overview'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Fundamentals/InstallAndSetup'));
const AppStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Fundamentals/AppStructure'));
const AppFactory = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Fundamentals/AppFactory'));

const Fundamentals: RouteObject[] = [
  {
    path: '/backend/frameworks/flask/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/backend/frameworks/flask/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/backend/frameworks/flask/basics/fundamentals/app-structure',
    element: <AppStructure />,
  },
  {
    path: '/backend/frameworks/flask/basics/fundamentals/app-factory',
    element: <AppFactory />,
  },
];

export default Fundamentals;
