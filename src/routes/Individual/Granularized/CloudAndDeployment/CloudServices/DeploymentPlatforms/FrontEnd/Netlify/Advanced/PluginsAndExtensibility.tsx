import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsingBuildPlugins = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/PluginsAndExtensibility/UsingBuildPlugins'));
const AuthoringPlugins = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/PluginsAndExtensibility/AuthoringPlugins'));

const PluginsAndExtensibility: RouteObject[] = [
  {
    path: '/netlify/advanced/plugins-extensibility/using-plugins',
    element: <UsingBuildPlugins />,
  },
  {
    path: '/netlify/advanced/plugins-extensibility/authoring-plugins',
    element: <AuthoringPlugins />,
  },
];

export default PluginsAndExtensibility;
