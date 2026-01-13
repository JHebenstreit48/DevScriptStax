import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnitVsIntegration = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/Fundamentals/UnitVsIntegration'));
const TestPyramidAndScope = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/Fundamentals/TestPyramidAndScope'));

const Fundamentals: RouteObject[] = [
  {
    path: '/javascript/testing/basics/fundamentals/unit-vs-integration',
    element: <UnitVsIntegration />,
  },
  {
    path: '/javascript/testing/basics/fundamentals/test-pyramid-and-scope',
    element: <TestPyramidAndScope />,
  },
];

export default Fundamentals;
