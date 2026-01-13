import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ZonesAndTagAwareSharding = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion/ZonesAndTagAwareSharding'));
const DRAndCrossRegionStrategy = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion/DRAndCrossRegionStrategy'));

const GlobalAndMultiRegion: RouteObject[] = [
  {
    path: '/mongodb/advanced/global/zones',
    element: <ZonesAndTagAwareSharding />,
  },
  {
    path: '/mongodb/advanced/global/dr-strategy',
    element: <DRAndCrossRegionStrategy />,
  },
];

export default GlobalAndMultiRegion;
