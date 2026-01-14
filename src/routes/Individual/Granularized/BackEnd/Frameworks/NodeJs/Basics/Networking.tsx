import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPServer = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Networking/HTTPServer'));
const HTTPClient = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Networking/HTTPClient'));

const Networking: RouteObject[] = [
  {
    path: '/frameworks/nodejs/basics/networking-core/http-server',
    element: <HTTPServer />,
  },
  {
    path: '/frameworks/nodejs/basics/networking-core/http-client',
    element: <HTTPClient />,
  },
];

export default Networking;
