import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EdgeDictionaries = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/DataAndState/EdgeDictionaries'));
const StreamingAndFanout = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/DataAndState/StreamingAndFanout'));

const DataAndState: RouteObject[] = [
  {
    path: '/fastly-compute/advanced/data-state/edge-dictionaries-advanced',
    element: <EdgeDictionaries />,
  },
  {
    path: '/fastly-compute/advanced/data-state/streaming-fanout',
    element: <StreamingAndFanout />,
  },
];

export default DataAndState;
