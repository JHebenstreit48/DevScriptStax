import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Tables = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/HTML/Intermediate/TabularData/Tables')
);
const Captions = lazy(
  () => import('@/Pages/MainTabs/FrontEnd/HTML/Intermediate/TabularData/Captions')
);

const TabularData: RouteObject[] = [
  {
    path: '/html/intermediate/tabular-data/tables',
    element: <Tables />,
  },
  {
    path: '/html/intermediate/tabular-data/captions',
    element: <Captions />,
  },
];

export default TabularData;