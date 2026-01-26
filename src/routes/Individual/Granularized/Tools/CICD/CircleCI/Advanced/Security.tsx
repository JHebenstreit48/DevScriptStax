import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityAndComplianceInCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/Security/SecurityAndComplianceInCircleCI'));
const ContextsAndSecrets = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/Security/ContextsAndSecrets'));

const Security: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/advanced/security/security',
    element: <SecurityAndComplianceInCircleCI />,
  },
  {
    path: '/ci-cd/circle-ci/advanced/security/contexts-secrets',
    element: <ContextsAndSecrets />,
  },
];

export default Security;
