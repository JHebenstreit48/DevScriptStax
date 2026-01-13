import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPAndTimer = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Triggers/HTTPAndTimer'));
const QueueAndServiceBus = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Triggers/QueueAndServiceBus'));

const Triggers: RouteObject[] = [
  {
    path: '/azure-functions/basics/triggers/http-timer',
    element: <HTTPAndTimer />,
  },
  {
    path: '/azure-functions/basics/triggers/queue-service-bus',
    element: <QueueAndServiceBus />,
  },
];

export default Triggers;
