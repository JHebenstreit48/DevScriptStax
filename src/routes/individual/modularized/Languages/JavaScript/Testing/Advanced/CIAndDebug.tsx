import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CIIntegration = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Advanced/CIAndDebug/CIIntegration'));
const DebuggingTechniques = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Advanced/CIAndDebug/DebuggingTechniques'));

const CIAndDebug: RouteObject[] = [
  {
    path: '/javascript/testing/advanced/ci-and-debug/ci-integration',
    element: <CIIntegration />,
  },
  {
    path: '/javascript/testing/advanced/ci-and-debug/debugging-techniques',
    element: <DebuggingTechniques />,
  },
];

export default CIAndDebug;
