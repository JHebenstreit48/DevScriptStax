import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Fundamentals/Introduction'));
const EventLoopAndAsyncIO = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Fundamentals/EventLoopAndAsyncIO'));
const RuntimeAndGlobals = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Fundamentals/RuntimeAndGlobals'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/nodejs/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/frameworks/nodejs/basics/fundamentals/event-loop-async-io',
    element: <EventLoopAndAsyncIO />,
  },
  {
    path: '/frameworks/nodejs/basics/fundamentals/runtime-globals',
    element: <RuntimeAndGlobals />,
  },
];

export default Fundamentals;
