import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WebSocketLink = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/SubscriptionsTransport/WebSocketLink'));
const SSELink = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/SubscriptionsTransport/SSELink'));

const SubscriptionsTransport: RouteObject[] = [
  {
    path: '/apollo/client/advanced/subscriptions-transport/websocket-link',
    element: <WebSocketLink />,
  },
  {
    path: '/apollo/client/advanced/subscriptions-transport/sse-link',
    element: <SSELink />,
  },
];

export default SubscriptionsTransport;
