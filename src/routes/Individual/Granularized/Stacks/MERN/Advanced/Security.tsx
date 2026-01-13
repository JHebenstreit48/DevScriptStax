import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TokenRotation = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Advanced/Security/TokenRotation'));
const CookiesAndCSRF = lazy(() => import('@/Pages/MainTabs/Stacks/MERN/Advanced/Security/CookiesAndCSRF'));

const Security: RouteObject[] = [
  {
    path: '/mern/advanced/security/token-rotation',
    element: <TokenRotation />,
  },
  {
    path: '/mern/advanced/security/cookies-and-csrf',
    element: <CookiesAndCSRF />,
  },
];

export default Security;
