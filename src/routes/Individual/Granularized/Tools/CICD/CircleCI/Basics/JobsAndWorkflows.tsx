import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JobsAndSteps = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/JobsAndWorkflows/JobsAndSteps'));
const UnderstandingCircleCIWorkflows = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/JobsAndWorkflows/UnderstandingCircleCIWorkflows'));

const JobsAndWorkflows: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/basics/jobs-and-workflows/jobs-steps',
    element: <JobsAndSteps />,
  },
  {
    path: '/ci-cd/circle-ci/basics/jobs-and-workflows/workflows',
    element: <UnderstandingCircleCIWorkflows />,
  },
];

export default JobsAndWorkflows;
