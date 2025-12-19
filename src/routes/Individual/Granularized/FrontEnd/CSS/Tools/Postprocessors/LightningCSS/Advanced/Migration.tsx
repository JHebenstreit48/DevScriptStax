import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FromPostCSSStack = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Migration/FromPostCSSStack'));
const MixedPipelines = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Migration/MixedPipelines'));

const Migration: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/migration/from-postcss-stack',
    element: <FromPostCSSStack />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/migration/mixed-pipelines',
    element: <MixedPipelines />,
  },
];

export default Migration;
