import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/Introduction')
);
const ReusableDesign = lazy(
  () =>
    import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/ReusableDesign')
);
const SmartDumb = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/SmartDumb')
);
const Communication = lazy(
  () =>
    import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/Communication')
);
const InputsOutputs = lazy(
  () =>
    import('@/pages/mainTabs/FrontEnd/Angular/Basics/CoreConcepts/Components/InputsOutputs')
);

const Components: RouteObject[] = [
  {
    path: '/front-end/angular/basics/core-concepts/components/introduction',
    element: <Introduction />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/components/reusable-design',
    element: <ReusableDesign />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/components/smart-dumb',
    element: <SmartDumb />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/components/communication',
    element: <Communication />,
  },
  {
    path: '/front-end/angular/basics/core-concepts/components/inputs-outputs',
    element: <InputsOutputs />,
  },
];

export default Components;