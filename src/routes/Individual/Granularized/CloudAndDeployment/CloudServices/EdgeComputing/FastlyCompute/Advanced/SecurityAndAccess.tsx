import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TLSAndMTLS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/SecurityAndAccess/TLSAndMTLS'));
const WAFAndControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/SecurityAndAccess/WAFAndControls'));

const SecurityAndAccess: RouteObject[] = [
  {
    path: '/fastly-compute/advanced/security-access/tls-mtls',
    element: <TLSAndMTLS />,
  },
  {
    path: '/fastly-compute/advanced/security-access/waf-controls',
    element: <WAFAndControls />,
  },
];

export default SecurityAndAccess;
