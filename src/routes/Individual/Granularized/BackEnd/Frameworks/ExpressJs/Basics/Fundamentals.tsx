import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals/Overview'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals/InstallAndSetup'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals/ProjectStructure'));

const Fundamentals: RouteObject[] = [
  {
    path: '/backend/frameworks/express/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/backend/frameworks/express/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/backend/frameworks/express/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
];

export default Fundamentals;
