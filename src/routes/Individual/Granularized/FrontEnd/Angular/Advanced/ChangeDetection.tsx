import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/ChangeDetection/Basics'));
const Optimizing = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/ChangeDetection/Optimizing'));
const TemplateRenderOptim = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Advanced/ChangeDetection/TemplateRenderOptim')
);

const changeDetection: RouteObject[] = [
  {
    path: '/angular/advanced/change-detection/basics',
    element: <Basics />,
  },
  {
    path: '/angular/advanced/change-detection/optimizing',
    element: <Optimizing />,
  },
  {
    path: '/angular/advanced/change-detection/template-optimization',
    element: <TemplateRenderOptim />,
  },
];

export default changeDetection;