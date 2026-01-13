import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PgDumpAndPgRestore = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore/PgDumpAndPgRestore'));
const LogicalVsPhysicalBackups = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore/LogicalVsPhysicalBackups'));

const BackupAndRestore: RouteObject[] = [
  {
    path: '/postgresql/tools/backup-restore/pg-dump-restore',
    element: <PgDumpAndPgRestore />,
  },
  {
    path: '/postgresql/tools/backup-restore/logical-vs-physical',
    element: <LogicalVsPhysicalBackups />,
  },
];

export default BackupAndRestore;
