import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoverageCaveats = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Advanced/CoverageAndQuality/CoverageCaveats'));
const AssertionsAndInvariants = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Advanced/CoverageAndQuality/AssertionsAndInvariants'));

const CoverageAndQuality: RouteObject[] = [
  {
    path: '/javascript/testing/advanced/coverage-and-quality/coverage-caveats-transpile-and-esm',
    element: <CoverageCaveats />,
  },
  {
    path: '/javascript/testing/advanced/coverage-and-quality/assertions-and-invariants',
    element: <AssertionsAndInvariants />,
  },
];

export default CoverageAndQuality;
