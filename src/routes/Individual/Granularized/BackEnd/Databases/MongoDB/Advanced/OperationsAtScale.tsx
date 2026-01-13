import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BackupsAndPITR = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/BackupsAndPITR'));
const UpgradesAndFCVManagement = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/UpgradesAndFCVManagement'));
const ShardedOpsAndResharding = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/ShardedOpsAndResharding'));

const OperationsAtScale: RouteObject[] = [
  {
    path: '/mongodb/advanced/operations/backup-pitr',
    element: <BackupsAndPITR />,
  },
  {
    path: '/mongodb/advanced/operations/upgrades',
    element: <UpgradesAndFCVManagement />,
  },
  {
    path: '/mongodb/advanced/operations/sharding-ops',
    element: <ShardedOpsAndResharding />,
  },
];

export default OperationsAtScale;
