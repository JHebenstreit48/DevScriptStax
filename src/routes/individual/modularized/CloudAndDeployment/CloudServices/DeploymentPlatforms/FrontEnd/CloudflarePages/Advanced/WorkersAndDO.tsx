import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkersIntegration = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Advanced/WorkersAndDO/WorkersIntegration'));
const DurableObjects = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Advanced/WorkersAndDO/DurableObjects'));

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
