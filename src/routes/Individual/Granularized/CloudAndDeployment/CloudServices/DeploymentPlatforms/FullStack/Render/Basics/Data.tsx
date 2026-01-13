import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ManagedPostgreSQL = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/ManagedPostgreSQL'));
const ExternalDatabases = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/ExternalDatabases'));
const PersistentStorage = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/PersistentStorage'));

const Data: RouteObject[] = [
  {
    path: '/render/basics/data/postgresql-managed',
    element: <ManagedPostgreSQL />,
  },
  {
    path: '/render/basics/data/external-databases',
    element: <ExternalDatabases />,
  },
  {
    path: '/render/basics/data/persistent-storage',
    element: <PersistentStorage />,
  },
];

export default Data;
