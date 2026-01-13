import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExportAndImport = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Advanced/Portability/ExportAndImport'));
const BackupAndSync = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Advanced/Portability/BackupAndSync'));

const Portability: RouteObject[] = [
  {
    path: '/tools/api/postman/advanced/portability/export-import',
    element: <ExportAndImport />,
  },
  {
    path: '/tools/api/postman/advanced/portability/backup-sync',
    element: <BackupAndSync />,
  },
];

export default Portability;
