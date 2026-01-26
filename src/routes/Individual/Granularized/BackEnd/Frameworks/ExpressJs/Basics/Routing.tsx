import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Routes = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Routing/Routes'));
const ParamsAndQuery = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Routing/ParamsAndQuery'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/Routing/ErrorHandling'));

const Routing: RouteObject[] = [
  {
    path: '/frameworks/express/basics/routing/routes',
    element: <Routes />,
  },
  {
    path: '/frameworks/express/basics/routing/params-query',
    element: <ParamsAndQuery />,
  },
  {
    path: '/frameworks/express/basics/routing/error-handling',
    element: <ErrorHandling />,
  },
];

export default Routing;
