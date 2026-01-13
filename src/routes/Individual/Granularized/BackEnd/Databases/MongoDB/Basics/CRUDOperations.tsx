import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Create = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/CRUDOperations/Create'));
const Read = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/CRUDOperations/Read'));
const Update = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/CRUDOperations/Update'));
const Delete = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/CRUDOperations/Delete'));
const BulkOperations = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/CRUDOperations/BulkOperations'));

const CRUDOperations: RouteObject[] = [
  {
    path: '/mongodb/basics/crud/create',
    element: <Create />,
  },
  {
    path: '/mongodb/basics/crud/read',
    element: <Read />,
  },
  {
    path: '/mongodb/basics/crud/update',
    element: <Update />,
  },
  {
    path: '/mongodb/basics/crud/delete',
    element: <Delete />,
  },
  {
    path: '/mongodb/basics/crud/bulk-operations',
    element: <BulkOperations />,
  },
];

export default CRUDOperations;
