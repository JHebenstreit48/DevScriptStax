import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RequestHooks = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/MiddlewareAndHooks/RequestHooks'));
const WSGIMiddleware = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/MiddlewareAndHooks/WSGIMiddleware'));

const MiddlewareAndHooks: RouteObject[] = [
  {
    path: '/frameworks/flask/basics/middleware-hooks/request-hooks',
    element: <RequestHooks />,
  },
  {
    path: '/frameworks/flask/basics/middleware-hooks/wsgi-middleware',
    element: <WSGIMiddleware />,
  },
];

export default MiddlewareAndHooks;
