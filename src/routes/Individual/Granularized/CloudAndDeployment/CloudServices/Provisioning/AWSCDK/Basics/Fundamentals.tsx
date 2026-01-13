import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Fundamentals/Introduction'));
const StacksAndConstructs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Fundamentals/StacksAndConstructs'));

const Fundamentals: RouteObject[] = [
  {
    path: '/aws-cdk/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/aws-cdk/basics/fundamentals/stacks-constructs',
    element: <StacksAndConstructs />,
  },
];

export default Fundamentals;
