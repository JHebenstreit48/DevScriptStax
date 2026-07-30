import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/Unit/Introduction'));
const Components = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/Unit/Components'));
const Services = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/Unit/Services'));

const Unit: RouteObject[] = [
  {
    path: '/angular/testing/unit/introduction',
    element: <Introduction />,
  },
  {
    path: '/angular/testing/unit/components',
    element: <Components />,
  },
  {
    path: '/angular/testing/unit/services',
    element: <Services />,
  },
];

export default Unit;