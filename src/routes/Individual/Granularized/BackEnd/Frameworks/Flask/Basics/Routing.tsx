import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Routing/Basics'));
const DynamicRoutes = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Routing/DynamicRoutes'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/Routing/ErrorHandling'));

const Routing: RouteObject[] = [
  {
    path: '/frameworks/flask/basics/routing/basics',
    element: <Basics />,
  },
  {
    path: '/frameworks/flask/basics/routing/dynamic-routes',
    element: <DynamicRoutes />,
  },
  {
    path: '/frameworks/flask/basics/routing/error-handling',
    element: <ErrorHandling />,
  },
];

export default Routing;
