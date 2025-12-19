import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Cards = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/DataDisplay/Cards'));
const Tables = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/DataDisplay/Tables'));

const DataDisplay: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/components/data-display/cards',
    element: <Cards />,
  },
  {
    path: '/frameworks/bootstrap/basics/components/data-display/tables',
    element: <Tables />,
  },
];

export default DataDisplay;
