import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Tables = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/TabularData/Tables'));
const Captions = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/TabularData/Captions'));

const TabularData: RouteObject[] = [
  {
    path: '/front-end/html/basics/tabular-data/tables',
    element: <Tables />,
  },
  {
    path: '/front-end/html/basics/tabular-data/captions-and-groups',
    element: <Captions />,
  },
];

export default TabularData;