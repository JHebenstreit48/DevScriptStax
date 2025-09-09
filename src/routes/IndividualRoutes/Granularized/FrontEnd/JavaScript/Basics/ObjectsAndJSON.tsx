import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSON = lazy(() => import('@/Pages/MainTabs/FrontEnd/JavaScript/Basics/ObjectsAndJSON/JSON'));

const ObjectsAndJSON: RouteObject[] = [
  {
    path: '/javascript/basics/objects-and-json/json',
    element: <JSON />,
  },
];

export default ObjectsAndJSON;