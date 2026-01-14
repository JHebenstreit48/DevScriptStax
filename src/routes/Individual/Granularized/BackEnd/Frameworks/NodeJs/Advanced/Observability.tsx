import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Logging = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/Observability/Logging'));
const DiagnosticsAndAsyncHooks = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/Observability/DiagnosticsAndAsyncHooks'));

const Observability: RouteObject[] = [
  {
    path: '/frameworks/nodejs/advanced/observability/logging-node',
    element: <Logging />,
  },
  {
    path: '/frameworks/nodejs/advanced/observability/diagnostics-async-hooks',
    element: <DiagnosticsAndAsyncHooks />,
  },
];

export default Observability;
