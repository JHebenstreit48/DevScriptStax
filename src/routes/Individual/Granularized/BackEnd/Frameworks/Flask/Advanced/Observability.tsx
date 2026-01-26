import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Logging = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Observability/Logging'));
const MetricsAndTracing = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/Observability/MetricsAndTracing'));

const Observability: RouteObject[] = [
  {
    path: '/frameworks/flask/advanced/observability/logging',
    element: <Logging />,
  },
  {
    path: '/frameworks/flask/advanced/observability/metrics-tracing',
    element: <MetricsAndTracing />,
  },
];

export default Observability;
