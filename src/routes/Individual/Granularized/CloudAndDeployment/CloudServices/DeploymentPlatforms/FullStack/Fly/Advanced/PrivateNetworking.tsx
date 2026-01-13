import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OrgAndWireGuard = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/PrivateNetworking/OrgAndWireGuard'));
const ServiceMesh = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/PrivateNetworking/ServiceMesh'));

const PrivateNetworking: RouteObject[] = [
  {
    path: '/fly/advanced/private-networking/org-wireguard',
    element: <OrgAndWireGuard />,
  },
  {
    path: '/fly/advanced/private-networking/service-mesh',
    element: <ServiceMesh />,
  },
];

export default PrivateNetworking;
