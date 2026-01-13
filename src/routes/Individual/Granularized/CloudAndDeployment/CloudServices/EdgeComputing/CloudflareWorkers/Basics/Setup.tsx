import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WranglerAndAuth = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Setup/WranglerAndAuth'));
const InitProject = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Setup/InitProject'));

const Setup: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/setup/wrangler-auth',
    element: <WranglerAndAuth />,
  },
  {
    path: '/cloudflare-workers/basics/setup/init-project',
    element: <InitProject />,
  },
];

export default Setup;
