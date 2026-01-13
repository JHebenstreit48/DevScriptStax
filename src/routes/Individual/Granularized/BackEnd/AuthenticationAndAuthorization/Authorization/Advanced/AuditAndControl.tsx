import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AccessLogging = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Advanced/AuditAndControl/AccessLogging'));
const FineGrainedControl = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Advanced/AuditAndControl/FineGrainedControl'));

const AuditAndControl: RouteObject[] = [
  {
    path: '/authz/advanced/audit/logging',
    element: <AccessLogging />,
  },
  {
    path: '/authz/advanced/audit/fine-grained',
    element: <FineGrainedControl />,
  },
];

export default AuditAndControl;
