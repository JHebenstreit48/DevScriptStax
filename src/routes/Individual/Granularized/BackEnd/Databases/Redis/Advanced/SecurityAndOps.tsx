import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsersAndACLs = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/SecurityAndOps/UsersAndACLs'));
const TLSAndAuth = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/SecurityAndOps/TLSAndAuth'));
const BackupAndRestore = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/SecurityAndOps/BackupAndRestore'));

const SecurityAndOps: RouteObject[] = [
  {
    path: '/redis/advanced/security-and-ops/users-and-acls',
    element: <UsersAndACLs />,
  },
  {
    path: '/redis/advanced/security-and-ops/tls-and-auth',
    element: <TLSAndAuth />,
  },
  {
    path: '/redis/advanced/security-and-ops/backup-and-restore',
    element: <BackupAndRestore />,
  },
];

export default SecurityAndOps;
