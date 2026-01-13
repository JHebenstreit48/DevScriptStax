import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VNetIntegration = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/NetworkingAndSecurity/VNetIntegration'));
const ManagedIdentityAndRBAC = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/NetworkingAndSecurity/ManagedIdentityAndRBAC'));

const NetworkingAndSecurity: RouteObject[] = [
  {
    path: '/azure-functions/advanced/networking-security/vnet-integration',
    element: <VNetIntegration />,
  },
  {
    path: '/azure-functions/advanced/networking-security/managed-identity-rbac',
    element: <ManagedIdentityAndRBAC />,
  },
];

export default NetworkingAndSecurity;
