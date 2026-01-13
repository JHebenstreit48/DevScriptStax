import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VCLInterop = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Integrations/VCLInterop'));
const CDNFeatures = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Integrations/CDNFeatures'));

const Integrations: RouteObject[] = [
  {
    path: '/fastly-compute/advanced/integrations/vcl-interop',
    element: <VCLInterop />,
  },
  {
    path: '/fastly-compute/advanced/integrations/cdn-features',
    element: <CDNFeatures />,
  },
];

export default Integrations;
