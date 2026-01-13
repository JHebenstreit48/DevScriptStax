import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EnvVars = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/Config/EnvVars'));
const ConfigFiles = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/Config/ConfigFiles'));

const Config: RouteObject[] = [
  {
    path: '/go/intermediate/config/env-vars',
    element: <EnvVars />,
  },
  {
    path: '/go/intermediate/config/config-files',
    element: <ConfigFiles />,
  },
];

export default Config;
