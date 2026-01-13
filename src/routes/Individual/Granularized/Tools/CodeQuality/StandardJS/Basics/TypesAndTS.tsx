import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TsStandard = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/TypesAndTS/TsStandard'));
const TypeScriptProjects = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/TypesAndTS/TypeScriptProjects'));

const TypesAndTS: RouteObject[] = [
  {
    path: '/standardjs/basics/types-ts/ts-standard',
    element: <TsStandard />,
  },
  {
    path: '/standardjs/basics/types-ts/typescript-projects',
    element: <TypeScriptProjects />,
  },
];

export default TypesAndTS;
