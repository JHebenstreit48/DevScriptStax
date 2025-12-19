import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CSSVarsAndOverrides = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Theming/CSSVarsAndOverrides'));
const CustomComponents = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Theming/CustomComponents'));

const Theming: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/advanced/theming/css-vars-and-overrides',
    element: <CSSVarsAndOverrides />,
  },
  {
    path: '/frameworks/react-bootstrap/advanced/theming/custom-components',
    element: <CustomComponents />,
  },
];

export default Theming;
