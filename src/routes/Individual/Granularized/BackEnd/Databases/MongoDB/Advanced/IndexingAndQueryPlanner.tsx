import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PartialWildcardColumnstore = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/IndexingAndQueryPlanner/PartialWildcardColumnstore'));
const ExplainDeepDive = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/IndexingAndQueryPlanner/ExplainDeepDive'));

const IndexingAndQueryPlanner: RouteObject[] = [
  {
    path: '/mongodb/advanced/indexing/special',
    element: <PartialWildcardColumnstore />,
  },
  {
    path: '/mongodb/advanced/indexing/explain',
    element: <ExplainDeepDive />,
  },
];

export default IndexingAndQueryPlanner;
