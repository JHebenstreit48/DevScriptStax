import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInit = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Setup/InstallAndInit'));
const Credentials = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Setup/Credentials'));

const Setup: RouteObject[] = [
  {
    path: '/aws-sam/basics/setup/install-init',
    element: <InstallAndInit />,
  },
  {
    path: '/aws-sam/basics/setup/credentials',
    element: <Credentials />,
  },
];

export default Setup;
