import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInit = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Basics/Setup/InstallAndInit'));
const WebpackConfigJs = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/Bundling/Webpack/Basics/Setup/WebpackConfigJs'));

const Setup: RouteObject[] = [
  {
    path: '/tools/bundling/webpack/basics/setup/install-init',
    element: <InstallAndInit />,
  },
  {
    path: '/tools/bundling/webpack/basics/setup/config',
    element: <WebpackConfigJs />,
  },
];

export default Setup;
