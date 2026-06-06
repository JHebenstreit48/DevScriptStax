import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/HTTPClients/Axios/Introduction'));

const Axios: RouteObject[] = [
  {
    path: '/apis/basics/http-clients/axios/introduction',
    element: <Introduction />,
  },
];

export default Axios;