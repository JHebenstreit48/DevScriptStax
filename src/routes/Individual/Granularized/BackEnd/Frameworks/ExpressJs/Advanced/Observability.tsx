import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LoggingMiddleware = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Observability/LoggingMiddleware'));
const MetricsAndTracing = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Observability/MetricsAndTracing'));

const Observability: RouteObject[] = [
  {
    path: '/backend/frameworks/express/advanced/observability/logging-middleware',
    element: <LoggingMiddleware />,
  },
  {
    path: '/backend/frameworks/express/advanced/observability/metrics-tracing',
    element: <MetricsAndTracing />,
  },
];

export default Observability;
