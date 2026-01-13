import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallingAndSettingUpJenkins = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Setup/InstallingAndSettingUpJenkins'));
const InitialConfiguration = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Basics/Setup/InitialConfiguration'));

const Setup: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/basics/setup/install',
    element: <InstallingAndSettingUpJenkins />,
  },
  {
    path: '/tools/cicd/jenkins/basics/setup/config',
    element: <InitialConfiguration />,
  },
];

export default Setup;
