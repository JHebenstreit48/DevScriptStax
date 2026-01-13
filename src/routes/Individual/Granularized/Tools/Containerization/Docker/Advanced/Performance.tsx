import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImageOptimization = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/Performance/ImageOptimization'));
const BuildCacheAndBuildx = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/Performance/BuildCacheAndBuildx'));

const Performance: RouteObject[] = [
  {
    path: '/tools/containerization/docker/image-optimization',
    element: <ImageOptimization />,
  },
  {
    path: '/tools/containerization/docker/advanced/perf/build-cache-buildx',
    element: <BuildCacheAndBuildx />,
  },
];

export default Performance;
