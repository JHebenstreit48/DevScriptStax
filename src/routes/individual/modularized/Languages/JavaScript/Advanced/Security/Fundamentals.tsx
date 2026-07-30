import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommonVulnerabilities = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/Security/Fundamentals/CommonVulnerabilities'));
const XSSAndCSRF = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/Security/Fundamentals/XSSAndCSRF'));

const Fundamentals: RouteObject[] = [
  {
    path: '/javascript/security/fundamentals/vulnerabilities',
    element: <CommonVulnerabilities />,
  },
  {
    path: '/javascript/security/fundamentals/xsscsrf',
    element: <XSSAndCSRF />,
  },
];

export default Fundamentals;
