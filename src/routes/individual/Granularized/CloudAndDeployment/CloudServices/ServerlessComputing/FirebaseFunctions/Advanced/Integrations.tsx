import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HostingRewrites = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Integrations/HostingRewrites'));
const CloudTasksAndWorkflows = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Integrations/CloudTasksAndWorkflows'));

const Integrations: RouteObject[] = [
  {
    path: '/firebase-functions/advanced/integrations/hosting-rewrites',
    element: <HostingRewrites />,
  },
  {
    path: '/firebase-functions/advanced/integrations/cloud-tasks-workflows',
    element: <CloudTasksAndWorkflows />,
  },
];

export default Integrations;
