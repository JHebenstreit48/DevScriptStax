import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AddRemoveUpdate = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/UsageAndScripts/AddRemoveUpdate'));
const RunScripts = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/UsageAndScripts/RunScripts'));

const UsageAndScripts: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/basics/usage/add-remove-update',
    element: <AddRemoveUpdate />,
  },
  {
    path: '/tools/package-management/yarn/basics/usage/scripts',
    element: <RunScripts />,
  },
];

export default UsageAndScripts;
