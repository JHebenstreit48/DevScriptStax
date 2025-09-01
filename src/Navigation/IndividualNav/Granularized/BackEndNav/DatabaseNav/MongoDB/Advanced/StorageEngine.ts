import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const StorageEngine: Subpage = {
  name: 'Storage Engine & Internals',
  subpages: [
    {
      name: 'WiredTiger Tuning',
      path: '/databases/mongodb/advanced/storage/wiredtiger',
    },
    {
      name: 'Compression & Journaling',
      path: '/databases/mongodb/advanced/storage/compression-journaling',
    },
    {
      name: 'Filesystem & Hardware Notes',
      path: '/databases/mongodb/advanced/storage/filesystem',
    },
  ],
};

export default StorageEngine;