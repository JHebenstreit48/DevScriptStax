import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Installing = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/InstallAndConfig/Installing'));
const Configuration = lazy(
  () => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/InstallAndConfig/Configuration')
);

const InstallAndConfig: RouteObject[] = [
  {
    path: '/git/basics/install-and-config/installing',
    element: <Installing />,
  },
  {
    path: '/git/basics/install-and-config/configuration',
    element: <Configuration />,
  },
];

export default InstallAndConfig;