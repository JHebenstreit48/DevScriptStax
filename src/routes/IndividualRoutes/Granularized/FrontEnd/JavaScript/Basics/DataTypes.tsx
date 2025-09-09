import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Primitives = lazy(() => import('@/Pages/MainTabs/FrontEnd/JavaScript/Basics/DataTypes/Primitives'));

const DataTypes: RouteObject[] = [
  {
    path: '/javascript/basics/data-types/primitive',
    element: <Primitives />,
  },
];

export default DataTypes;