import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Strings = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/DataStructures/Strings'));
const Lists = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/DataStructures/Lists'));
const SetsAndSortedSets = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/DataStructures/SetsAndSortedSets'));
const HashesAndBitmaps = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/DataStructures/HashesAndBitmaps'));
const HyperLogLogAndStreams = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Redis/Basics/DataStructures/HyperLogLogAndStreams'));

const DataStructures: RouteObject[] = [
  {
    path: '/redis/basics/data-structures/strings',
    element: <Strings />,
  },
  {
    path: '/redis/basics/data-structures/lists',
    element: <Lists />,
  },
  {
    path: '/redis/basics/data-structures/sets-and-sorted-sets',
    element: <SetsAndSortedSets />,
  },
  {
    path: '/redis/basics/data-structures/hashes-and-bitmaps',
    element: <HashesAndBitmaps />,
  },
  {
    path: '/redis/basics/data-structures/hyperloglog-and-streams',
    element: <HyperLogLogAndStreams />,
  },
];

export default DataStructures;
