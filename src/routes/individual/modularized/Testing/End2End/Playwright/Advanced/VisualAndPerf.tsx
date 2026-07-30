import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VisualTesting = lazy(() => import('@/pages/mainTabs/Testing/End2End/Playwright/Advanced/VisualAndPerf/VisualTesting'));
const Performance = lazy(() => import('@/pages/mainTabs/Testing/End2End/Playwright/Advanced/VisualAndPerf/Performance'));

const VisualAndPerf: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/advanced/visual-perf/visual-testing',
    element: <VisualTesting />,
  },
  {
    path: '/testing/e2e/playwright/advanced/visual-perf/performance',
    element: <Performance />,
  },
];

export default VisualAndPerf;
