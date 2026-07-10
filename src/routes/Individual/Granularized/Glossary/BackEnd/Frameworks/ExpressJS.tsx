import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreConcepts = lazy(() => import('@/Pages/MainTabs/Glossary/BackEnd/Frameworks/ExpressJS/CoreConcepts'));
const Middleware = lazy(() => import('@/Pages/MainTabs/Glossary/BackEnd/Frameworks/ExpressJS/Middleware'));

const ExpressJS: RouteObject[] = [
  {
    path: '/glossary/backend/frameworks/express-js/core-concepts',
    element: <CoreConcepts />,
  },
  {
    path: '/glossary/backend/frameworks/express-js/middleware',
    element: <Middleware />,
  },
];

export default ExpressJS;