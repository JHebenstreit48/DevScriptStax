import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Intro = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Fundamentals/Intro'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Fundamentals/InstallAndSetup'));
const FirstTest = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Fundamentals/FirstTest'));
const VsCypress = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Fundamentals/VsCypress'));

const Fundamentals: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/basics/fundamentals/intro',
    element: <Intro />,
  },
  {
    path: '/testing/e2e/playwright/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
  {
    path: '/testing/e2e/playwright/basics/fundamentals/first-test',
    element: <FirstTest />,
  },
  {
    path: '/testing/e2e/playwright/basics/fundamentals/vs-cypress',
    element: <VsCypress />,
  },
];

export default Fundamentals;
