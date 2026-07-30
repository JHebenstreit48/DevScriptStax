import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Handlers = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Functions/Handlers'));
const Events = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Functions/Events'));

const Functions: RouteObject[] = [
  {
    path: '/serverless-framework/basics/functions/handlers',
    element: <Handlers />,
  },
  {
    path: '/serverless-framework/basics/functions/events',
    element: <Events />,
  },
];

export default Functions;
