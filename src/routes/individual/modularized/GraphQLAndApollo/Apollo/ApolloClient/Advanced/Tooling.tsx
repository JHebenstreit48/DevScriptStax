import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Codegen = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/Codegen'));
const DevTools = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/DevTools'));

const Tooling: RouteObject[] = [
  {
    path: '/apollo/client/advanced/tooling/codegen',
    element: <Codegen />,
  },
  {
    path: '/apollo/client/advanced/tooling/devtools',
    element: <DevTools />,
  },
];

export default Tooling;
