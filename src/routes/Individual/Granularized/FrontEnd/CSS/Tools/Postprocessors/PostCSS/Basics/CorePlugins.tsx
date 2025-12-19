import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Autoprefixer = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins/Autoprefixer'));
const PresetEnvAndNesting = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins/PresetEnvAndNesting'));

const CorePlugins: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/postcss/basics/core-plugins/autoprefixer',
    element: <Autoprefixer />,
  },
  {
    path: '/css/tools/postprocessors/postcss/basics/core-plugins/preset-env-and-nesting',
    element: <PresetEnvAndNesting />,
  },
];

export default CorePlugins;
