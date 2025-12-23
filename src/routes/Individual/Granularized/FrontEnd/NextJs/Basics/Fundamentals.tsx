import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/Fundamentals/Introduction'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/Fundamentals/ProjectStructure'));
const Routing = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/Fundamentals/Routing'));
const APIRoutes = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/Fundamentals/APIRoutes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/nextjs/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/nextjs/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
  {
    path: '/nextjs/basics/fundamentals/routing',
    element: <Routing />,
  },
  {
    path: '/nextjs/basics/fundamentals/api-routes',
    element: <APIRoutes />,
  },
];

export default Fundamentals;
