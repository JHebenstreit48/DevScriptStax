import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TTLAndArchival = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/DataLifecycleAndGovernance/TTLAndArchival'));
const SchemaValidation = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/DataLifecycleAndGovernance/SchemaValidation'));

const DataLifecycleAndGovernance: RouteObject[] = [
  {
    path: '/mongodb/advanced/lifecycle/ttl-archival',
    element: <TTLAndArchival />,
  },
  {
    path: '/mongodb/advanced/lifecycle/schema-validation',
    element: <SchemaValidation />,
  },
];

export default DataLifecycleAndGovernance;
