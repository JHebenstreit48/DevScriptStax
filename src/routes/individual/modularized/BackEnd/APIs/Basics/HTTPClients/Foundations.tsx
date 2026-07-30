import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Basics/HTTPClients/Foundations/Introduction'));

const Foundations: RouteObject[] = [
  {
    path: '/apis/basics/http-clients/foundations/introduction',
    element: <Introduction />,
  },
];

export default Foundations;