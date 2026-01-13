import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Routing/Basics'));
const DynamicRoutes = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Routing/DynamicRoutes'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Routing/ErrorHandling'));

const Routing: RouteObject[] = [
  {
    path: '/backend/frameworks/flask/basics/routing/basics',
    element: <Basics />,
  },
  {
    path: '/backend/frameworks/flask/basics/routing/dynamic-routes',
    element: <DynamicRoutes />,
  },
  {
    path: '/backend/frameworks/flask/basics/routing/error-handling',
    element: <ErrorHandling />,
  },
];

export default Routing;
