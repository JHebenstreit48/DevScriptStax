import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WebSocket = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/WebSocket'));
const SSE = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/SSE'));

const SubscriptionsTransport: RouteObject[] = [
  {
    path: '/apollo/server/advanced/subscriptions-transport/websocket',
    element: <WebSocket />,
  },
  {
    path: '/apollo/server/advanced/subscriptions-transport/sse',
    element: <SSE />,
  },
];

export default SubscriptionsTransport;
