import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityHeadersAndCSP = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Security/SecurityHeadersAndCSP'));
const ProtectedRoutes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Security/ProtectedRoutes'));

const Security: RouteObject[] = [
  {
    path: '/vercel/advanced/security/security-headers-csp',
    element: <SecurityHeadersAndCSP />,
  },
  {
    path: '/vercel/advanced/security/protected-routes',
    element: <ProtectedRoutes />,
  },
];

export default Security;
