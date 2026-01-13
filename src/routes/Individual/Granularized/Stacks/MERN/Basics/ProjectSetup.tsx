import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InitFEAndBE = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/ProjectSetup/InitFEAndBE'));
const EnvAndCORSBasics = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Basics/ProjectSetup/EnvAndCORSBasics'));

const ProjectSetup: RouteObject[] = [
  {
    path: '/mern/basics/project-setup/init-fe-and-be',
    element: <InitFEAndBE />,
  },
  {
    path: '/mern/basics/project-setup/env-and-cors-basics',
    element: <EnvAndCORSBasics />,
  },
];

export default ProjectSetup;
