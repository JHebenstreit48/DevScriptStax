import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GettingStarted = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/Fundamentals/GettingStarted'));
const ProjectStructure = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/Fundamentals/ProjectStructure'));
const CLIAndWorkflow = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/Fundamentals/CLIAndWorkflow'));

const Fundamentals: RouteObject[] = [
  {
    path: '/gatsby/basics/fundamentals/getting-started',
    element: <GettingStarted />,
  },
  {
    path: '/gatsby/basics/fundamentals/project-structure',
    element: <ProjectStructure />,
  },
  {
    path: '/gatsby/basics/fundamentals/cli-and-workflow',
    element: <CLIAndWorkflow />,
  },
];

export default Fundamentals;
