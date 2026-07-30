import type { Subpage } from '@/types/navigation';

const BackupAndRestore: Subpage = {
  name: 'Backup & Restore',
  subpages: [
    {
      name: 'pg_dump & pg_restore',
      path: '/postgresql/tools/backup-restore/pg-dump-restore',
    },
    {
      name: 'Logical vs Physical Backups',
      path: '/postgresql/tools/backup-restore/logical-vs-physical',
    },
  ],
};

export default BackupAndRestore;