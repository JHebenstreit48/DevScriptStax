import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CacheHints = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/CacheAndHints/CacheHints'));
const ResponseCache = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/CacheAndHints/ResponseCache'));

const CacheAndHints: RouteObject[] = [
  {
    path: '/apollo/server/advanced/cache-hints/cache-hints',
    element: <CacheHints />,
  },
  {
    path: '/apollo/server/advanced/cache-hints/response-cache',
    element: <ResponseCache />,
  },
];

export default CacheAndHints;
