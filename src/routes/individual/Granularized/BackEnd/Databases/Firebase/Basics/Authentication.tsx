import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Firebase/Basics/Authentication/Overview'));
const Implementation = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Firebase/Basics/Authentication/Implementation'));
const OAuthAndSocialLogins = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Firebase/Basics/Authentication/OAuthAndSocialLogins'));
const ManagingUsersAndPermissions = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/Firebase/Basics/Authentication/ManagingUsersAndPermissions'));

const Authentication: RouteObject[] = [
  {
    path: '/firebase/basics/authentication/introduction',
    element: <Introduction />,
  },
  {
    path: '/firebase/basics/authentication/implementation',
    element: <Implementation />,
  },
  {
    path: '/firebase/basics/authentication/social-logins',
    element: <OAuthAndSocialLogins />,
  },
  {
    path: '/firebase/basics/authentication/user-management',
    element: <ManagingUsersAndPermissions />,
  },
];

export default Authentication;
