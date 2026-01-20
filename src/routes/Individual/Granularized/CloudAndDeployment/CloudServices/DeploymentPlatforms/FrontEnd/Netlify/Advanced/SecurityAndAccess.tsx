import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityHeadersAndCSP = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/SecurityAndAccess/SecurityHeadersAndCSP'));
const ProtectedRoutesAndRoles = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/SecurityAndAccess/ProtectedRoutesAndRoles'));

const SecurityAndAccess: RouteObject[] = [
  {
    path: '/netlify/advanced/security-access/security-headers-csp',
    element: <SecurityHeadersAndCSP />,
  },
  {
    path: '/netlify/advanced/security-access/protected-routes-roles',
    element: <ProtectedRoutesAndRoles />,
  },
];

export default SecurityAndAccess;
