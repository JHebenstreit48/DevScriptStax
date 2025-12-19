import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CacheHints = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/CacheAndHints/CacheHints'));
const ResponseCache = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/CacheAndHints/ResponseCache'));

const CacheAndHints: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/server/advanced/cache-hints/cache-hints',
    element: <CacheHints />,
  },
  {
    path: '/graphqlandapollo/apollo/server/advanced/cache-hints/response-cache',
    element: <ResponseCache />,
  },
];

export default CacheAndHints;
