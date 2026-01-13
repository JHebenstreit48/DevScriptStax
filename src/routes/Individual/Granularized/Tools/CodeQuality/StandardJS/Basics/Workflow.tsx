import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FixAndCI = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/Workflow/FixAndCI'));
const Monorepos = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/Workflow/Monorepos'));

const Workflow: RouteObject[] = [
  {
    path: '/standardjs/basics/workflow/fix-and-ci',
    element: <FixAndCI />,
  },
  {
    path: '/standardjs/basics/workflow/monorepos',
    element: <Monorepos />,
  },
];

export default Workflow;
