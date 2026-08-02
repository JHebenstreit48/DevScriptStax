import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Services/Basics')
);
const DependencyInject = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Services/DependencyInject')
);

const Services: RouteObject[] = [
  {
    path: '/front-end/angular/basics/core-concepts/services/basics',
    element: <Basics />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/services/dependency-injection',
    element: <DependencyInject />,
  },
];

export default Services;