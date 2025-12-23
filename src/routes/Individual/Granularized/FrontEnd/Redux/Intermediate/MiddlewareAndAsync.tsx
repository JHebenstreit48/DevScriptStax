import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MiddlewareConcepts = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/MiddlewareAndAsync/MiddlewareConcepts'));
const AsyncWithThunks = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/MiddlewareAndAsync/AsyncWithThunks'));
const WritingMiddleware = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/MiddlewareAndAsync/WritingMiddleware'));
const EnhancersAndComposition = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/MiddlewareAndAsync/EnhancersAndComposition'));
const DevTools = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/MiddlewareAndAsync/DevTools'));

const MiddlewareAndAsync: RouteObject[] = [
  {
    path: '/redux/intermediate/middleware-async/middleware-concepts',
    element: <MiddlewareConcepts />,
  },
  {
    path: '/redux/intermediate/middleware-async/async-thunks',
    element: <AsyncWithThunks />,
  },
  {
    path: '/redux/intermediate/middleware-async/writing-middleware',
    element: <WritingMiddleware />,
  },
  {
    path: '/redux/intermediate/middleware-async/enhancers-and-composition',
    element: <EnhancersAndComposition />,
  },
  {
    path: '/redux/intermediate/middleware-async/devtools',
    element: <DevTools />,
  },
];

export default MiddlewareAndAsync;
