import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ObjectBasics = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/ObjectsAndJSON/Basics'));
const PropsAndMethods = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/ObjectsAndJSON/PropsAndMethods'));
const UtilitiesAndPatterns = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/ObjectsAndJSON/UtilsAndPatterns'));
const JSON = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/ObjectsAndJSON/JSON'));

const ObjectsAndJSON: RouteObject[] = [
  {
    path: '/javascript/basics/objects-and-json/basics',
    element: <ObjectBasics />,
  },
  {
    path: '/javascript/basics/objects-and-json/props-and-methods',
    element: <PropsAndMethods />,
  },
  {
    path: '/javascript/basics/objects-and-json/utils-and-patterns',
    element: <UtilitiesAndPatterns />,
  },
  {
    path: '/javascript/basics/objects-and-json/json',
    element: <JSON />,
  },
];

export default ObjectsAndJSON;