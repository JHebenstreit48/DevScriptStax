import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Firestore/Overview'));
const FirestoreVsRealtime = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Firestore/FirestoreVsRealtime'));
const DocumentAndCollectionModel = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Firestore/DocumentAndCollectionModel'));
const QueryingAndIndexingData = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Basics/Firestore/QueryingAndIndexingData'));

const Firestore: RouteObject[] = [
  {
    path: '/firebase/basics/firestore/overview',
    element: <Overview />,
  },
  {
    path: '/firebase/basics/firestore/comparison',
    element: <FirestoreVsRealtime />,
  },
  {
    path: '/firebase/basics/firestore/model',
    element: <DocumentAndCollectionModel />,
  },
  {
    path: '/firebase/basics/firestore/querying',
    element: <QueryingAndIndexingData />,
  },
];

export default Firestore;
