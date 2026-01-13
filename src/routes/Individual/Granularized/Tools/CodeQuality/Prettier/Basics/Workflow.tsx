import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FixOnSave = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Workflow/FixOnSave'));
const IgnoreAndOverrides = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Workflow/IgnoreAndOverrides'));

const Workflow: RouteObject[] = [
  {
    path: '/prettier/basics/workflow/fix-on-save',
    element: <FixOnSave />,
  },
  {
    path: '/prettier/basics/workflow/ignore-overrides',
    element: <IgnoreAndOverrides />,
  },
];

export default Workflow;
