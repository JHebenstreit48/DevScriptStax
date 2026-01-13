import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VolumesPersistence = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/VolumesAndStorage/VolumesPersistence'));
const BindMountsAndBackup = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/VolumesAndStorage/BindMountsAndBackup'));

const VolumesAndStorage: RouteObject[] = [
  {
    path: '/tools/containerization/docker/volumes',
    element: <VolumesPersistence />,
  },
  {
    path: '/tools/containerization/docker/advanced/storage/mounts-backup',
    element: <BindMountsAndBackup />,
  },
];

export default VolumesAndStorage;
