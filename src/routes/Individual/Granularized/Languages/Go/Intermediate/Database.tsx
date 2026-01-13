import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DatabaseSqlBasics = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/Database/DatabaseSqlBasics'));
const DriversAndORM = lazy(() => import('@/Pages/MainTabs/Languages/Go/Intermediate/Database/DriversAndORM'));

const Database: RouteObject[] = [
  {
    path: '/go/intermediate/database/sql-basics',
    element: <DatabaseSqlBasics />,
  },
  {
    path: '/go/intermediate/database/drivers-orm',
    element: <DriversAndORM />,
  },
];

export default Database;
