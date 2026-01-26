import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticFiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/ViewsAndStatic/StaticFiles'));
const EJS = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/ViewsAndStatic/EJS'));
const Handlebars = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/ViewsAndStatic/Handlebars'));

const ViewsAndStatic: RouteObject[] = [
  {
    path: '/frameworks/express/basics/views-static/static-files',
    element: <StaticFiles />,
  },
  {
    path: '/frameworks/express/basics/views-static/ejs',
    element: <EJS />,
  },
  {
    path: '/frameworks/express/basics/views-static/handlebars',
    element: <Handlebars />,
  },
];

export default ViewsAndStatic;
