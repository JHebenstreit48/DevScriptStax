import type { Subpage } from '@/types/navigation';

const DataHandling: Subpage = {
  name: 'Data Handling',
  subpages: [
    {
      name: 'JSON & urlencoded',
      path: '/frameworks/express/basics/data/json-urlencoded',
    },
    {
      name: 'File Uploads',
      path: '/frameworks/express/basics/data/file-uploads',
    },
  ],
};

export default DataHandling;