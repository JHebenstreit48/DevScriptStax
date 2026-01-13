import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EventarcRoutes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Integrations/EventarcRoutes'));
const CloudRunInterop = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Integrations/CloudRunInterop'));

const Integrations: RouteObject[] = [
  {
    path: '/google-cloud-functions/advanced/integrations/eventarc-routes',
    element: <EventarcRoutes />,
  },
  {
    path: '/google-cloud-functions/advanced/integrations/cloud-run-interop',
    element: <CloudRunInterop />,
  },
];

export default Integrations;
