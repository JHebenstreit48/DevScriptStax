import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AuthenticationAndRoles = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/AuthenticationAndRoles'));
const AuditingAndCompliance = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/AuditingAndCompliance'));
const FieldLevelEncryption = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/FieldLevelEncryption'));

const SecurityAndCompliance: RouteObject[] = [
  {
    path: '/mongodb/advanced/security/auth',
    element: <AuthenticationAndRoles />,
  },
  {
    path: '/mongodb/advanced/security/auditing',
    element: <AuditingAndCompliance />,
  },
  {
    path: '/mongodb/advanced/security/csfle',
    element: <FieldLevelEncryption />,
  },
];

export default SecurityAndCompliance;
