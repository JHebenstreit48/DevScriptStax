import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FlakyTestsAndRetries = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Advanced/StabilityAndData/FlakyTestsAndRetries'));
const BuildersAndFixtures = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Advanced/StabilityAndData/BuildersAndFixtures'));

const StabilityAndData: RouteObject[] = [
  {
    path: '/javascript/testing/advanced/stability-and-data/flaky-tests-and-retries',
    element: <FlakyTestsAndRetries />,
  },
  {
    path: '/javascript/testing/advanced/stability-and-data/builders-and-fixtures',
    element: <BuildersAndFixtures />,
  },
];

export default StabilityAndData;
