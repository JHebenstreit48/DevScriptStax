import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/Introduction')
);
const ReusableDesign = lazy(
  () =>
    import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/ReusableDesign')
);
const SmartDumb = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/SmartDumb')
);
const Communication = lazy(
  () =>
    import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/Communication')
);
const InputsOutputs = lazy(
  () =>
    import('@/Pages/MainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/InputsOutputs')
);

const Components: RouteObject[] = [
  {
    path: '/angular/basics/core-concepts/components/introduction',
    element: <Introduction />,
  },
  {
    path: '/angular/basics/core-concepts/components/reusable-design',
    element: <ReusableDesign />,
  },
  {
    path: '/angular/basics/core-concepts/components/smart-dumb',
    element: <SmartDumb />,
  },
  {
    path: '/angular/basics/core-concepts/components/communication',
    element: <Communication />,
  },
  {
    path: '/angular/basics/core-concepts/components/inputs-outputs',
    element: <InputsOutputs />,
  },
];

export default Components;