import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SSLTLSAndHTTPS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/SecurityAndNetworking/SSLTLSAndHTTPS'));
const FirewallRules = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/SecurityAndNetworking/FirewallRules'));
const PrivateNetworking = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/SecurityAndNetworking/PrivateNetworking'));

const SecurityAndNetworking: RouteObject[] = [
  {
    path: '/render/advanced/security-networking/ssl-tls-https',
    element: <SSLTLSAndHTTPS />,
  },
  {
    path: '/render/advanced/security-networking/firewall',
    element: <FirewallRules />,
  },
  {
    path: '/render/advanced/security-networking/private-networking',
    element: <PrivateNetworking />,
  },
];

export default SecurityAndNetworking;
