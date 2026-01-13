import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JobsAndSteps = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/JobsAndWorkflows/JobsAndSteps'));
const UnderstandingCircleCIWorkflows = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/JobsAndWorkflows/UnderstandingCircleCIWorkflows'));

const JobsAndWorkflows: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/basics/jobs-and-workflows/jobs-steps',
    element: <JobsAndSteps />,
  },
  {
    path: '/tools/cicd/circleci/basics/jobs-and-workflows/workflows',
    element: <UnderstandingCircleCIWorkflows />,
  },
];

export default JobsAndWorkflows;
