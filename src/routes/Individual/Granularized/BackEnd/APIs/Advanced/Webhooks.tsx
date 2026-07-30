import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/Webhooks/Introduction'));
const Fundamentals = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/Webhooks/Fundamentals'));
const SecurityConsiderations = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/Webhooks/SecurityConsiderations'));

const Webhooks: RouteObject[] = [
  {
    path: '/apis/advanced/webhooks/introduction',
    element: <Introduction />,
  },
  {
    path: '/apis/advanced/webhooks/fundamentals',
    element: <Fundamentals />,
  },
  {
    path: '/apis/advanced/webhooks/security',
    element: <SecurityConsiderations />,
  },
];

export default Webhooks;
