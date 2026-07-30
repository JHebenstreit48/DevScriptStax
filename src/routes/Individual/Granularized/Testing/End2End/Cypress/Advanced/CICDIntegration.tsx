import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CypressAndContinuousIntegration = lazy(() => import('@/pages/mainTabs/Testing/End2End/Cypress/Advanced/CICDIntegration/CypressAndContinuousIntegration'));
const UsingCypressWithCircleCI = lazy(() => import('@/pages/mainTabs/Testing/End2End/Cypress/Advanced/CICDIntegration/UsingCypressWithCircleCI'));
const GitHubActionsAndOtherRunners = lazy(() => import('@/pages/mainTabs/Testing/End2End/Cypress/Advanced/CICDIntegration/GitHubActionsAndOtherRunners'));

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
