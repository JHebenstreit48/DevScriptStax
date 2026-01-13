import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProjectAndTsconfig = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/TypeAware/ProjectAndTsconfig'));
const TypeCheckedRules = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/TypeAware/TypeCheckedRules'));

const TypeAware: RouteObject[] = [
  {
    path: '/tslint/basics/type-aware/project-tsconfig',
    element: <ProjectAndTsconfig />,
  },
  {
    path: '/tslint/basics/type-aware/type-checked-rules',
    element: <TypeCheckedRules />,
  },
];

export default TypeAware;
