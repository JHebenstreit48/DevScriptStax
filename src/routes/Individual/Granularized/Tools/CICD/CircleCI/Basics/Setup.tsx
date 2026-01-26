import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallingAndSettingUpCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/CircleCISetup/InstallingAndSettingUpCircleCI'));
const ConfiguringACircleciConfigYml = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Basics/CircleCISetup/ConfiguringACircleciConfigYml'));

const Setup: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/basics/circle-ci-setup/setup',
    element: <InstallingAndSettingUpCircleCI />,
  },
  {
    path: '/ci-cd/circle-ci/basics/circle-ci-setup/config',
    element: <ConfiguringACircleciConfigYml />,
  },
];

export default Setup;