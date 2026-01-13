import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GoModules = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/Modules/GoModules'));
const Versioning = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/Modules/Versioning'));

const Modules: RouteObject[] = [
  {
    path: '/go/advanced/modules/go-modules',
    element: <GoModules />,
  },
  {
    path: '/go/advanced/modules/versioning',
    element: <Versioning />,
  },
];

export default Modules;
