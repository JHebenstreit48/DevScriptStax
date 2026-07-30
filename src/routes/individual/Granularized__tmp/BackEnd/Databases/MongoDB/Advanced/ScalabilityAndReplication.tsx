import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReplicaSets = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/ReplicaSets'));
const Sharding = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/Sharding'));
const HighAvailability = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/HighAvailability'));
const ScalingBestPractices = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/ScalingBestPractices'));

const ScalabilityAndReplication: RouteObject[] = [
  {
    path: '/mongodb/advanced/scalability-and-replication/replica-sets',
    element: <ReplicaSets />,
  },
  {
    path: '/mongodb/advanced/scalability-and-replication/sharding',
    element: <Sharding />,
  },
  {
    path: '/mongodb/advanced/scalability-and-replication/high-availability',
    element: <HighAvailability />,
  },
  {
    path: '/mongodb/advanced/scalability-and-replication/best-practices',
    element: <ScalingBestPractices />,
  },
];

export default ScalabilityAndReplication;
