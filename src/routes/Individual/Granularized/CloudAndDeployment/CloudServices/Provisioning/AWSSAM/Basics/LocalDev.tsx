import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SamLocal = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/LocalDev/SamLocal'));
const TestingLocally = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/LocalDev/TestingLocally'));

const LocalDev: RouteObject[] = [
  {
    path: '/aws-sam/basics/local-dev/sam-local',
    element: <SamLocal />,
  },
  {
    path: '/aws-sam/basics/local-dev/testing-locally',
    element: <TestingLocally />,
  },
];

export default LocalDev;
