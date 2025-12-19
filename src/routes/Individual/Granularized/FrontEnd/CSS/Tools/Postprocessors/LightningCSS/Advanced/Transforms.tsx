import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NestingAndLayer = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms/NestingAndLayer'));
const CustomMediaAndSelectors = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms/CustomMediaAndSelectors'));

const Transforms: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/transforms/nesting-and-layer',
    element: <NestingAndLayer />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/transforms/custom-media-and-selectors',
    element: <CustomMediaAndSelectors />,
  },
];

export default Transforms;
