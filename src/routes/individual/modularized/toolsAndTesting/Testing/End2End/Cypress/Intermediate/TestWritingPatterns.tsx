import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SelectorsAndAssertions = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Testing/End2End/Cypress/Intermediate/TestWritingPatterns/SelectorsAndAssertions'));
const HandlingUIEvents = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Testing/End2End/Cypress/Intermediate/TestWritingPatterns/HandlingUIEvents'));
const WorkingWithFixtures = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Testing/End2End/Cypress/Intermediate/TestWritingPatterns/WorkingWithFixtures'));
const MockingAPIResponses = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Testing/End2End/Cypress/Intermediate/TestWritingPatterns/MockingAPIResponses'));
const CustomCypressCommands = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Testing/End2End/Cypress/Intermediate/TestWritingPatterns/CustomCypressCommands'));

const TestWritingPatterns: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/selectors',
    element: <SelectorsAndAssertions />,
  },
  {
    path: '/testing/e2e/cypress/ui-events',
    element: <HandlingUIEvents />,
  },
  {
    path: '/testing/e2e/cypress/fixtures',
    element: <WorkingWithFixtures />,
  },
  {
    path: '/testing/e2e/cypress/mocking',
    element: <MockingAPIResponses />,
  },
  {
    path: '/testing/e2e/cypress/custom-commands',
    element: <CustomCypressCommands />,
  },
];

export default TestWritingPatterns;
