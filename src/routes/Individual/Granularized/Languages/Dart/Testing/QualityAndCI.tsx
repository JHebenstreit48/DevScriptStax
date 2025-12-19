import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Coverage = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/QualityAndCI/Coverage'));
const CISetup = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/QualityAndCI/CISetup'));

const QualityAndCI: RouteObject[] = [
  {
    path: '/dart/testing/quality/coverage',
    element: <Coverage />,
  },
  {
    path: '/dart/testing/quality/ci',
    element: <CISetup />,
  },
];

export default QualityAndCI;
