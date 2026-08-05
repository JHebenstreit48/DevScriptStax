import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Pipelines = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/TSLint/Advanced/CIAndMonorepos/Pipelines'));
const Workspaces = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/TSLint/Advanced/CIAndMonorepos/Workspaces'));

const CIAndMonorepos: RouteObject[] = [
  {
    path: '/tslint/advanced/ci-monorepos/pipelines',
    element: <Pipelines />,
  },
  {
    path: '/tslint/advanced/ci-monorepos/workspaces',
    element: <Workspaces />,
  },
];

export default CIAndMonorepos;
