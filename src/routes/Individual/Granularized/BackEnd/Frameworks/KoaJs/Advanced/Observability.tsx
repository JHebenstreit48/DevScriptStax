import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LoggingMiddleware = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Observability/LoggingMiddleware'));
const MetricsAndTracing = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/Observability/MetricsAndTracing'));

const Observability: RouteObject[] = [
  {
    path: '/frameworks/koa/advanced/observability/logging-middleware',
    element: <LoggingMiddleware />,
  },
  {
    path: '/frameworks/koa/advanced/observability/metrics-tracing',
    element: <MetricsAndTracing />,
  },
];

export default Observability;
