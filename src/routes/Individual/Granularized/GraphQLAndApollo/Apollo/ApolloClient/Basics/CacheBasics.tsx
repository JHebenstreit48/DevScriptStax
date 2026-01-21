import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Store = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/CacheBasics/Store'));
const Normalization = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/CacheBasics/Normalization'));

const CacheBasics: RouteObject[] = [
  {
    path: '/apollo/client/basics/cache/store',
    element: <Store />,
  },
  {
    path: '/apollo/client/basics/cache/normalization',
    element: <Normalization />,
  },
];

export default CacheBasics;
