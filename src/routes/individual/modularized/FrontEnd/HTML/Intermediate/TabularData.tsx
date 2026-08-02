import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Tables = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Intermediate/TabularData/Tables'));
const Captions = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Intermediate/TabularData/Captions'));

const TabularData: RouteObject[] = [
  {
    path: '/front-end/html/intermediate/tabular-data/tables',
    element: <Tables />,
  },
  {
    path: '/front-end/html/intermediate/tabular-data/captions',
    element: <Captions />,
  },
];

export default TabularData;