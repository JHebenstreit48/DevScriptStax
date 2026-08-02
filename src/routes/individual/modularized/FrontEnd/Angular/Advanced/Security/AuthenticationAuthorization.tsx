import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImplementingAuthentication = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/Security/AuthenticationAuthorization/Authentication'));
const RoleBasedAccessControl = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/Security/AuthenticationAuthorization/RBAC'));

const AuthenticationAuthorization: RouteObject[] = [
  {
    path: '/front-end/angular/advanced/security/authentication-and-authorization/authentication',
    element: <ImplementingAuthentication />,
  },
  {
    path: '/front-end/angular/advanced/security/authentication-and-authorization/rbac',
    element: <RoleBasedAccessControl />,
  },
];

export default AuthenticationAuthorization;
