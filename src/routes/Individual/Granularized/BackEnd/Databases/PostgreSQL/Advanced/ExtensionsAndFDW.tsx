import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PopularExtensions = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PopularExtensions'));
const PostGIS = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PostGIS'));
const PgStatStatements = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PgStatStatements'));
const ForeignDataWrappers = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/ForeignDataWrappers'));

const ExtensionsAndFDW: RouteObject[] = [
  {
    path: '/postgresql/advanced/extensions/overview',
    element: <PopularExtensions />,
  },
  {
    path: '/postgresql/advanced/extensions/postgis',
    element: <PostGIS />,
  },
  {
    path: '/postgresql/advanced/extensions/pg-stat-statements',
    element: <PgStatStatements />,
  },
  {
    path: '/postgresql/advanced/extensions/fdw',
    element: <ForeignDataWrappers />,
  },
];

export default ExtensionsAndFDW;
