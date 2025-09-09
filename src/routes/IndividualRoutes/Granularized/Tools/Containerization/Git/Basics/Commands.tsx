import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Common = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/Commands/Common'));
const StatusDiffLog = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Basics/Commands/StatusDiffLog'));

const Commands: RouteObject[] = [
  {
    path: '/tools/containerization/git/basics/commands/common',
    element: <Common />,
  },
  {
    path: '/tools/containerization/git/basics/commands/status-diff-log',
    element: <StatusDiffLog />,
  },
];

export default Commands;