import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Storage/Overview'));
const UploadingAndDownloadingFiles = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Storage/UploadingAndDownloadingFiles'));
const SecurityRulesAndAccessControl = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Storage/SecurityRulesAndAccessControl'));
const ManagingStorageCosts = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Storage/ManagingStorageCosts'));

const Storage: RouteObject[] = [
  {
    path: '/firebase/basics/storage/overview',
    element: <Overview />,
  },
  {
    path: '/firebase/basics/storage/upload-download',
    element: <UploadingAndDownloadingFiles />,
  },
  {
    path: '/firebase/basics/storage/security',
    element: <SecurityRulesAndAccessControl />,
  },
  {
    path: '/firebase/basics/storage/costs',
    element: <ManagingStorageCosts />,
  },
];

export default Storage;
