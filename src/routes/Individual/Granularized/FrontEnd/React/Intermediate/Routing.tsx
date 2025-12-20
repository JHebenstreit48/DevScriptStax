import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BasicRouting = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/Routing/BasicRouting'));
const NestedAndDynamicRoutes = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/Routing/NestedAndDynamicRoutes'));
const LazyLoadingWithSuspense = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/Routing/LazyLoadingWithSuspense'));

const Routing: RouteObject[] = [
  {
    path: '/react/intermediate/routing/basic',
    element: <BasicRouting />,
  },
  {
    path: '/react/intermediate/routing/nested',
    element: <NestedAndDynamicRoutes />,
  },
  {
    path: '/react/intermediate/routing/lazy',
    element: <LazyLoadingWithSuspense />,
  },
];

export default Routing;
