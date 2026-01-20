import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProjectSettings = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/BuildsAndConfig/ProjectSettings'));
const EnvVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/BuildsAndConfig/EnvVars'));

const BuildsAndConfig: RouteObject[] = [
  {
    path: '/cloudflare-pages/basics/builds-config/project-settings',
    element: <ProjectSettings />,
  },
  {
    path: '/cloudflare-pages/basics/builds-config/env-vars-pages',
    element: <EnvVars />,
  },
];

export default BuildsAndConfig;
