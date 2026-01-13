import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Actuator = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Observability/Actuator'));
const MetricsAndTracing = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringBoot/Advanced/Observability/MetricsAndTracing'));

const Observability: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/observability/actuator',
    element: <Actuator />,
  },
  {
    path: '/backend/frameworks/spring/spring-boot/advanced/observability/metrics-tracing',
    element: <MetricsAndTracing />,
  },
];

export default Observability;
