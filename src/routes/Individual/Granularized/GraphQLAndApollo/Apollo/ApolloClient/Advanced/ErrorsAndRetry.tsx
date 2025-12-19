import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ErrorHandling = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/ErrorsAndRetry/ErrorHandling'));
const RetryLink = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/ErrorsAndRetry/RetryLink'));

const ErrorsAndRetry: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/client/advanced/errors-retry/error-handling',
    element: <ErrorHandling />,
  },
  {
    path: '/graphqlandapollo/apollo/client/advanced/errors-retry/retry-link',
    element: <RetryLink />,
  },
];

export default ErrorsAndRetry;
