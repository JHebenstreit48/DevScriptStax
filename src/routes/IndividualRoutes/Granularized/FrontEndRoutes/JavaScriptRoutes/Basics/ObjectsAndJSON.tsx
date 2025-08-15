import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSON = lazy(
  () => import('@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/JSON')
);

const ObjectsAndJSON: RouteObject[] = [
  {
    path: '/javascript/basics/objectsandjson/json',
    element: <JSON />,
  },
];

export default ObjectsAndJSON;