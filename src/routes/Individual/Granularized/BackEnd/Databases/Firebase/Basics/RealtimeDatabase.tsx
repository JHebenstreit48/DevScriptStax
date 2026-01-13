import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/RealtimeDatabase/Introduction'));
const StructureRules = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/RealtimeDatabase/StructureRules'));
const ReadingWritingData = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/RealtimeDatabase/ReadingWritingData'));
const ListenersSyncing = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/RealtimeDatabase/ListenersSyncing'));

const RealtimeDatabase: RouteObject[] = [
  {
    path: '/firebase/basics/realtime-db/overview',
    element: <Introduction />,
  },
  {
    path: '/firebase/basics/realtime-db/structure',
    element: <StructureRules />,
  },
  {
    path: '/firebase/basics/realtime-db/reading-writing',
    element: <ReadingWritingData />,
  },
  {
    path: '/firebase/basics/realtime-db/listeners',
    element: <ListenersSyncing />,
  },
];

export default RealtimeDatabase;
