import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PrototypeAndInheritance = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/ObjectOrientedProgramming/PrototypeAndInheritance'));
const Classes = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/ObjectOrientedProgramming/Classes'));

const ObjectOrientedProgramming: RouteObject[] = [
  {
    path: '/javascript/advanced/oop/prototypeinheritance',
    element: <PrototypeAndInheritance />,
  },
  {
    path: '/javascript/advanced/oop/classes',
    element: <Classes />,
  },
];

export default ObjectOrientedProgramming;
