import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ViteWebpackParcel = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Integration/ViteWebpackParcel'));
const ConfigPatterns = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Integration/ConfigPatterns'));

const Integration: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/basics/integration/vite-webpack-parcel',
    element: <ViteWebpackParcel />,
  },
  {
    path: '/css/tools/postprocessors/basics/integration/config-patterns',
    element: <ConfigPatterns />,
  },
];

export default Integration;
