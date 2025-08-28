import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Workflow = lazy(
  () => import('@/Pages/MainTabs/ToolsPages/Containerization/GitPages/Basics/Workflow/FullWorkflow')
);
const Nuances = lazy(
  () => import('@/Pages/MainTabs/ToolsPages/Containerization/GitPages/Basics/Workflow/Nuances')
);

const git: RouteObject[] = [
  {
    path: '/tools/containerization/git/basics/workflow/fullworkflow',
    element: <Workflow />,
  },
  {
    path: '/tools/containerization/git/basics/workflow/nuances',
    element: <Nuances />,
  },
];

export default git;