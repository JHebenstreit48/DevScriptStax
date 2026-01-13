import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PsqlBasics = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin/PsqlBasics'));
const RolesAndPermissions = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin/RolesAndPermissions'));

const CLIAndAdmin: RouteObject[] = [
  {
    path: '/postgresql/tools/cli-admin/psql-basics',
    element: <PsqlBasics />,
  },
  {
    path: '/postgresql/tools/cli-admin/roles-permissions',
    element: <RolesAndPermissions />,
  },
];

export default CLIAndAdmin;
