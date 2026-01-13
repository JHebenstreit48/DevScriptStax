import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CypressAndContinuousIntegration = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/CICDIntegration/CypressAndContinuousIntegration'));
const UsingCypressWithCircleCI = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/CICDIntegration/UsingCypressWithCircleCI'));
const GitHubActionsAndOtherRunners = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/CICDIntegration/GitHubActionsAndOtherRunners'));

const CICDIntegration: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/ci-integration',
    element: <CypressAndContinuousIntegration />,
  },
  {
    path: '/testing/e2e/cypress/circleci',
    element: <UsingCypressWithCircleCI />,
  },
  {
    path: '/testing/e2e/cypress/github-actions',
    element: <GitHubActionsAndOtherRunners />,
  },
];

export default CICDIntegration;
