import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Gunicorn = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Advanced/Deployment/Gunicorn'));
const Scaling = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Advanced/Deployment/Scaling'));

const Deployment: RouteObject[] = [
  {
    path: '/backend/frameworks/django/advanced/deployment/gunicorn',
    element: <Gunicorn />,
  },
  {
    path: '/backend/frameworks/django/advanced/deployment/scaling',
    element: <Scaling />,
  },
];

export default Deployment;
