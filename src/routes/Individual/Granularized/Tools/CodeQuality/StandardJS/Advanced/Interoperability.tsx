import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WithPrettier = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Advanced/Interoperability/WithPrettier'));
const WithESLint = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Advanced/Interoperability/WithESLint'));

const Interoperability: RouteObject[] = [
  {
    path: '/standardjs/advanced/interoperability/with-prettier',
    element: <WithPrettier />,
  },
  {
    path: '/standardjs/advanced/interoperability/with-eslint',
    element: <WithESLint />,
  },
];

export default Interoperability;
