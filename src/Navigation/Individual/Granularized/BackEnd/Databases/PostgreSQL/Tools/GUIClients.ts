import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const GUIClients: Subpage = {
  name: 'GUI Clients',
  subpages: [
    {
      name: 'pgAdmin (Elephant)',
      path: '/postgresql/tools/gui/pgadmin',
    },
    {
      name: 'DBeaver',
      path: '/postgresql/tools/gui/dbeaver',
    },
    {
      name: 'TablePlus',
      path: '/postgresql/tools/gui/tableplus',
    },
    {
      name: 'DataGrip',
      path: '/postgresql/tools/gui/datagrip',
    },
  ],
};

export default GUIClients;