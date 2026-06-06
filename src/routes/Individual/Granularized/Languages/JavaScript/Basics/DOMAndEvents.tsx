import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DOMManipulation = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/DOMAndEvents/DOMManipulation'));
const EventHandling = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/DOMAndEvents/EventHandle'));

const DOMAndEvents: RouteObject[] = [
  {
    path: '/javascript/basics/dom/dom-manipulation',
    element: <DOMManipulation />,
  },
  {
    path: '/javascript/basics/dom/event-handling',
    element: <EventHandling />,
  },
];

export default DOMAndEvents;