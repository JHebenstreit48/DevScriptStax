import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Replication = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/ClusteringAndHA/Replication'));
const Sentinel = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/ClusteringAndHA/Sentinel'));
const RedisClusterAndSharding = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/ClusteringAndHA/RedisClusterAndSharding'));

const ClusteringAndHA: RouteObject[] = [
  {
    path: '/redis/advanced/clustering-and-ha/replication',
    element: <Replication />,
  },
  {
    path: '/redis/advanced/clustering-and-ha/sentinel',
    element: <Sentinel />,
  },
  {
    path: '/redis/advanced/clustering-and-ha/redis-cluster-and-sharding',
    element: <RedisClusterAndSharding />,
  },
];

export default ClusteringAndHA;
