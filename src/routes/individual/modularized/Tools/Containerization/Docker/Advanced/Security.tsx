import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BestPractices = lazy(() => import('@/pages/mainTabs/Tools/Containerization/Docker/Advanced/Security/BestPractices'));
const SecretsAndScanning = lazy(() => import('@/pages/mainTabs/Tools/Containerization/Docker/Advanced/Security/SecretsAndScanning'));

const Security: RouteObject[] = [
  {
    path: '/tools/containerization/docker/security',
    element: <BestPractices />,
  },
  {
    path: '/tools/containerization/docker/advanced/security/secrets-scanning',
    element: <SecretsAndScanning />,
  },
];

export default Security;
