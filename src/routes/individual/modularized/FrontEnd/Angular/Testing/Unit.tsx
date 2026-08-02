import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/Unit/Introduction'));
const Components = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/Unit/Components'));
const Services = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/Unit/Services'));

const Unit: RouteObject[] = [
  {
    path: '/front-end/angular/testing/unit/introduction',
    element: <Introduction />,
  },
  {
    path: '/front-end/angular/testing/unit/components',
    element: <Components />,
  },
  {
    path: '/front-end/angular/testing/unit/services',
    element: <Services />,
  },
];

export default Unit;