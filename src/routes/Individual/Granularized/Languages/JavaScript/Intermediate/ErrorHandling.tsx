import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TryCatchAndErrorTypes = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Intermediate/ErrorHandling/TryCatchAndErrorTypes'));
const ErrorHandlingPatterns = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Intermediate/ErrorHandling/ErrorHandlingPatterns'));

const ErrorHandling: RouteObject[] = [
  {
    path: '/javascript/intermediate/errors/try-catch',
    element: <TryCatchAndErrorTypes />,
  },
  {
    path: '/javascript/intermediate/errors/patterns',
    element: <ErrorHandlingPatterns />,
  },
];

export default ErrorHandling;
