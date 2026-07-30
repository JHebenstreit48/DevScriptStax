import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PgAdmin = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Tools/GUIClients/PgAdmin'));
const DBeaver = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Tools/GUIClients/DBeaver'));
const TablePlus = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Tools/GUIClients/TablePlus'));
const DataGrip = lazy(() => import('@/pages/mainTabs/BackEnd/Databases/PostgreSQL/Tools/GUIClients/DataGrip'));

const GUIClients: RouteObject[] = [
  {
    path: '/postgresql/tools/gui/pgadmin',
    element: <PgAdmin />,
  },
  {
    path: '/postgresql/tools/gui/dbeaver',
    element: <DBeaver />,
  },
  {
    path: '/postgresql/tools/gui/tableplus',
    element: <TablePlus />,
  },
  {
    path: '/postgresql/tools/gui/datagrip',
    element: <DataGrip />,
  },
];

export default GUIClients;
