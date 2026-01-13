import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Fundamentals/Introduction'));
const Templates = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Fundamentals/Templates'));

const Fundamentals: RouteObject[] = [
  {
    path: '/aws-sam/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/aws-sam/basics/fundamentals/templates',
    element: <Templates />,
  },
];

export default Fundamentals;
