import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreMiddleware = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Basics/Middleware/CoreMiddleware'));
const CustomMiddleware = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Basics/Middleware/CustomMiddleware'));

const Middleware: RouteObject[] = [
  {
    path: '/frameworks/express/basics/middleware/core',
    element: <CoreMiddleware />,
  },
  {
    path: '/frameworks/express/basics/middleware/custom',
    element: <CustomMiddleware />,
  },
];

export default Middleware;
