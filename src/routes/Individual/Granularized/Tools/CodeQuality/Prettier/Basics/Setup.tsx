import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInit = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Setup/InstallAndInit'));
const ConfigFiles = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Basics/Setup/ConfigFiles'));

const Setup: RouteObject[] = [
  {
    path: '/prettier/basics/setup/install-init',
    element: <InstallAndInit />,
  },
  {
    path: '/prettier/basics/setup/config-files',
    element: <ConfigFiles />,
  },
];

export default Setup;
