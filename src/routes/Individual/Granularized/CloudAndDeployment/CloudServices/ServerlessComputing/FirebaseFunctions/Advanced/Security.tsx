import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IAMAndRoles = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Security/IAMAndRoles'));
const AppCheckAndAuth = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Security/AppCheckAndAuth'));

const Security: RouteObject[] = [
  {
    path: '/firebase-functions/advanced/security/iam-roles',
    element: <IAMAndRoles />,
  },
  {
    path: '/firebase-functions/advanced/security/app-check-auth',
    element: <AppCheckAndAuth />,
  },
];

export default Security;
