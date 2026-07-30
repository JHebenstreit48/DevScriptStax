import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Fundamentals/Introduction'));
const Concepts = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Fundamentals/Concepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/serverless-framework/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/serverless-framework/basics/fundamentals/concepts',
    element: <Concepts />,
  },
];

export default Fundamentals;
