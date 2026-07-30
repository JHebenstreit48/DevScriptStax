import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ChangeStreams = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents/ChangeStreams'));
const TriggersAndOutboxPattern = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents/TriggersAndOutboxPattern'));

const ChangeStreamsAndEvents: RouteObject[] = [
  {
    path: '/mongodb/advanced/events/change-streams',
    element: <ChangeStreams />,
  },
  {
    path: '/mongodb/advanced/events/triggers-outbox',
    element: <TriggersAndOutboxPattern />,
  },
];

export default ChangeStreamsAndEvents;
