import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Modals = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Modals'));
const Dropdowns = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Dropdowns'));
const Tooltips = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Tooltips'));
const Accordions = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Accordions'));

const Overlays: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/overlays/modals',
    element: <Modals />,
  },
  {
    path: '/frameworks/bootstrap/basics/overlays/dropdowns',
    element: <Dropdowns />,
  },
  {
    path: '/frameworks/bootstrap/basics/overlays/tooltips',
    element: <Tooltips />,
  },
  {
    path: '/frameworks/bootstrap/basics/overlays/accordions',
    element: <Accordions />,
  }
];

export default Overlays;