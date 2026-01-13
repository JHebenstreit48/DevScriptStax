import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Volumes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Persistence/Volumes'));
const BackupsAndRestores = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Persistence/BackupsAndRestores'));

const Persistence: RouteObject[] = [
  {
    path: '/railway/advanced/persistence/volumes',
    element: <Volumes />,
  },
  {
    path: '/railway/advanced/persistence/backups-restores',
    element: <BackupsAndRestores />,
  },
];

export default Persistence;
