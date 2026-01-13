import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallingAndSettingUpCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/CircleCISetup/InstallingAndSettingUpCircleCI'));
const ConfiguringACircleciConfigYml = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Basics/CircleCISetup/ConfiguringACircleciConfigYml'));

const CircleCISetup: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/basics/circleci-setup/setup',
    element: <InstallingAndSettingUpCircleCI />,
  },
  {
    path: '/tools/cicd/circleci/basics/circleci-setup/config',
    element: <ConfiguringACircleciConfigYml />,
  },
];

export default CircleCISetup;
