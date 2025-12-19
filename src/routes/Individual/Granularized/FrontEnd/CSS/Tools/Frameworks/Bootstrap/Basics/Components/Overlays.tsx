import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Modals = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Overlays/Modals'));
const DropdownsAndTooltips = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Overlays/DropdownsAndTooltips'));

const Overlays: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/components/overlays/modals',
    element: <Modals />,
  },
  {
    path: '/frameworks/bootstrap/basics/components/overlays/dropdowns-and-tooltips',
    element: <DropdownsAndTooltips />,
  },
];

export default Overlays;
