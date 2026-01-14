import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Intro = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Fundamentals/Intro'));
const EventLoopAndAsyncIO = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Fundamentals/EventLoopAndAsyncIO'));
const RuntimeAndGlobals = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/Fundamentals/RuntimeAndGlobals'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/nodejs/basics/fundamentals/intro',
    element: <Intro />,
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
