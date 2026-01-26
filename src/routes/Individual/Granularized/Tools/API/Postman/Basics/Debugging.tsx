import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Console = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Debugging/Console'));
const Troubleshoot = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Debugging/Troubleshoot'));

const Debugging: RouteObject[] = [
  {
    path: '/tools/api/postman/basics/debugging/console',
    element: <Console />,
  },
  {
    path: '/tools/api/postman/basics/debugging/troubleshoot',
    element: <Troubleshoot />,
  },
];

export default Debugging;
