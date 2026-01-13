import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LocatorsAndSelectors = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Authoring/LocatorsAndSelectors'));
const UIInteractions = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Playwright/Basics/Authoring/UIInteractions'));

const Authoring: RouteObject[] = [
  {
    path: '/testing/e2e/playwright/basics/authoring/selectors',
    element: <LocatorsAndSelectors />,
  },
  {
    path: '/testing/e2e/playwright/basics/authoring/ui-interactions',
    element: <UIInteractions />,
  },
];

export default Authoring;
