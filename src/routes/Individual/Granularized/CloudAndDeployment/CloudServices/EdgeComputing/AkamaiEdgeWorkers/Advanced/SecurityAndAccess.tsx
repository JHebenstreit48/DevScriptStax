import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TLSAndMTLS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/SecurityAndAccess/TLSAndMTLS'));
const AuthAndJWT = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/SecurityAndAccess/AuthAndJWT'));

const SecurityAndAccess: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/advanced/security-access/tls-mtls',
    element: <TLSAndMTLS />,
  },
  {
    path: '/akamai-edgeworkers/advanced/security-access/auth-jwt',
    element: <AuthAndJWT />,
  },
];

export default SecurityAndAccess;
