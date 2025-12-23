import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GatsbyConfigJs = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/ConfigAndPlugins/GatsbyConfigJs'));
const UsingPlugins = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/ConfigAndPlugins/UsingPlugins'));

const ConfigAndPlugins: RouteObject[] = [
  {
    path: '/gatsby/basics/config-plugins/gatsby-config',
    element: <GatsbyConfigJs />,
  },
  {
    path: '/gatsby/basics/config-plugins/using-plugins',
    element: <UsingPlugins />,
  },
];

export default ConfigAndPlugins;
