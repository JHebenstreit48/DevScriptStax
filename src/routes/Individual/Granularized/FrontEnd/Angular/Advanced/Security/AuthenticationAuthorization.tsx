import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImplementingAuthentication = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/AuthentAndAuthor/Authentication'));
const RoleBasedAccessControl = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/AuthentAndAuthor/RBAC'));

const AuthenticationAuthorization: RouteObject[] = [
  {
    path: '/angular/advanced/security/authentication-and-authorization/authentication',
    element: <ImplementingAuthentication />,
  },
  {
    path: '/angular/advanced/security/authentication-and-authorization/rbac',
    element: <RoleBasedAccessControl />,
  },
];

export default AuthenticationAuthorization;
