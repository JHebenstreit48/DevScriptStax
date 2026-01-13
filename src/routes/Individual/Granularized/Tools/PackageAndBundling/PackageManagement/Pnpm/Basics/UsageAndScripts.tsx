import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AddRemoveUpdate = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/UsageAndScripts/AddRemoveUpdate'));
const RunScripts = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/UsageAndScripts/RunScripts'));

const UsageAndScripts: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/basics/usage/add-remove-update',
    element: <AddRemoveUpdate />,
  },
  {
    path: '/tools/package-management/pnpm/basics/usage/scripts',
    element: <RunScripts />,
  },
];

export default UsageAndScripts;
