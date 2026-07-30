import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ArraysAndSlices = lazy(() => import('@/pages/mainTabs/Languages/Go/Basics/Collections/ArraysAndSlices'));
const Maps = lazy(() => import('@/pages/mainTabs/Languages/Go/Basics/Collections/Maps'));

const Collections: RouteObject[] = [
  {
    path: '/go/basics/collections/arrays-slices',
    element: <ArraysAndSlices />,
  },
  {
    path: '/go/basics/collections/maps',
    element: <Maps />,
  },
];

export default Collections;
