import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const StorageEngine: Subpage = {
  name: 'Storage Engine & Internals',
  subpages: [
    {
      name: 'WiredTiger Tuning',
      path: '/mongodb/advanced/storage/wiredtiger',
    },
    {
      name: 'Compression & Journaling',
      path: '/mongodb/advanced/storage/compression-journaling',
    },
    {
      name: 'Filesystem & Hardware Notes',
      path: '/mongodb/advanced/storage/filesystem',
    },
  ],
};

export default StorageEngine;