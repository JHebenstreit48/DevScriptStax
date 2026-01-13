import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BackendsAndHosts = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Routing/BackendsAndHosts'));
const EdgeDictionaries = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Routing/EdgeDictionaries'));

const Routing: RouteObject[] = [
  {
    path: '/fastly-compute/basics/routing/backends-hosts',
    element: <BackendsAndHosts />,
  },
  {
    path: '/fastly-compute/basics/routing/edge-dictionaries',
    element: <EdgeDictionaries />,
  },
];

export default Routing;
