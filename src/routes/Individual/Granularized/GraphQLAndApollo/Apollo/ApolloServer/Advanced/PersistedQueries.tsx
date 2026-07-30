import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const APQSetup = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/PersistedQueries/APQSetup'));
const CDNStrategy = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/PersistedQueries/CDNStrategy'));

const PersistedQueries: RouteObject[] = [
  {
    path: '/apollo/server/advanced/persisted-queries/apq-setup',
    element: <APQSetup />,
  },
  {
    path: '/apollo/server/advanced/persisted-queries/cdn-strategy',
    element: <CDNStrategy />,
  },
];

export default PersistedQueries;
