import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ControlledVsUncontrolled = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/React/Basics/CoreConcepts/Forms/ControlVsUncontrol'
    )
);

const PatternsAndLibraries = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/React/Basics/CoreConcepts/Forms/PatternsAndLibraries'
    )
);

const Forms: RouteObject[] = [
  {
    path: '/react/basics/core/forms/controlled',
    element: <ControlledVsUncontrolled />,
  },
  {
    path: '/react/basics/core/forms/libraries',
    element: <PatternsAndLibraries />,
  },
];

export default Forms;