import type { Subpage } from '@/types/navigation';

const FileAndData: Subpage = {
  name: 'File & Data',
  subpages: [
    {
      name: 'File Handling',
      path: '/python/intermediate/data/filehandling',
    },
    {
      name: 'CSV/JSON',
      path: '/python/intermediate/data/csvjson',
    },
    {
      name: 'Web Scraping',
      path: '/python/intermediate/data/webscraping',
    },
    {
      name: 'API Requests',
      path: '/python/intermediate/data/apirequests',
    },
  ],
};

export default FileAndData;