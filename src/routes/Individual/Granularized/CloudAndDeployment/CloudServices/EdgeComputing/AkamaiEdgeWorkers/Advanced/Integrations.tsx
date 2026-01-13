import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PropertyManagerAPI = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Integrations/PropertyManagerAPI'));
const CDNFeatures = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Integrations/CDNFeatures'));

const Integrations: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/advanced/integrations/property-manager-api',
    element: <PropertyManagerAPI />,
  },
  {
    path: '/akamai-edgeworkers/advanced/integrations/cdn-features',
    element: <CDNFeatures />,
  },
];

export default Integrations;
