import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DomainsAndSSL = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Networking/DomainsAndSSL'));
const StaticVsServices = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Networking/StaticVsServices'));

const Networking: RouteObject[] = [
  {
    path: '/railway/advanced/networking/domains-ssl',
    element: <DomainsAndSSL />,
  },
  {
    path: '/railway/advanced/networking/static-vs-services',
    element: <StaticVsServices />,
  },
];

export default Networking;
