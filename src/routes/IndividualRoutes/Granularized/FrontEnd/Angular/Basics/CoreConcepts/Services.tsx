import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () =>
    import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Services/Basics')
);
const DependencyInject = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Services/DependencyInject'
    )
);

const Services: RouteObject[] = [
  {
    path: '/angular/core-concepts/services/basics',
    element: <Basics />,
  },
  {
    path: '/angular/core-concepts/services/dependency-injection',
    element: <DependencyInject />,
  },
];

export default Services;
