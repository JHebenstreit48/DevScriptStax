import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Workflow = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/Workflow/FullWorkflow'));
const Nuances = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/Workflow/Nuances'));

const git: RouteObject[] = [
  {
    path: '/git/basics/workflow/full-workflow',
    element: <Workflow />,
  },
  {
    path: '/git/basics/workflow/nuances',
    element: <Nuances />,
  },
];

export default git;