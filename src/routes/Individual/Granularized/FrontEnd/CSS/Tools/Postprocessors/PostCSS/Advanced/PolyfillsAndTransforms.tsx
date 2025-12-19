import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomPropertiesAndMedia = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PolyfillsAndTransforms/CustomPropertiesAndMedia'));
const SelectorFeatures = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PolyfillsAndTransforms/SelectorFeatures'));

const PolyfillsAndTransforms: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/postcss/advanced/polyfills-and-transforms/custom-properties-and-media',
    element: <CustomPropertiesAndMedia />,
  },
  {
    path: '/css/tools/postprocessors/postcss/advanced/polyfills-and-transforms/selector-features',
    element: <SelectorFeatures />,
  },
];

export default PolyfillsAndTransforms;
