import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkspaceConfig = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/Workspaces/WorkspaceConfig'));
const FilteringAndRecursive = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/Workspaces/FilteringAndRecursive'));

const Workspaces: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/advanced/workspaces/config',
    element: <WorkspaceConfig />,
  },
  {
    path: '/tools/package-management/pnpm/advanced/workspaces/filtering-recursive',
    element: <FilteringAndRecursive />,
  },
];

export default Workspaces;
