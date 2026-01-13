import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BestPractices = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Advanced/Patterns/BestPractices'));
const CustomHelpers = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Advanced/Patterns/CustomHelpers'));

const Patterns: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/advanced/patterns/best-practices',
    element: <BestPractices />,
  },
  {
    path: '/testing/e2e/playwright/advanced/patterns/custom-helpers',
    element: <CustomHelpers />,
  },
];

export default Patterns;
