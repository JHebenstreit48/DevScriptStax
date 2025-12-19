import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PostcssConfig = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Configuration/PostcssConfig'));
const BrowserslistAndEnv = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Configuration/BrowserslistAndEnv'));

const Configuration: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/postcss/basics/configuration/postcss-config',
    element: <PostcssConfig />,
  },
  {
    path: '/css/tools/postprocessors/postcss/basics/configuration/browserslist-and-env',
    element: <BrowserslistAndEnv />,
  },
];

export default Configuration;
