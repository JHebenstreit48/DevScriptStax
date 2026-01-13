import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Fundamentals/Overview'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Fundamentals/InstallAndSetup'));
const AppStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Fundamentals/AppStructure'));
const AppAndContext = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Fundamentals/AppAndContext'));

const Fundamentals: RouteObject[] = [
  {
    path: '/backend/frameworks/koa/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/backend/frameworks/koa/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/backend/frameworks/koa/basics/fundamentals/app-structure',
    element: <AppStructure />,
  },
  {
    path: '/backend/frameworks/koa/basics/fundamentals/app-context',
    element: <AppAndContext />,
  },
];

export default Fundamentals;
