import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Modules/Basics')
);
const LazyLoading = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Modules/LazyLoading')
);

const Modules: RouteObject[] = [
  {
    path: '/front-end/angular/basics/core-concepts/modules/basics',
    element: <Basics />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/lazy-loading',
    element: <LazyLoading />,
  },
];

export default Modules;