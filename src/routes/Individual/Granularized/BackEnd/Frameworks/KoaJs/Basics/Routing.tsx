import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Routing/Basics'));
const KoaRouter = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Routing/KoaRouter'));
const ParamsAndQuery = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/Routing/ParamsAndQuery'));

const Routing: RouteObject[] = [
  {
    path: '/backend/frameworks/koa/basics/routing/basics',
    element: <Basics />,
  },
  {
    path: '/backend/frameworks/koa/basics/routing/koa-router',
    element: <KoaRouter />,
  },
  {
    path: '/backend/frameworks/koa/basics/routing/params-query',
    element: <ParamsAndQuery />,
  },
];

export default Routing;
