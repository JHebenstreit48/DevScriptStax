import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(
  () =>
    import('@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ServicesPages/Basics')
);
const DependencyInject = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ServicesPages/DependencyInject'
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
