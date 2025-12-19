import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ViteParcel = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Integration/ViteParcel'));
const WebpackRollup = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Integration/WebpackRollup'));

const Integration: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/basics/integration/vite-and-parcel',
    element: <ViteParcel />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/basics/integration/webpack-and-rollup',
    element: <WebpackRollup />,
  },
];

export default Integration;
