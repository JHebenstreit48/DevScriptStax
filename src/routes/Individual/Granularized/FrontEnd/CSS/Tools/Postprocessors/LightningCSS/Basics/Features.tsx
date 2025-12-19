import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AutoprefixAndTargets = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Features/AutoprefixAndTargets'));
const ModernCSS = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Features/ModernCSS'));

const Features: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/basics/features/autoprefix-and-targets',
    element: <AutoprefixAndTargets />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/basics/features/modern-css-nesting-and-custom-media',
    element: <ModernCSS />,
  },
];

export default Features;
