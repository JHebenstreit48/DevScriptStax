import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WebSocket = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/WebSocket'));
const SSE = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/SSE'));

const SubscriptionsTransport: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/server/advanced/subscriptions-transport/websocket',
    element: <WebSocket />,
  },
  {
    path: '/graphqlandapollo/apollo/server/advanced/subscriptions-transport/sse',
    element: <SSE />,
  },
];

export default SubscriptionsTransport;
