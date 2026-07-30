import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RetriesAndDLQs = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Architecture/RetriesAndDLQs'));
const Idempotency = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Architecture/Idempotency'));

const Architecture: RouteObject[] = [
  {
    path: '/google-cloud-functions/advanced/architecture/retries-dlqs',
    element: <RetriesAndDLQs />,
  },
  {
    path: '/google-cloud-functions/advanced/architecture/idempotency',
    element: <Idempotency />,
  },
];

export default Architecture;
