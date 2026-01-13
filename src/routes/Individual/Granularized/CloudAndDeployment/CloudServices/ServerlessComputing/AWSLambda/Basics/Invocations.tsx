import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SyncVsAsync = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Invocations/SyncVsAsync'));
const EventSources = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Invocations/EventSources'));

const Invocations: RouteObject[] = [
  {
    path: '/aws-lambda/basics/invocations/sync-vs-async',
    element: <SyncVsAsync />,
  },
  {
    path: '/aws-lambda/basics/invocations/event-sources',
    element: <EventSources />,
  },
];

export default Invocations;
