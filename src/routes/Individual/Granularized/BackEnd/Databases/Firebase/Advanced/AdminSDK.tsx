import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/AdminSDK/Basics'));
const ServerAuthAndClaims = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/AdminSDK/ServerAuthAndClaims'));
const ExportAndImport = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/AdminSDK/ExportAndImport'));

const AdminSDK: RouteObject[] = [
  {
    path: '/firebase/advanced/admin-sdk/basics',
    element: <Basics />,
  },
  {
    path: '/firebase/advanced/admin-sdk/server-auth-claims',
    element: <ServerAuthAndClaims />,
  },
  {
    path: '/firebase/advanced/admin-sdk/export-import',
    element: <ExportAndImport />,
  },
];

export default AdminSDK;
