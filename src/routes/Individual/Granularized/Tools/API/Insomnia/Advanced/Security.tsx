import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClientCerts = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Advanced/Security/ClientCerts'));
const CookieJarAndCSRF = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Advanced/Security/CookieJarAndCSRF'));

const Security: RouteObject[] = [
  {
    path: '/tools/api/insomnia/advanced/security/client-certs',
    element: <ClientCerts />,
  },
  {
    path: '/tools/api/insomnia/advanced/security/cookie-jar-csrf',
    element: <CookieJarAndCSRF />,
  },
];

export default Security;
