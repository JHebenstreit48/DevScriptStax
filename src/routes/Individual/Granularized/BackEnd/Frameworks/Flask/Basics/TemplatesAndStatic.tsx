import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Jinja2 = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/TemplatesAndStatic/Jinja2'));
const StaticFiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Basics/TemplatesAndStatic/StaticFiles'));

const TemplatesAndStatic: RouteObject[] = [
  {
    path: '/frameworks/flask/basics/templates-static/jinja2',
    element: <Jinja2 />,
  },
  {
    path: '/frameworks/flask/basics/templates-static/static-files',
    element: <StaticFiles />,
  },
];

export default TemplatesAndStatic;
