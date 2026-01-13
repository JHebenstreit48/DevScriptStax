import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ZeroTrustAccess = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Security/ZeroTrustAccess'));
const SecurityHeadersAndCSP = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Security/SecurityHeadersAndCSP'));

const Security: RouteObject[] = [
  {
    path: '/cloudflare-pages/advanced/security/zero-trust-access',
    element: <ZeroTrustAccess />,
  },
  {
    path: '/cloudflare-pages/advanced/security/security-headers-csp',
    element: <SecurityHeadersAndCSP />,
  },
];

export default Security;
