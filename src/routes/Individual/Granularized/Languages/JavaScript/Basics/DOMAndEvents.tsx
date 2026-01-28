import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EventHandling = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/DOMAndEvents/EventHandle'));

const DOMAndEvents: RouteObject[] = [
  {
    path: '/javascript/basics/dom/eventhandling',
    element: <EventHandling />,
  },
];

export default DOMAndEvents;