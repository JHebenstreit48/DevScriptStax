import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PubSubPatterns = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/MessagingAndStreams/PubSubPatterns'));
const StreamsAndConsumers = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Advanced/MessagingAndStreams/StreamsAndConsumers'));

const MessagingAndStreams: RouteObject[] = [
  {
    path: '/redis/advanced/messaging-and-streams/pubsub-patterns',
    element: <PubSubPatterns />,
  },
  {
    path: '/redis/advanced/messaging-and-streams/streams-and-consumers',
    element: <StreamsAndConsumers />,
  },
];

export default MessagingAndStreams;
