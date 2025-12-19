import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ControlsAndGroups = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Forms/ControlsAndGroups'));
const ValidationStates = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Forms/ValidationStates'));

const Forms: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/components/forms/controls-and-groups',
    element: <ControlsAndGroups />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/components/forms/validation-states',
    element: <ValidationStates />,
  },
];

export default Forms;
