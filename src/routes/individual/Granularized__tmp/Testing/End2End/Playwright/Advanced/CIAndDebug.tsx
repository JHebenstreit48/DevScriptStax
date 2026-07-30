import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CIIntegration = lazy(() => import('@/pages/mainTabs/Testing/End2End/Playwright/Advanced/CIAndDebug/CIIntegration'));
const Debugging = lazy(() => import('@/pages/mainTabs/Testing/End2End/Playwright/Advanced/CIAndDebug/Debugging'));

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
