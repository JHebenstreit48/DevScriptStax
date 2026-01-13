import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreatingCICDPipelines = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/Pipelines/CreatingCICDPipelines'));
const RunningTestsInCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/Pipelines/RunningTestsInCircleCI'));
const BuildingAndDeployingApplications = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/Pipelines/BuildingAndDeployingApplications'));

const Pipelines: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/basic/pipelines/pipelines',
    element: <CreatingCICDPipelines />,
  },
  {
    path: '/tools/cicd/circleci/basics/pipelines/testing',
    element: <RunningTestsInCircleCI />,
  },
  {
    path: '/tools/cicd/circleci/basics/pipelines/deployment',
    element: <BuildingAndDeployingApplications />,
  },
];

export default Pipelines;
