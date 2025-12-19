import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ListsAndSets = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Collections/ListsAndSets'));
const Maps = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Basics/Collections/Maps'));

const Collections: RouteObject[] = [
  {
    path: '/dart/basics/collections/lists-sets',
    element: <ListsAndSets />,
  },
  {
    path: '/dart/basics/collections/maps',
    element: <Maps />,
  },
];

export default Collections;
