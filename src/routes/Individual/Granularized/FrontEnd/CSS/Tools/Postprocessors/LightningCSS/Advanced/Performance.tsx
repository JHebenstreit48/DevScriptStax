import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MinifyAndCompression = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Performance/MinifyAndCompression'));
const ParallelAndCache = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Performance/ParallelAndCache'));

const Performance: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/performance/minify-and-compression',
    element: <MinifyAndCompression />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/performance/parallel-and-cache',
    element: <ParallelAndCache />,
  },
];

export default Performance;
