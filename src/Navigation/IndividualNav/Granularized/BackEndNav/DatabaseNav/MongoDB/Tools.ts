import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Shell & Server',
      subpages: [
        {
          name: 'Mongo Shell (mongosh)',
          path: '/databases/mongodb/tools/mongosh'
        },
        {
          name: 'Server Process (mongod)',
          path: '/databases/mongodb/tools/mongod'
        },
      ],
    },
    {
      name: 'GUI & CLI',
      subpages: [
        {
          name: 'MongoDB Compass',
          path: '/databases/mongodb/tools/compass'
        },
        {
          name: 'Atlas CLI',
          path: '/databases/mongodb/tools/atlas-cli'
        },
      ],
    },
    {
      name: 'Data Move / Backup',
      subpages: [
        {
          name: 'Export & Import',
          path: '/databases/mongodb/tools/export-import'
        },
        {
          name: 'Backup & Restore',
          path: '/databases/mongodb/tools/backup-restore'
        },
      ],
    },
    {
      name: 'Monitoring',
      subpages: [
        {
          name: 'Realtime Metrics (mongostat)',
          path: '/databases/mongodb/tools/monitoring/mongostat'
        },
        {
          name: 'Collection Activity (mongotop)',
          path: '/databases/mongodb/tools/monitoring/mongotop'
        },
      ],
    },
    {
      name: 'Dev Workflow',
      subpages: [
        {
          name: 'Seeding & Local Dev',
          path: '/databases/mongodb/tools/seeding'
        },
        {
          name: 'Connection Strings & Environments',
          path: '/databases/mongodb/tools/connection-strings'
        },
      ],
    },
  ],
};

export default Tools;