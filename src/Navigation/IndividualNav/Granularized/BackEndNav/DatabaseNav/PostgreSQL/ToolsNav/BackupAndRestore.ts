import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const BackupAndRestore: Subpage = {
  name: 'Backup & Restore',
  subpages: [
    {
      name: 'pg_dump & pg_restore',
      path: '/databases/postgresql/tools/backup-restore/pg-dump-restore',
    },
    {
      name: 'Logical vs Physical Backups',
      path: '/databases/postgresql/tools/backup-restore/logical-vs-physical',
    },
  ],
};

export default BackupAndRestore;