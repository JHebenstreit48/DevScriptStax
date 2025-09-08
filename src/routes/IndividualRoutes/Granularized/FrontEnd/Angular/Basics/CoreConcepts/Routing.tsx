import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () =>
    import('@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/RoutingPages/Basics')
);
const GuardsAndResolvers = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/RoutingPages/GuardsAndResolvers'
    )
);
const LazyLoading = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/RoutingPages/LazyLoading'
    )
);

const Routing: RouteObject[] = [
  {
    path: '/angular/core-concepts/routing/basics',
    element: <Basics />,
  },
  {
    path: '/angular/core-concepts/routing/guards-and-resolvers',
    element: <GuardsAndResolvers />,
  },
  {
    path: '/angular/core-concepts/routing/lazy-loading',
    element: <LazyLoading />,
  },
];

export default Routing;