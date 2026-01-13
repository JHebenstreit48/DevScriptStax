import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RDBSnapshotting = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/Persistence/RDBSnapshotting'));
const AOF = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/Persistence/AOF'));
const HybridAndTuning = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/Persistence/HybridAndTuning'));

const Persistence: RouteObject[] = [
  {
    path: '/redis/advanced/persistence/rdb-snapshotting',
    element: <RDBSnapshotting />,
  },
  {
    path: '/redis/advanced/persistence/aof',
    element: <AOF />,
  },
  {
    path: '/redis/advanced/persistence/hybrid-and-tuning',
    element: <HybridAndTuning />,
  },
];

export default Persistence;
