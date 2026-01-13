import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsingPlugins = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Plugins/UsingPlugins'));
const AuthorPlugins = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Plugins/AuthorPlugins'));

const Plugins: RouteObject[] = [
  {
    path: '/serverless-framework/advanced/plugins/using-plugins',
    element: <UsingPlugins />,
  },
  {
    path: '/serverless-framework/advanced/plugins/author-plugins',
    element: <AuthorPlugins />,
  },
];

export default Plugins;
