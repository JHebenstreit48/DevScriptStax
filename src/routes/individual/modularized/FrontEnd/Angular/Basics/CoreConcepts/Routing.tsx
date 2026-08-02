import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Routing/Basics')
);
const GuardsAndResolvers = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Routing/GuardsResolvers')
);
const LazyLoading = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Routing/LazyLoading')
);

const Routing: RouteObject[] = [
  {
    path: '/front-end/angular/basics/core-concepts/routing/basics',
    element: <Basics />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/routing/guards-and-resolvers',
    element: <GuardsAndResolvers />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/routing/lazy-loading',
    element: <LazyLoading />,
  },
];

export default Routing;