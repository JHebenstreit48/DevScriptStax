import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SchemasAndTables = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/CoreSQL/SchemasAndTables'));
const CRUD = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/CoreSQL/CRUD'));
const Query = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/CoreSQL/Query'));

const CoreSQL: RouteObject[] = [
  {
    path: '/postgresql/basics/core-sql/schemas-tables',
    element: <SchemasAndTables />,
  },
  {
    path: '/postgresql/basics/core-sql/crud',
    element: <CRUD />,
  },
  {
    path: '/postgresql/basics/coresql/query',
    element: <Query />,
  },
];

export default CoreSQL;
