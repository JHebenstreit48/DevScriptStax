import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Routing = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Integration/Routing'));
const FormsAndValidation = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Integration/FormsAndValidation'));

const Integration: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/advanced/integration/routing-navlink',
    element: <Routing />,
  },
  {
    path: '/frameworks/react-bootstrap/advanced/integration/forms-and-validation',
    element: <FormsAndValidation />,
  },
];

export default Integration;
