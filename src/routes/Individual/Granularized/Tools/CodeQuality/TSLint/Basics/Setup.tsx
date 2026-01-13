import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInit = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/Setup/InstallAndInit'));
const TslintJson = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/Setup/TslintJson'));

const Setup: RouteObject[] = [
  {
    path: '/tslint/basics/setup/install-init',
    element: <InstallAndInit />,
  },
  {
    path: '/tslint/basics/setup/tslint-json',
    element: <TslintJson />,
  },
];

export default Setup;
