import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroToDRF = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Advanced/RESTInDjango/IntroToDRF'));
const Serializers = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Advanced/RESTInDjango/Serializers'));
const ViewsetsAndRouters = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Advanced/RESTInDjango/ViewsetsAndRouters'));
const AuthAndPermissions = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Advanced/RESTInDjango/AuthAndPermissions'));

const RESTInDjango: RouteObject[] = [
  {
    path: '/backend/frameworks/django/advanced/rest-in-django/intro',
    element: <IntroToDRF />,
  },
  {
    path: '/backend/frameworks/django/advanced/rest-in-django/serializers',
    element: <Serializers />,
  },
  {
    path: '/backend/frameworks/django/advanced/rest-in-django/viewsets-routers',
    element: <ViewsetsAndRouters />,
  },
  {
    path: '/backend/frameworks/django/advanced/rest-in-django/auth-permissions',
    element: <AuthAndPermissions />,
  },
];

export default RESTInDjango;
