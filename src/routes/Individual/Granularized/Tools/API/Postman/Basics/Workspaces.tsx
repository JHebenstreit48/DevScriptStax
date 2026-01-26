import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Collections = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Workspaces/Collections'));
const Sharing = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Workspaces/Sharing'));

const Workspaces: RouteObject[] = [
  {
    path: '/tools/api/postman/basics/workspaces/collections',
    element: <Collections />,
  },
  {
    path: '/tools/api/postman/basics/workspaces/sharing',
    element: <Sharing />,
  },
];

export default Workspaces;
