import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Structure = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Insomnia/Basics/Workspaces/Structure'));
const Sharing = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Insomnia/Basics/Workspaces/Sharing'));

const Workspaces: RouteObject[] = [
  {
    path: '/tools/api/insomnia/basics/workspaces/structure',
    element: <Structure />,
  },
  {
    path: '/tools/api/insomnia/basics/workspaces/sharing',
    element: <Sharing />,
  },
];

export default Workspaces;
