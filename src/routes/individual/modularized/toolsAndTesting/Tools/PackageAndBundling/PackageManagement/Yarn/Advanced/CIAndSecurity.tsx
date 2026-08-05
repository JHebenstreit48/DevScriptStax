import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CIIntegration = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/CIAndSecurity/CIIntegration'));
const ResolutionsAndAudits = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/CIAndSecurity/ResolutionsAndAudits'));

const CIAndSecurity: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/advanced/ci-security/ci',
    element: <CIIntegration />,
  },
  {
    path: '/tools/package-management/yarn/advanced/ci-security/resolutions-audit',
    element: <ResolutionsAndAudits />,
  },
];

export default CIAndSecurity;
