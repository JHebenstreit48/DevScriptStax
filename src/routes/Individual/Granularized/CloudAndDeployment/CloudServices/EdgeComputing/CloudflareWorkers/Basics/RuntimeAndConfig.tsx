import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkersRuntime = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/RuntimeAndConfig/WorkersRuntime'));
const EnvVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/RuntimeAndConfig/EnvVars'));

const RuntimeAndConfig: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/runtime-config/workers-runtime',
    element: <WorkersRuntime />,
  },
  {
    path: '/cloudflare-workers/basics/runtime-config/env-vars-workers',
    element: <EnvVars />,
  },
];

export default RuntimeAndConfig;
