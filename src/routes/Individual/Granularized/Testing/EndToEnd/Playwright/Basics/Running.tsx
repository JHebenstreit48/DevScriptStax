import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIAndConfig = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Running/CLIAndConfig'));
const UIModeAndHeadless = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Running/UIModeAndHeadless'));

const Running: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/basics/running/cli-config',
    element: <CLIAndConfig />,
  },
  {
    path: '/testing/e2e/playwright/basics/running/ui-mode-headless',
    element: <UIModeAndHeadless />,
  },
];

export default Running;
