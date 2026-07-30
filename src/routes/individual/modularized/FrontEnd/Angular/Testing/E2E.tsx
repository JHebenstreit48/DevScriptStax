import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/E2E/Introduction'));
const Writing = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Testing/E2E/Writing'));

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
