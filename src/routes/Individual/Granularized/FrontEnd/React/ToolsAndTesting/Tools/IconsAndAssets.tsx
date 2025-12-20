import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReactIcons = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/ReactIcons'));
const FontAwesome = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/FontAwesome'));
const HeroiconsAndOthers = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/ToolsAndTesting/Tools/IconsAndAssets/HeroiconsAndOthers'));

const IconsAndAssets: RouteObject[] = [
  {
    path: '/react/tools/icons/react-icons',
    element: <ReactIcons />,
  },
  {
    path: '/react/tools/icons/font-awesome',
    element: <FontAwesome />,
  },
  {
    path: '/react/tools/icons/other-icons',
    element: <HeroiconsAndOthers />,
  },
];

export default IconsAndAssets;
