import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Modules/Basics')
);
const LazyLoading = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Modules/LazyLoading')
);

const Modules: RouteObject[] = [
  {
    path: '/angular/core-concepts/modules/basics',
    element: <Basics />,
  },
  {
    path: '/angular/core-concepts/lazy-loading',
    element: <LazyLoading />,
  },
];

export default Modules;