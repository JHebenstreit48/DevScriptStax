import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ComponentAndFunctionGenerics = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/GenericsAndUtilityTypes/ComponentAndFunctionGenerics'));
const BuiltInUtilityTypes = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/GenericsAndUtilityTypes/BuiltInUtilityTypes'));

const GenericsAndUtilityTypes: RouteObject[] = [
  {
    path: '/typescript/advanced/generics/component-function',
    element: <ComponentAndFunctionGenerics />,
  },
  {
    path: '/typescript/advanced/generics/utilities',
    element: <BuiltInUtilityTypes />,
  },
];

export default GenericsAndUtilityTypes;
