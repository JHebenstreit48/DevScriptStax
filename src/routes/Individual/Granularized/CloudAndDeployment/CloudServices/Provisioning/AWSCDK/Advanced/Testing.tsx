import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Assertions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Testing/Assertions'));
const SnapshotTests = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Testing/SnapshotTests'));

const Testing: RouteObject[] = [
  {
    path: '/aws-cdk/advanced/testing/assertions',
    element: <Assertions />,
  },
  {
    path: '/aws-cdk/advanced/testing/snapshot-tests',
    element: <SnapshotTests />,
  },
];

export default Testing;
