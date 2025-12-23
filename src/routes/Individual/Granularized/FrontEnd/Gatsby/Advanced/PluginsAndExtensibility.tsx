import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomPlugins = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/PluginsAndExtensibility/CustomPlugins'));
const NodeAPIs = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/PluginsAndExtensibility/NodeAPIs'));

const PluginsAndExtensibility: RouteObject[] = [
  {
    path: '/gatsby/advanced/plugins-extensibility/custom-plugins',
    element: <CustomPlugins />,
  },
  {
    path: '/gatsby/advanced/plugins-extensibility/node-apis',
    element: <NodeAPIs />,
  },
];

export default PluginsAndExtensibility;
