import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSONAndUrlencoded = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/DataAndBody/JSONAndUrlencoded'));
const FileUploads = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Basics/DataAndBody/FileUploads'));

const DataAndBody: RouteObject[] = [
  {
    path: '/frameworks/koa/basics/data-body/json-urlencoded',
    element: <JSONAndUrlencoded />,
  },
  {
    path: '/frameworks/koa/basics/data-body/file-uploads',
    element: <FileUploads />,
  },
];

export default DataAndBody;
