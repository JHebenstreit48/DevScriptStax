import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Views = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/Views'));
const TemplateEngine = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/TemplateEngine'));
const ClassVsFunction = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/ClassVsFunction'));
const RenderingContext = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/RenderingContext'));

const ViewsAndTemplates: RouteObject[] = [
  {
    path: '/backend/frameworks/django/basics/views-templates/views',
    element: <Views />,
  },
  {
    path: '/backend/frameworks/django/basics/views-templates/templates',
    element: <TemplateEngine />,
  },
  {
    path: '/backend/frameworks/django/basics/views-templates/class-vs-function',
    element: <ClassVsFunction />,
  },
  {
    path: '/backend/frameworks/django/basics/views-templates/rendering-context',
    element: <RenderingContext />,
  },
];

export default ViewsAndTemplates;
