import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Codegen = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/Codegen'));
const DevTools = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/DevTools'));

const Tooling: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/client/advanced/tooling/codegen',
    element: <Codegen />,
  },
  {
    path: '/graphqlandapollo/apollo/client/advanced/tooling/devtools',
    element: <DevTools />,
  },
];

export default Tooling;
