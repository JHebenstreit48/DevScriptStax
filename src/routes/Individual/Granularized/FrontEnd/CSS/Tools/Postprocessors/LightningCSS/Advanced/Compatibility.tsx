import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TargetsAndBrowserslist = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility/TargetsAndBrowserslist'));
const InteropWithPostCSS = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility/InteropWithPostCSS'));

const Compatibility: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/compatibility/targets-and-browserslist',
    element: <TargetsAndBrowserslist />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/advanced/compatibility/interop-with-postcss',
    element: <InteropWithPostCSS />,
  },
];

export default Compatibility;
