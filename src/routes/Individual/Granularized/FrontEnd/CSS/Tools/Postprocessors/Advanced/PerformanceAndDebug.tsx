import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SourceMapsAndDiagnostics = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/PerformanceAndDebug/SourceMapsAndDiagnostics'));
const CachingAndParallel = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/PerformanceAndDebug/CachingAndParallel'));

const PerformanceAndDebug: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/advanced/performance-and-debug/source-maps-and-diagnostics',
    element: <SourceMapsAndDiagnostics />,
  },
  {
    path: '/css/tools/postprocessors/advanced/performance-and-debug/caching-and-parallel',
    element: <CachingAndParallel />,
  },
];

export default PerformanceAndDebug;
