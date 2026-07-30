import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LoggingMiddleware = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Observability/LoggingMiddleware'));
const MetricsAndTracing = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/ExpressJs/Advanced/Observability/MetricsAndTracing'));

const Observability: RouteObject[] = [
  {
    path: '/frameworks/express/advanced/observability/logging-middleware',
    element: <LoggingMiddleware />,
  },
  {
    path: '/frameworks/express/advanced/observability/metrics-tracing',
    element: <MetricsAndTracing />,
  },
];

export default Observability;
