import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const KeysAndExpiration = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/WorkingWithData/KeysAndExpiration'));
const SCANAndPatterns = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/WorkingWithData/SCANAndPatterns'));
const PipeliningBasics = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/WorkingWithData/PipeliningBasics'));

const WorkingWithData: RouteObject[] = [
  {
    path: '/redis/basics/working-with-data/keys-and-expiration',
    element: <KeysAndExpiration />,
  },
  {
    path: '/redis/basics/working-with-data/scan-and-patterns',
    element: <SCANAndPatterns />,
  },
  {
    path: '/redis/basics/working-with-data/pipelining-basics',
    element: <PipeliningBasics />,
  },
];

export default WorkingWithData;
