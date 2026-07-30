import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndScripts = lazy(() => import('@/pages/mainTabs/Tools/CodeQuality/StandardJS/Basics/Setup/InstallAndScripts'));
const IgnoreAndOverrides = lazy(() => import('@/pages/mainTabs/Tools/CodeQuality/StandardJS/Basics/Setup/IgnoreAndOverrides'));

const Setup: RouteObject[] = [
  {
    path: '/standardjs/basics/setup/install-scripts',
    element: <InstallAndScripts />,
  },
  {
    path: '/standardjs/basics/setup/ignore-overrides',
    element: <IgnoreAndOverrides />,
  },
];

export default Setup;
