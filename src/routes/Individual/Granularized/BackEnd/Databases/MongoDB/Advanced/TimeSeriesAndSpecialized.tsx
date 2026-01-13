import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TimeSeriesCollections = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/TimeSeriesAndSpecialized/TimeSeriesCollections'));
const CappedCollectionsAndTailableCursors = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/TimeSeriesAndSpecialized/CappedCollectionsAndTailableCursors'));

const TimeSeriesAndSpecialized: RouteObject[] = [
  {
    path: '/mongodb/advanced/specialized/time-series',
    element: <TimeSeriesCollections />,
  },
  {
    path: '/mongodb/advanced/specialized/capped-tailable',
    element: <CappedCollectionsAndTailableCursors />,
  },
];

export default TimeSeriesAndSpecialized;
