import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WindowAndGraphOps = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch/WindowAndGraphOps'));
const AtlasSearchIntegration = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch/AtlasSearchIntegration'));

const AggregationAndSearch: RouteObject[] = [
  {
    path: '/mongodb/advanced/aggregation/window-graph',
    element: <WindowAndGraphOps />,
  },
  {
    path: '/mongodb/advanced/aggregation/atlas-search',
    element: <AtlasSearchIntegration />,
  },
];

export default AggregationAndSearch;
