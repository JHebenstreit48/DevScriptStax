import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkersIntegration = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/WorkersAndDO/WorkersIntegration'));
const DurableObjects = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/WorkersAndDO/DurableObjects'));

const WorkersAndDO: RouteObject[] = [
  {
    path: '/cloudflare-pages/advanced/workers-do/workers-integration',
    element: <WorkersIntegration />,
  },
  {
    path: '/cloudflare-pages/advanced/workers-do/durable-objects',
    element: <DurableObjects />,
  },
];

export default WorkersAndDO;
