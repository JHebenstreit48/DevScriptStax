import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RegionsAndAnycast = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Networking/RegionsAndAnycast'));
const DomainsAndTLS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Networking/DomainsAndTLS'));

const Networking: RouteObject[] = [
  {
    path: '/fly/basics/networking/regions-anycast',
    element: <RegionsAndAnycast />,
  },
  {
    path: '/fly/basics/networking/domains-tls',
    element: <DomainsAndTLS />,
  },
];

export default Networking;
