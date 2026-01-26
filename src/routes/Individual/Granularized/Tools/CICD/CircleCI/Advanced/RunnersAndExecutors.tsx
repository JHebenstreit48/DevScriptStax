import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Executors = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/RunnersAndExecutors/Executors'));
const SelfHostedRunners = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/RunnersAndExecutors/SelfHostedRunners'));

const RunnersAndExecutors: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/advanced/runners-and-executors/executors',
    element: <Executors />,
  },
  {
    path: '/ci-cd/circle-ci/advanced/runners-and-executors/runners',
    element: <SelfHostedRunners />,
  },
];

export default RunnersAndExecutors;
