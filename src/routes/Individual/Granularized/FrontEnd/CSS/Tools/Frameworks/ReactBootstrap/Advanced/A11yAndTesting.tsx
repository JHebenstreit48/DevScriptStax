import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Accessibility = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/A11yAndTesting/Accessibility'));
const ComponentTesting = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/A11yAndTesting/ComponentTesting'));

const A11yAndTesting: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/advanced/a11y-and-testing/accessibility',
    element: <Accessibility />,
  },
  {
    path: '/frameworks/react-bootstrap/advanced/a11y-and-testing/component-testing',
    element: <ComponentTesting />,
  },
];

export default A11yAndTesting;
