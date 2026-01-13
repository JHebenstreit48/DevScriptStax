import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RoutesAndZones = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Routing/RoutesAndZones'));
const CustomDomains = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Routing/CustomDomains'));

const Routing: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/routing/routes-zones',
    element: <RoutesAndZones />,
  },
  {
    path: '/cloudflare-workers/basics/routing/custom-domains',
    element: <CustomDomains />,
  },
];

export default Routing;
