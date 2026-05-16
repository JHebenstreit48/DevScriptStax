import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CIIntegration = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Advanced/CIAndDebug/CIIntegration'));
const Debugging = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Advanced/CIAndDebug/Debugging'));

const CIAndDebug: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/advanced/ci-debug/ci-integration',
    element: <CIIntegration />,
  },
  {
    path: '/testing/e2e/playwright/advanced/ci-debug/debugging',
    element: <Debugging />,
  },
];

export default CIAndDebug;
