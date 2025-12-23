import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Transitions = lazy(() => import('@/Pages/MainTabs/FrontEnd/Svelte/Advanced/Concepts/Transitions'));
const Animations = lazy(() => import('@/Pages/MainTabs/FrontEnd/Svelte/Advanced/Concepts/Animations'));
const ServerSideRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/Svelte/Advanced/Concepts/ServerSideRendering'));
const ContextAPI = lazy(() => import('@/Pages/MainTabs/FrontEnd/Svelte/Advanced/Concepts/ContextAPI'));

const Concepts: RouteObject[] = [
  {
    path: '/svelte/advanced/transitions',
    element: <Transitions />,
  },
  {
    path: '/svelte/advanced/animations',
    element: <Animations />,
  },
  {
    path: '/svelte/advanced/ssr',
    element: <ServerSideRendering />,
  },
  {
    path: '/svelte/advanced/context-api',
    element: <ContextAPI />,
  },
];

export default Concepts;
