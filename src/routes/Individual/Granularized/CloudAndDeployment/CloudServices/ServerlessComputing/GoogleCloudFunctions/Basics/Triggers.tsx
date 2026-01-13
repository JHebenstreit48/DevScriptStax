import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPAndEvents = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Triggers/HTTPAndEvents'));
const PubSubAndStorage = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Triggers/PubSubAndStorage'));

const Triggers: RouteObject[] = [
  {
    path: '/google-cloud-functions/basics/triggers/http-events',
    element: <HTTPAndEvents />,
  },
  {
    path: '/google-cloud-functions/basics/triggers/pubsub-storage',
    element: <PubSubAndStorage />,
  },
];

export default Triggers;
