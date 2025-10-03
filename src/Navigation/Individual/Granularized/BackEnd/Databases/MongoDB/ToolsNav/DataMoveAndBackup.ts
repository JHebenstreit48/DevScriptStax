import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const DataMoveAndBackup: Subpage = {
  name: 'Data Move & Backup',
  subpages: [
    {
      name: 'Export & Import',
      path: '/mongodb/tools/data-move-backup/export-import',
    },
    {
      name: 'Backup & Restore',
      path: '/mongodb/tools/data-move-backup/backup-restore',
    },
  ],
};

export default DataMoveAndBackup;