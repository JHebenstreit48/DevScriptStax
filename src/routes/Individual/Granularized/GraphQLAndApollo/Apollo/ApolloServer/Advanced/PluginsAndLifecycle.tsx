import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PluginAPI = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/PluginsAndLifecycle/PluginAPI'));
const ErrorMasks = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/PluginsAndLifecycle/ErrorMasks'));

const PluginsAndLifecycle: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/server/advanced/plugins-lifecycle/plugin-api',
    element: <PluginAPI />,
  },
  {
    path: '/graphqlandapollo/apollo/server/advanced/plugins-lifecycle/error-masks',
    element: <ErrorMasks />,
  },
];

export default PluginsAndLifecycle;
