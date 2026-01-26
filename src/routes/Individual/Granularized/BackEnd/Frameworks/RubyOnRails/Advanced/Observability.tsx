import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Logging = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/Observability/Logging'));
const Instrumentation = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/Observability/Instrumentation'));

const Observability: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/advanced/observability/logging',
    element: <Logging />,
  },
  {
    path: '/frameworks/ruby-on-rails/advanced/observability/instrumentation',
    element: <Instrumentation />,
  },
];

export default Observability;
