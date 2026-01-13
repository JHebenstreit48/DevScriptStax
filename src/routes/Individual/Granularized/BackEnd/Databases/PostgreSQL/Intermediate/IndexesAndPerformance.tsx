import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IndexTypes = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance/IndexTypes'));
const QueryPlansAndEXPLAIN = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance/QueryPlansAndEXPLAIN'));

const IndexesAndPerformance: RouteObject[] = [
  {
    path: '/postgresql/intermediate/indexes-perf/index-types',
    element: <IndexTypes />,
  },
  {
    path: '/postgresql/intermediate/indexes-perf/explain',
    element: <QueryPlansAndEXPLAIN />,
  },
];

export default IndexesAndPerformance;
