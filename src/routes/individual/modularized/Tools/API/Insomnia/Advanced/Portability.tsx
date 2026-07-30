import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExportAndImport = lazy(() => import('@/pages/mainTabs/Tools/API/Insomnia/Advanced/Portability/ExportAndImport'));
const BackupAndSync = lazy(() => import('@/pages/mainTabs/Tools/API/Insomnia/Advanced/Portability/BackupAndSync'));

const Portability: RouteObject[] = [
  {
    path: '/tools/api/insomnia/advanced/portability/export-import',
    element: <ExportAndImport />,
  },
  {
    path: '/tools/api/insomnia/advanced/portability/backup-sync',
    element: <BackupAndSync />,
  },
];

export default Portability;
