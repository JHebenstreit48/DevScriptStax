import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnderstandingViews = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/UnderstandingViews'));
const CreatingAndUsingViews = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/CreatingAndUsingViews'));
const MaterializedViewsAndPerformance = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/MaterializedViewsAndPerformance'));
const RefreshingAndIndexingViews = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/RefreshingAndIndexingViews'));

const ViewsAndMaterializedViews: RouteObject[] = [
  {
    path: '/postgresql/advanced/views/overview',
    element: <UnderstandingViews />,
  },
  {
    path: '/postgresql/advanced/views/creating-using',
    element: <CreatingAndUsingViews />,
  },
  {
    path: '/postgresql/advanced/views/materialized-views',
    element: <MaterializedViewsAndPerformance />,
  },
  {
    path: '/postgresql/advanced/views/refreshing-indexing',
    element: <RefreshingAndIndexingViews />,
  },
];

export default ViewsAndMaterializedViews;
