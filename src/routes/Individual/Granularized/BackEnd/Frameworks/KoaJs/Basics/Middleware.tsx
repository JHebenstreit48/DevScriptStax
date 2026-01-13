import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreMiddleware = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Middleware/CoreMiddleware'));
const CustomMiddleware = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Middleware/CustomMiddleware'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Middleware/ErrorHandling'));

const Middleware: RouteObject[] = [
  {
    path: '/backend/frameworks/koa/basics/middleware/core',
    element: <CoreMiddleware />,
  },
  {
    path: '/backend/frameworks/koa/basics/middleware/custom',
    element: <CustomMiddleware />,
  },
  {
    path: '/backend/frameworks/koa/basics/middleware/error-handling',
    element: <ErrorHandling />,
  },
];

export default Middleware;
