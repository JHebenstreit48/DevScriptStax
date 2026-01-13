import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Volumes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/StorageAndEnv/Volumes'));
const SecretsAndEnvVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/StorageAndEnv/SecretsAndEnvVars'));

const StorageAndEnv: RouteObject[] = [
  {
    path: '/fly/basics/storage-env/volumes',
    element: <Volumes />,
  },
  {
    path: '/fly/basics/storage-env/secrets-env-vars-fly',
    element: <SecretsAndEnvVars />,
  },
];

export default StorageAndEnv;
