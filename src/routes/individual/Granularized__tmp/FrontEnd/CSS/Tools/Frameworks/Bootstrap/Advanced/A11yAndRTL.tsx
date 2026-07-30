import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Accessibility = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL/Accessibility'));
const RTLSupport = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL/RTLSupport'));

const A11yAndRTL: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/advanced/a11y-and-rtl/accessibility',
    element: <Accessibility />,
  },
  {
    path: '/frameworks/bootstrap/advanced/a11y-and-rtl/rtl-support',
    element: <RTLSupport />,
  },
];

export default A11yAndRTL;
