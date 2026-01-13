import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SocialLogins = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authentication/Intermediate/ModernMethods/SocialLogins'));
const WebAuthn = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authentication/Intermediate/ModernMethods/WebAuthn'));

const ModernMethods: RouteObject[] = [
  {
    path: '/authentication/intermediate/methods/social-logins',
    element: <SocialLogins />,
  },
  {
    path: '/authentication/intermediate/methods/webauthn',
    element: <WebAuthn />,
  },
];

export default ModernMethods;
