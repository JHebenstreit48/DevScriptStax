import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AkamaiCLIAndAuth = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Setup/AkamaiCLIAndAuth'));
const InitProject = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Setup/InitProject'));

const Setup: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/setup/akamai-cli-auth',
    element: <AkamaiCLIAndAuth />,
  },
  {
    path: '/akamai-edgeworkers/basics/setup/init-project',
    element: <InitProject />,
  },
];

export default Setup;
