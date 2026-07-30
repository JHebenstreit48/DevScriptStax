import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TryCatchAndErrorTypes = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Basics/ErrorHandling/TryCatchAndErrorTypes'));
const ErrorHandlingPatterns = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Basics/ErrorHandling/ErrorHandlingPatterns'));

const ErrorHandling: RouteObject[] = [
  {
    path: '/javascript/basics/errors/try-catch',
    element: <TryCatchAndErrorTypes />,
  },
  {
    path: '/javascript/basics/errors/patterns',
    element: <ErrorHandlingPatterns />,
  },
];

export default ErrorHandling;
