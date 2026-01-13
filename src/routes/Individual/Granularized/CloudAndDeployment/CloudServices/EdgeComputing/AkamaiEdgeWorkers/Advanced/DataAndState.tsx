import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EdgeKVPatterns = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/DataAndState/EdgeKVPatterns'));
const ConsistencyAndTTL = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/DataAndState/ConsistencyAndTTL'));

const DataAndState: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/advanced/data-state/edgekv-patterns',
    element: <EdgeKVPatterns />,
  },
  {
    path: '/akamai-edgeworkers/advanced/data-state/consistency-ttl',
    element: <ConsistencyAndTTL />,
  },
];

export default DataAndState;
