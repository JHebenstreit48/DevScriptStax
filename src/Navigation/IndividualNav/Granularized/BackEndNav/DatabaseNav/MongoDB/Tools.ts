import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Shell & Server',
      subpages: [
        {
          name: 'Overview',
          path: '/databases/mongodb/tools/shell-and-server/overview'
        },
        {
          name: 'Shell & Server Commands',
          path: '/databases/mongodb/tools/shell-and-server/commands'
        },
      ],
    },
    {
      name: 'GUI & CLI',
      subpages: [
        {
          name: 'Compass',
          path: '/databases/mongodb/tools/gui-and-cli/compass'
        },
        {
          name: 'Atlas CLI',
          path: '/databases/mongodb/tools/gui-and-cli/atlas-cli'
        },
      ],
    },
    {
      name: 'Data Move / Backup',
      subpages: [
        {
          name: 'Export & Import',
          path: '/databases/mongodb/tools/data-move-backup/export-import'
        },
        {
          name: 'Backup & Restore',
          path: '/databases/mongodb/tools/data-move-backup/backup-restore'
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
          path: '/databases/mongodb/tools/dev-workflow/seeding-and-local'
        },
        {
          name: 'Connection Strings & Environments',
          path: '/databases/mongodb/tools/dev-workflow/connection-strings'
        },
      ],
    },
  ],
};

export default Tools;