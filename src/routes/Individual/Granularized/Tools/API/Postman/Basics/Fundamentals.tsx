import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Fundamentals/InstallAndSetup'));
const UITour = lazy(() => import('@/Pages/MainTabs/Tools/API/Postman/Basics/Fundamentals/UITour'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/api/postman/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tools/api/postman/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/tools/api/postman/basics/fundamentals/ui-tour',
    element: <UITour />,
  },
];

export default Fundamentals;
