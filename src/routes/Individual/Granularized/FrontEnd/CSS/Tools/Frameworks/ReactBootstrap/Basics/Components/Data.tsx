import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CardAndListGroup = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Data/CardAndListGroup'));
const TableAndPagination = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Data/TableAndPagination'));

const Data: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/components/data/card-and-listgroup',
    element: <CardAndListGroup />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/components/data/table-and-pagination',
    element: <TableAndPagination />,
  },
];

export default Data;
