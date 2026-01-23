import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CollectionsAndBlocks = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/DataAndErrors/CollectionsAndBlocks'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/DataAndErrors/ErrorHandling'));

const DataAndErrors: RouteObject[] = [
  {
    path: '/languages/ruby/basics/data-errors/collections-blocks',
    element: <CollectionsAndBlocks />,
  },
  {
    path: '/languages/ruby/basics/data-errors/error-handling',
    element: <ErrorHandling />,
  },
];

export default DataAndErrors;
