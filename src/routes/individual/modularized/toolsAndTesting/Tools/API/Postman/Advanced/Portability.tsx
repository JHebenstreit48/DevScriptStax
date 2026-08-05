import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExportAndImport = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Postman/Advanced/Portability/ExportAndImport'));
const BackupAndSync = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Postman/Advanced/Portability/BackupAndSync'));

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
