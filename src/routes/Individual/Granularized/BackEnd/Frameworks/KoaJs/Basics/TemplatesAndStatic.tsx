import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticFiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/TemplatesAndStatic/StaticFiles'));
const Templating = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/TemplatesAndStatic/Templating'));

const TemplatesAndStatic: RouteObject[] = [
  {
    path: '/frameworks/koa/basics/templates-static/static-files',
    element: <StaticFiles />,
  },
  {
    path: '/frameworks/koa/basics/templates-static/templating',
    element: <Templating />,
  },
];

export default TemplatesAndStatic;
