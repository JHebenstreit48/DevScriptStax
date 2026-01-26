import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals/Overview'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals/InstallAndSetup'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Fundamentals/ProjectStructure'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/express/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/frameworks/express/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/frameworks/express/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
];

export default Fundamentals;
