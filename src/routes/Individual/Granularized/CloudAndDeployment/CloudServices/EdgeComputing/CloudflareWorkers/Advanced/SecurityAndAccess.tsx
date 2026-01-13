import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ZeroTrustAccess = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/SecurityAndAccess/ZeroTrustAccess'));
const SecretsAndPermissions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/SecurityAndAccess/SecretsAndPermissions'));

const SecurityAndAccess: RouteObject[] = [
  {
    path: '/cloudflare-workers/advanced/security-access/zero-trust-access',
    element: <ZeroTrustAccess />,
  },
  {
    path: '/cloudflare-workers/advanced/security-access/secrets-permissions',
    element: <SecretsAndPermissions />,
  },
];

export default SecurityAndAccess;
