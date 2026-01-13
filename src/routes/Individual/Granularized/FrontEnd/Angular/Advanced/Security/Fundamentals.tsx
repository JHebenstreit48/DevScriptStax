import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/Fundamentals/Basics'));
const XSSProtection = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/Fundamentals/XSSProtection'));
const CSRFProtection = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/Fundamentals/CSRFProtection'));

const Fundamentals: RouteObject[] = [
  {
    path: '/angular/advanced/security/fundamentals/basics',
    element: <Basics />,
  },
  {
    path: '/angular/advanced/security/fundamentals/xss-protection',
    element: <XSSProtection />,
  },
  {
    path: '/angular/advanced/security/fundamentals/csrf-protection',
    element: <CSRFProtection />,
  },
];

export default Fundamentals;
