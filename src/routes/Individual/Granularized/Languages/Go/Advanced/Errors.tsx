import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BasicsAndWrapping = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/Errors/BasicsAndWrapping'));
const SentinelVsIsAs = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/Errors/SentinelVsIsAs'));

const Errors: RouteObject[] = [
  {
    path: '/go/advanced/errors/basics-wrapping',
    element: <BasicsAndWrapping />,
  },
  {
    path: '/go/advanced/errors/sentinel-is-as',
    element: <SentinelVsIsAs />,
  },
];

export default Errors;
