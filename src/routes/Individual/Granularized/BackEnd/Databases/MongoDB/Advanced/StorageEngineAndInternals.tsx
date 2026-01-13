import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WiredTigerTuning = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/WiredTigerTuning'));
const CompressionAndJournaling = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/CompressionAndJournaling'));
const FilesystemAndHardwareNotes = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/FilesystemAndHardwareNotes'));

const StorageEngineAndInternals: RouteObject[] = [
  {
    path: '/mongodb/advanced/storage/wiredtiger',
    element: <WiredTigerTuning />,
  },
  {
    path: '/mongodb/advanced/storage/compression-journaling',
    element: <CompressionAndJournaling />,
  },
  {
    path: '/mongodb/advanced/storage/filesystem',
    element: <FilesystemAndHardwareNotes />,
  },
];

export default StorageEngineAndInternals;
