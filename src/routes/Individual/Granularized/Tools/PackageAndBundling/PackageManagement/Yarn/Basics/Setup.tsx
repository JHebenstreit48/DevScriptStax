import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInit = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Setup/InstallAndInit'));
const Config = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Setup/Config'));

const Setup: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/basics/setup/install-init',
    element: <InstallAndInit />,
  },
  {
    path: '/tools/package-management/yarn/basics/setup/config',
    element: <Config />,
  },
];

export default Setup;
