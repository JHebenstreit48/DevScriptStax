import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const QueriesAndMutations = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/RTKQuery/QueriesAndMutations'));
const CacheAndInvalidation = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/RTKQuery/CacheAndInvalidation'));
const ErrorHandlingAndRetries = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/RTKQuery/ErrorHandlingAndRetries'));

const RTKQuery: RouteObject[] = [
  {
    path: '/redux/intermediate/rtk-query/queries-and-mutations',
    element: <QueriesAndMutations />,
  },
  {
    path: '/redux/intermediate/rtk-query/cache-and-invalidation',
    element: <CacheAndInvalidation />,
  },
  {
    path: '/redux/intermediate/rtk-query/error-handling-and-retries',
    element: <ErrorHandlingAndRetries />,
  },
];

export default RTKQuery;
