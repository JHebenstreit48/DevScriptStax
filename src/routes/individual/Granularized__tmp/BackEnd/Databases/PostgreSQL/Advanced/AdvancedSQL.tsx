import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommonTableExpressions = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/CommonTableExpressions'));
const WindowFunctions = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/WindowFunctions'));
const RecursiveQueries = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/RecursiveQueries'));
const FullTextSearch = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/FullTextSearch'));

const AdvancedSQL: RouteObject[] = [
  {
    path: '/postgresql/advanced/sql/ctes',
    element: <CommonTableExpressions />,
  },
  {
    path: '/postgresql/advanced/sql/window-functions',
    element: <WindowFunctions />,
  },
  {
    path: '/postgresql/advanced/sql/recursive-queries',
    element: <RecursiveQueries />,
  },
  {
    path: '/postgresql/advanced/sql/full-text-search',
    element: <FullTextSearch />,
  },
];

export default AdvancedSQL;
