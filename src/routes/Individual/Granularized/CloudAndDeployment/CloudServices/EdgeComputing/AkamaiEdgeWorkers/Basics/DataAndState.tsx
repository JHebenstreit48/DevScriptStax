import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EdgeKVBasics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/DataAndState/EdgeKVBasics'));
const NamespacesAndLimits = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/DataAndState/NamespacesAndLimits'));

const DataAndState: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/data-state/edgekv-basics',
    element: <EdgeKVBasics />,
  },
  {
    path: '/akamai-edgeworkers/basics/data-state/namespaces-limits',
    element: <NamespacesAndLimits />,
  },
];

export default DataAndState;
