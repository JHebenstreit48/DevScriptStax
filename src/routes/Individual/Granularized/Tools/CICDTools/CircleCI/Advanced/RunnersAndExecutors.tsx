import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Executors = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/RunnersAndExecutors/Executors'));
const SelfHostedRunners = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/RunnersAndExecutors/SelfHostedRunners'));

const RunnersAndExecutors: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/advanced/runners-and-executors/executors',
    element: <Executors />,
  },
  {
    path: '/tools/cicd/circleci/advanced/runners-and-executors/runners',
    element: <SelfHostedRunners />,
  },
];

export default RunnersAndExecutors;
