import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PluginAnatomy = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring/PluginAnatomy'));
const ASTWalkAndTransforms = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring/ASTWalkAndTransforms'));

const PluginAuthoring: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/postcss/advanced/plugin-authoring/plugin-anatomy',
    element: <PluginAnatomy />,
  },
  {
    path: '/css/tools/postprocessors/postcss/advanced/plugin-authoring/ast-walk-and-transforms',
    element: <ASTWalkAndTransforms />,
  },
];

export default PluginAuthoring;
