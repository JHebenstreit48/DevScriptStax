import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const PythonIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'File & Data',
      subpages: [
        {
          name: 'File Handling',
          path: '/python/intermediate/data/filehandling'
        },
        {
          name: 'CSV/JSON',
          path: '/python/intermediate/data/csvjson'
        },
        {
          name: 'Web Scraping',
          path: '/python/intermediate/data/webscraping'
        },
        {
          name: 'API Requests',
          path: '/python/intermediate/data/apirequests'
        }
      ]
    },
    {
      name: 'Async',
      subpages: [
        {
          name: 'Async/Await',
          path: '/python/intermediate/async/asyncawait'
        },
        {
          name: 'Asyncio',
          path: '/python/intermediate/async/asyncio'
        }
      ]
    }
  ]
};

export default PythonIntermediate;