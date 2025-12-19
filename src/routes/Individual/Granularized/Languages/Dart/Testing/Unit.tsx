import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PackageTest = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/Unit/PackageTest'));
const Matchers = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/Unit/Matchers'));

const Unit: RouteObject[] = [
  {
    path: '/dart/testing/unit/package-test',
    element: <PackageTest />,
  },
  {
    path: '/dart/testing/unit/matchers',
    element: <Matchers />,
  },
];

export default Unit;
