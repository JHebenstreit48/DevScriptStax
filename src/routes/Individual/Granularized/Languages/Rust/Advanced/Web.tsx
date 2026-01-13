import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPServers = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Web/HTTPServers'));
const HTTPServers2 = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Web/HTTPServers'));
const RequestResponse = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Web/RequestResponse'));

const Web: RouteObject[] = [
  {
    path: '/languages/rust/advanced/web/axum-http-servers',
    element: <HTTPServers />,
  },
  {
    path: '/languages/rust/advanced/web/actix-http-servers',
    element: <HTTPServers2 />,
  },
  {
    path: '/languages/rust/advanced/web/request-response',
    element: <RequestResponse />,
  },
];

export default Web;
