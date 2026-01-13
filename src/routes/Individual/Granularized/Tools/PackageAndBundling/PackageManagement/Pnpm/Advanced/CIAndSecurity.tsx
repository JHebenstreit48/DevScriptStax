import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CIIntegration = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/CIAndSecurity/CIIntegration'));
const LockfileAndAudit = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/CIAndSecurity/LockfileAndAudit'));

const CIAndSecurity: RouteObject[] = [
  {
    path: '/tools/package-management/pnpm/advanced/ci-security/ci',
    element: <CIIntegration />,
  },
  {
    path: '/tools/package-management/pnpm/advanced/ci-security/lockfile-audit',
    element: <LockfileAndAudit />,
  },
];

export default CIAndSecurity;
