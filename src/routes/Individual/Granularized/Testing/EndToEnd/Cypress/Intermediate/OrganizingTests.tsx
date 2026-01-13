import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TestHooks = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/TestHooks'));
const TestSuitesAndStructure = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/TestSuitesAndStructure'));
const UsingTagsAndFilters = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/UsingTagsAndFilters'));

const OrganizingTests: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/hooks',
    element: <TestHooks />,
  },
  {
    path: '/testing/e2e/cypress/suites',
    element: <TestSuitesAndStructure />,
  },
  {
    path: '/testing/e2e/cypress/tags',
    element: <UsingTagsAndFilters />,
  },
];

export default OrganizingTests;
