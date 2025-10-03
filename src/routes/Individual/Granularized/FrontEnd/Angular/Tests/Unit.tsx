import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/Angular/Tests/Unit/Introduction')
);

const Unit: RouteObject[] = [
  {
    path: 'angular/testing/unit/introduction',
    element: <Introduction />,
  },
];

export default Unit;