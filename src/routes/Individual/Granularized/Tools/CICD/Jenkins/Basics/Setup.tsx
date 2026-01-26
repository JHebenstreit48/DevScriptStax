import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallingAndSettingUpJenkins = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Basics/Setup/InstallingAndSettingUpJenkins'));
const InitialConfiguration = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Basics/Setup/InitialConfiguration'));

const Setup: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/basics/setup/install',
    element: <InstallingAndSettingUpJenkins />,
  },
  {
    path: '/ci-cd/jenkins/basics/setup/config',
    element: <InitialConfiguration />,
  },
];

export default Setup;