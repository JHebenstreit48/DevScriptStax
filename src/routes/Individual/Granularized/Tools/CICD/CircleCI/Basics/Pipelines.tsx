import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreatingCICDPipelines = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/Pipelines/CreatingCICDPipelines'));
const RunningTestsInCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/Pipelines/RunningTestsInCircleCI'));
const BuildingAndDeployingApplications = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/Pipelines/BuildingAndDeployingApplications'));

const Pipelines: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/basic/pipelines/pipelines',
    element: <CreatingCICDPipelines />,
  },
  {
    path: '/ci-cd/circle-ci/basics/pipelines/testing',
    element: <RunningTestsInCircleCI />,
  },
  {
    path: '/ci-cd/circle-ci/basics/pipelines/deployment',
    element: <BuildingAndDeployingApplications />,
  },
];

export default Pipelines;
