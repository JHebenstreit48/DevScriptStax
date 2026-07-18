import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ManagedPostgreSQL = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/ManagedPostgreSQL'));
const ExternalDatabasesAndStorage = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/ExternalDatabasesAndStorage'));

const Data: RouteObject[] = [
  {
    path: '/render/basics/data/managed-postgresql',
    element: <ManagedPostgreSQL />,
  },
  {
    path: '/render/basics/data/external-and-storage',
    element: <ExternalDatabasesAndStorage />,
  },
];

export default Data;
