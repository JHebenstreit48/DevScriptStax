import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnionAndIntersectionTypes = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/TypesAndGuards/UnionAndIntersectionTypes'));
const GuardsAndAssertions = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/TypesAndGuards/GuardsAndAssertions'));

const TypesAndGuards: RouteObject[] = [
  {
    path: '/typescript/advanced/types/union-intersection',
    element: <UnionAndIntersectionTypes />,
  },
  {
    path: '/typescript/advanced/types/guards-assertions',
    element: <GuardsAndAssertions />,
  },
];

export default TypesAndGuards;
