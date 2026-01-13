import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContentSecurityPolicy = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Security/ClientSideProtection/ContentSecurityPolicy'));
const CORSAndSameSiteCookies = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Security/ClientSideProtection/CORSAndSameSiteCookies'));

const ClientSideProtection: RouteObject[] = [
  {
    path: '/javascript/security/protection/csp',
    element: <ContentSecurityPolicy />,
  },
  {
    path: '/javascript/security/protection/corssamesite',
    element: <CORSAndSameSiteCookies />,
  },
];

export default ClientSideProtection;
