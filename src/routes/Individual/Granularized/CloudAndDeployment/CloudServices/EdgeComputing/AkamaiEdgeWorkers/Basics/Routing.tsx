import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PropertyRules = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Routing/PropertyRules'));
const EdgeHostnamesAndCerts = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Routing/EdgeHostnamesAndCerts'));

const Routing: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/routing/property-rules',
    element: <PropertyRules />,
  },
  {
    path: '/akamai-edgeworkers/basics/routing/edge-hostnames-certs',
    element: <EdgeHostnamesAndCerts />,
  },
];

export default Routing;
