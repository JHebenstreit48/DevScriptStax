import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HuskyAndLintStaged = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Advanced/CIAndHooks/HuskyAndLintStaged'));
const Pipelines = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Advanced/CIAndHooks/Pipelines'));

const CIAndHooks: RouteObject[] = [
  {
    path: '/standardjs/advanced/ci-hooks/husky-lint-staged',
    element: <HuskyAndLintStaged />,
  },
  {
    path: '/standardjs/advanced/ci-hooks/pipelines',
    element: <Pipelines />,
  },
];

export default CIAndHooks;
