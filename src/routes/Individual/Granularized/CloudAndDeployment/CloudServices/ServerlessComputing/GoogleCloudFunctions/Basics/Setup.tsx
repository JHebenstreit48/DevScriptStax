import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GcloudAndAuth = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Setup/GcloudAndAuth'));
const FirstDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Setup/FirstDeploy'));

const Setup: RouteObject[] = [
  {
    path: '/google-cloud-functions/basics/setup/gcloud-auth',
    element: <GcloudAndAuth />,
  },
  {
    path: '/google-cloud-functions/basics/setup/first-deploy',
    element: <FirstDeploy />,
  },
];

export default Setup;
