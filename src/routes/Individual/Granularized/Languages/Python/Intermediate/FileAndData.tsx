import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileHandling = lazy(() => import('@/pages/mainTabs/Languages/Python/Intermediate/FileAndData/FileHandling'));
const CSVJSON = lazy(() => import('@/pages/mainTabs/Languages/Python/Intermediate/FileAndData/CSVJSON'));
const WebScraping = lazy(() => import('@/pages/mainTabs/Languages/Python/Intermediate/FileAndData/WebScraping'));
const APIRequests = lazy(() => import('@/pages/mainTabs/Languages/Python/Intermediate/FileAndData/APIRequests'));

const FileAndData: RouteObject[] = [
  {
    path: '/python/intermediate/data/filehandling',
    element: <FileHandling />,
  },
  {
    path: '/python/intermediate/data/csvjson',
    element: <CSVJSON />,
  },
  {
    path: '/python/intermediate/data/webscraping',
    element: <WebScraping />,
  },
  {
    path: '/python/intermediate/data/apirequests',
    element: <APIRequests />,
  },
];

export default FileAndData;
