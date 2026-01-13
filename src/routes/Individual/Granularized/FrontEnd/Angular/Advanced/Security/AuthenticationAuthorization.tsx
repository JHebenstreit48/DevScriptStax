import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImplementingAuthentication = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/AuthenticationAndAuthorization/ImplementingAuthentication'));
const RoleBasedAccessControl = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/Security/AuthenticationAndAuthorization/RoleBasedAccessControl'));

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
