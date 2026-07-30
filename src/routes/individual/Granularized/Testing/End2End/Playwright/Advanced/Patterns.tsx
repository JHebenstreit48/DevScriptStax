import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BestPractices = lazy(() => import('@/pages/mainTabs/Testing/End2End/Playwright/Advanced/Patterns/BestPractices'));
const CustomHelpers = lazy(() => import('@/pages/mainTabs/Testing/End2End/Playwright/Advanced/Patterns/CustomHelpers'));

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
