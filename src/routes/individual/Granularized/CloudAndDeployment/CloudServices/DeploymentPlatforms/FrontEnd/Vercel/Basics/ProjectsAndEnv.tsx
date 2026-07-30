import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Environments = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/ProjectsAndEnv/Environments'));
const EnvVars = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/ProjectsAndEnv/EnvVars'));

const ProjectsAndEnv: RouteObject[] = [
  {
    path: '/vercel/basics/projects-env/environments',
    element: <Environments />,
  },
  {
    path: '/vercel/basics/projects-env/env-vars-vercel',
    element: <EnvVars />,
  },
];

export default ProjectsAndEnv;
