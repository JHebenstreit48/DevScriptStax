import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Setup = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/React/Basics/SetupAndStructure/Setup'
    )
);

const Structure = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/React/Basics/SetupAndStructure/Structure'
    )
);

const SetupAndStructure: RouteObject[] = [
  {
    path: '/react/basics/setup-and-structure/setup',
    element: <Setup />,
  },
  {
    path: '/react/basics/setup-and-structure/structure',
    element: <Structure />,
  },
];

export default SetupAndStructure;