import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndBootstrap = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Setup/InstallAndBootstrap'));
const ProjectInit = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Setup/ProjectInit'));

const Setup: RouteObject[] = [
  {
    path: '/aws-cdk/basics/setup/install-bootstrap',
    element: <InstallAndBootstrap />,
  },
  {
    path: '/aws-cdk/basics/setup/project-init',
    element: <ProjectInit />,
  },
];

export default Setup;
