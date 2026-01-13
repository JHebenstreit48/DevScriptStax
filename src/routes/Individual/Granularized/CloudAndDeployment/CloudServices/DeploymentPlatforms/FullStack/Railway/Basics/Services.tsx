import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WebServices = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Services/WebServices'));
const ProvisionedDBs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Services/ProvisionedDBs'));

const Services: RouteObject[] = [
  {
    path: '/railway/basics/services/web-services',
    element: <WebServices />,
  },
  {
    path: '/railway/basics/services/provisioned-dbs',
    element: <ProvisionedDBs />,
  },
];

export default Services;
