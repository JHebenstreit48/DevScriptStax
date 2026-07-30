import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnitVsIntegration = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Basics/Fundamentals/UnitVsIntegration'));
const TestPyramidAndScope = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Basics/Fundamentals/TestPyramidAndScope'));

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
