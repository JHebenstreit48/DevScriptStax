import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Fixtures = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/FixturesAndNetwork/Fixtures'));
const APIMocking = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/FixturesAndNetwork/APIMocking'));

const FixturesAndNetwork: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/basics/fixtures-network/fixtures',
    element: <Fixtures />,
  },
  {
    path: '/testing/e2e/playwright/basics/fixtures-network/api-mocking',
    element: <APIMocking />,
  },
];

export default FixturesAndNetwork;
