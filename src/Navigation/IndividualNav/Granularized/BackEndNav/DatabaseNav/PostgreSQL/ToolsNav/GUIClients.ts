import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GUIClients: Subpage = {
  name: 'GUI Clients',
  subpages: [
    {
      name: 'pgAdmin (Elephant)',
      path: '/databases/postgresql/tools/gui/pgadmin',
    },
    {
      name: 'DBeaver',
      path: '/databases/postgresql/tools/gui/dbeaver',
    },
    {
      name: 'TablePlus',
      path: '/databases/postgresql/tools/gui/tableplus',
    },
    {
      name: 'DataGrip',
      path: '/databases/postgresql/tools/gui/datagrip',
    },
  ],
};

export default GUIClients;