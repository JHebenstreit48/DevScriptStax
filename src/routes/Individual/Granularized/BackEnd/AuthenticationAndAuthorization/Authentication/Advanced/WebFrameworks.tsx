import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NodeExpress = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/NodeExpress'));
const NextJsReact = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/NextJsReact'));
const DjangoFlask = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/DjangoFlask'));
const LaravelPHP = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/LaravelPHP'));
const ASPNET = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/ASPNET'));

const WebFrameworks: RouteObject[] = [
  {
    path: '/authentication/advanced/web-frameworks/node-express',
    element: <NodeExpress />,
  },
  {
    path: '/authentication/advanced/web-frameworks/nextjs-react',
    element: <NextJsReact />,
  },
  {
    path: '/authentication/advanced/web-frameworks/django-flask',
    element: <DjangoFlask />,
  },
  {
    path: '/authentication/advanced/web-frameworks/laravel-php',
    element: <LaravelPHP />,
  },
  {
    path: '/authentication/advanced/web-frameworks/aspnet',
    element: <ASPNET />,
  },
];

export default WebFrameworks;
