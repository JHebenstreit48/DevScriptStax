import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ModalAndTooltip = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Overlays/ModalAndTooltip'));
const PopoverAndOverlayTrigger = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Overlays/PopoverAndOverlayTrigger'));

const Overlays: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/components/overlays/modal-and-tooltip',
    element: <ModalAndTooltip />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/components/overlays/popover-and-overlaytrigger',
    element: <PopoverAndOverlayTrigger />,
  },
];

export default Overlays;
