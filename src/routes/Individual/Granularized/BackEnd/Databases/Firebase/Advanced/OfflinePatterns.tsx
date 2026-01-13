import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SDKOfflineAndCaching = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/OfflinePatterns/SDKOfflineAndCaching'));
const SyncAndConflictResolution = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/OfflinePatterns/SyncAndConflictResolution'));

const OfflinePatterns: RouteObject[] = [
  {
    path: '/firebase/advanced/offline-patterns/sdk-offline',
    element: <SDKOfflineAndCaching />,
  },
  {
    path: '/firebase/advanced/offline-patterns/conflict-resolution',
    element: <SyncAndConflictResolution />,
  },
];

export default OfflinePatterns;
