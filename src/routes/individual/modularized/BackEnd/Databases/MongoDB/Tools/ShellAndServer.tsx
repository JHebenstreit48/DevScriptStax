import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Tools/ShellAndServer/Introduction'));
const Commands = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Tools/ShellAndServer/Commands'));

const ShellAndServer: RouteObject[] = [
  {
    path: '/mongodb/tools/shell-and-server/introduction',
    element: <Introduction />,
  },
  {
    path: '/mongodb/tools/shell-and-server/commands',
    element: <Commands />,
  },
];

export default ShellAndServer;