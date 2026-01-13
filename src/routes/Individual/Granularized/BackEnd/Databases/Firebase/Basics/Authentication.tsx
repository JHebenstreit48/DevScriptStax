import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Authentication/Overview'));
const Implementation = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Authentication/Implementation'));
const OAuthAndSocialLogins = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Authentication/OAuthAndSocialLogins'));
const ManagingUsersAndPermissions = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Authentication/ManagingUsersAndPermissions'));

const Authentication: RouteObject[] = [
  {
    path: '/firebase/basics/authentication/overview',
    element: <Overview />,
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
