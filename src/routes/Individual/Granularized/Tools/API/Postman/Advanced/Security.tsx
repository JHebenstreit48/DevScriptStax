import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OAuthFlows = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Advanced/Security/OAuthFlows'));
const Certificates = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Advanced/Security/Certificates'));

const Security: RouteObject[] = [
  {
    path: '/tools/api/postman/advanced/security/oauth-flows',
    element: <OAuthFlows />,
  },
  {
    path: '/tools/api/postman/advanced/security/certificates',
    element: <Certificates />,
  },
];

export default Security;
