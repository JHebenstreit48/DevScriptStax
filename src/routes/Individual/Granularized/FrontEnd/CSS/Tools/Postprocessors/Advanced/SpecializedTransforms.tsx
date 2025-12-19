import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RTL = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms/RTL'));
const MediaQueryPacking = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms/MediaQueryPacking'));

const SpecializedTransforms: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/advanced/specialized-transforms/rtl-rtlcss',
    element: <RTL />,
  },
  {
    path: '/css/tools/postprocessors/advanced/specialized-transforms/media-query-packing',
    element: <MediaQueryPacking />,
  },
];

export default SpecializedTransforms;
