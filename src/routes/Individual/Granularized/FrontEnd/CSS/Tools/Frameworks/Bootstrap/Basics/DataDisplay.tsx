import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Cards = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/DataDisplay/Cards'));
const Tables = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/DataDisplay/Tables'));

const DataDisplay: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/data-display/cards',
    element: <Cards />,
  },
  {
    path: '/frameworks/bootstrap/basics/data-display/tables',
    element: <Tables />,
  },
];

export default DataDisplay;
