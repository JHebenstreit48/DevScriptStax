import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpringSecurity = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security/SpringSecurity'));
const JWT = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security/JWT'));
const OAuth2OIDC = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security/OAuth2OIDC'));

const Security: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/security/spring-security',
    element: <SpringSecurity />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/security/jwt-spring',
    element: <JWT />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/security/oauth2-oidc',
    element: <OAuth2OIDC />,
  },
];

export default Security;
