import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetHttpServer = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/WebAPIs/NetHttpServer'));
const RoutingAndMiddleware = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/WebAPIs/RoutingAndMiddleware'));
const JSON = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/WebAPIs/JSON'));

const WebAPIs: RouteObject[] = [
  {
    path: '/go/intermediate/web/net-http-server',
    element: <NetHttpServer />,
  },
  {
    path: '/go/intermediate/web/routing-middleware',
    element: <RoutingAndMiddleware />,
  },
  {
    path: '/go/intermediate/web/encoding-json',
    element: <JSON />,
  },
];

export default WebAPIs;
