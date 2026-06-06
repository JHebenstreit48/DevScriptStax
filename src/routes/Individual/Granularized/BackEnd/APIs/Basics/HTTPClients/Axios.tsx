import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/HTTPClients/Axios/Introduction'));
const HTTPMethods = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/HTTPClients/Axios/HTTPMethods'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/HTTPClients/Axios/ErrorHandling'));
const Interceptors = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/HTTPClients/Axios/Interceptors'));
const Configuration = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/HTTPClients/Axios/Configuration'));

const Axios: RouteObject[] = [
  {
    path: '/apis/basics/http-clients/axios/introduction',
    element: <Introduction />,
  },
  {
    path: '/apis/basics/http-clients/axios/http-methods',
    element: <HTTPMethods />,
  },
  {
    path: '/apis/basics/http-clients/axios/error-handling',
    element: <ErrorHandling />,
  },
  {
    path: '/apis/basics/http-clients/axios/interceptors',
    element: <Interceptors />,
  },
  {
    path: '/apis/basics/http-clients/axios/configuration',
    element: <Configuration />,
  },
];

export default Axios;