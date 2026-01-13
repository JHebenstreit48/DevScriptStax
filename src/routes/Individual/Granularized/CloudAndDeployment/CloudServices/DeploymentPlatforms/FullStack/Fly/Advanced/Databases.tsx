import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PostgresOnFly = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Databases/PostgresOnFly'));
const HAAndBackups = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Databases/HAAndBackups'));

const Databases: RouteObject[] = [
  {
    path: '/fly/advanced/databases/postgres-on-fly',
    element: <PostgresOnFly />,
  },
  {
    path: '/fly/advanced/databases/ha-backups',
    element: <HAAndBackups />,
  },
];

export default Databases;
