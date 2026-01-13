import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInit = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/Setup/InstallAndInit'));
const ConfigAndStore = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/Setup/ConfigAndStore'));

const Setup: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/basics/setup/install-init',
    element: <InstallAndInit />,
  },
  {
    path: '/tools/package-management/pnpm/basics/setup/config-store',
    element: <ConfigAndStore />,
  },
];

export default Setup;
