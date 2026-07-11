import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSX = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/React/Basics/CoreConcepts/JSX'
    )
);

const EventHandling = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEnd/React/Basics/CoreConcepts/EventHandling'
    )
);

const JSXAndEvent: RouteObject[] = [
  {
    path: '/react/basics/core/fundamentals/jsx',
    element: <JSX />,
  },
  {
    path: '/react/basics/core/fundamentals/event-handling',
    element: <EventHandling />,
  },
];

export default JSXAndEvent;