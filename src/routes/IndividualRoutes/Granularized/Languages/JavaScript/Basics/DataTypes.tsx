import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Primitives = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/DataTypes/Primitives'));
const ComplexDataTypes = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/DataTypes/Complex'));
const TemplateLiterals = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/DataTypes/TemplateLiterals'));

const DataTypes: RouteObject[] = [
  {
    path: '/javascript/basics/data-types/primitive',
    element: <Primitives />,
  },
  {
    path: '/javascript/basics/data-types/complex',
    element: <ComplexDataTypes />,
  },
  {
    path: '/javascript/basics/data-types/template-literals',
    element: <TemplateLiterals />,
  },
];

export default DataTypes;