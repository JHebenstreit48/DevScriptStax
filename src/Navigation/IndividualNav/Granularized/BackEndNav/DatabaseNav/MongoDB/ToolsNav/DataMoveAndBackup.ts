import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const DataMoveAndBackup: Subpage = {
  name: 'Data Move & Backup',
  subpages: [
    {
      name: 'Export & Import',
      path: '/databases/mongodb/tools/data-move-backup/export-import',
    },
    {
      name: 'Backup & Restore',
      path: '/databases/mongodb/tools/data-move-backup/backup-restore',
    },
  ],
};

export default DataMoveAndBackup;