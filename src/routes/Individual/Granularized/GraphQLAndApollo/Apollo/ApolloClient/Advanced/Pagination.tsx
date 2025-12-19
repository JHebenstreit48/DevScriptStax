import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Offset = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/Pagination/Offset'));
const CursorRelay = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/Pagination/CursorRelay'));

const Pagination: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/client/advanced/pagination/offset',
    element: <Offset />,
  },
  {
    path: '/graphqlandapollo/apollo/client/advanced/pagination/cursor-relay',
    element: <CursorRelay />,
  },
];

export default Pagination;
