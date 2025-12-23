import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticGeneration = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/CoreConcepts/StaticGeneration'));
const ServerSideRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/CoreConcepts/ServerSideRendering'));
const ClientSideRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/CoreConcepts/ClientSideRendering'));
const Middleware = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Basics/CoreConcepts/Middleware'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/nextjs/core-concepts/static-generation',
    element: <StaticGeneration />,
  },
  {
    path: '/nextjs/core-concepts/server-side-rendering',
    element: <ServerSideRendering />,
  },
  {
    path: '/nextjs/core-concepts/client-side-rendering',
    element: <ClientSideRendering />,
  },
  {
    path: '/nextjs/core-concepts/middleware',
    element: <Middleware />,
  },
];

export default CoreConcepts;
