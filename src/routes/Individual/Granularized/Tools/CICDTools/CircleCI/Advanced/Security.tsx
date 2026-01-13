import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityAndComplianceInCircleCI = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/Security/SecurityAndComplianceInCircleCI'));
const ContextsAndSecrets = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/Security/ContextsAndSecrets'));

const Security: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/advanced/security/security',
    element: <SecurityAndComplianceInCircleCI />,
  },
  {
    path: '/tools/cicd/circleci/advanced/security/contexts-secrets',
    element: <ContextsAndSecrets />,
  },
];

export default Security;
