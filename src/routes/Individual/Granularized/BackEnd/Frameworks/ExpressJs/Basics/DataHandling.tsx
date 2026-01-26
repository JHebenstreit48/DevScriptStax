import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSONAndUrlencoded = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/DataHandling/JSONAndUrlencoded'));
const FileUploads = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Basics/DataHandling/FileUploads'));

const DataHandling: RouteObject[] = [
  {
    path: '/frameworks/express/basics/data/json-urlencoded',
    element: <JSONAndUrlencoded />,
  },
  {
    path: '/frameworks/express/basics/data/file-uploads',
    element: <FileUploads />,
  },
];

export default DataHandling;
