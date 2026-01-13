import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Testing/EndToEnd/Introduction'));
const Writing = lazy(() => import('@/Pages/MainTabs/FrontEnd/Angular/Testing/EndToEnd/Writing'));

const EndToEnd: RouteObject[] = [
  {
    path: '/angular/testing/e2e/introduction',
    element: <Introduction />,
  },
  {
    path: '/angular/testing/e2e/writing',
    element: <Writing />,
  },
];

export default EndToEnd;
