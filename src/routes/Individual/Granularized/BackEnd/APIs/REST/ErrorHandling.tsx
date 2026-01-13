import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPStatusCodes = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/ErrorHandling/HTTPStatusCodes'));
const ErrorResponseStructure = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/ErrorHandling/ErrorResponseStructure'));
const BestPractices = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/ErrorHandling/BestPractices'));
const LoggingAndMonitoringErrors = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/ErrorHandling/LoggingAndMonitoringErrors'));

const ErrorHandling: RouteObject[] = [
  {
    path: '/apis/rest/error-handling/status-codes',
    element: <HTTPStatusCodes />,
  },
  {
    path: '/apis/rest/error-handling/error-structure',
    element: <ErrorResponseStructure />,
  },
  {
    path: '/apis/rest/error-handling/best-practices',
    element: <BestPractices />,
  },
  {
    path: '/apis/rest/error-handling/logging-monitoring',
    element: <LoggingAndMonitoringErrors />,
  },
];

export default ErrorHandling;
