import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroToJSONAndJSONB = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/IntroToJSONAndJSONB'));
const StoringAndQuerying = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/StoringAndQuerying'));
const PerformanceConsiderations = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/PerformanceConsiderations'));
const IndexingJSONFields = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/IndexingJSONFields'));

const JSONJSONB: RouteObject[] = [
  {
    path: '/postgresql/advanced/json/overview',
    element: <IntroToJSONAndJSONB />,
  },
  {
    path: '/postgresql/advanced/json/storing-querying',
    element: <StoringAndQuerying />,
  },
  {
    path: '/postgresql/advanced/json/performance',
    element: <PerformanceConsiderations />,
  },
  {
    path: '/postgresql/advanced/json/indexing',
    element: <IndexingJSONFields />,
  },
];

export default JSONJSONB;
