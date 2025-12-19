import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypeParams = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/Generics/TypeParams'));
const Typedefs = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/Generics/Typedefs'));

const Generics: RouteObject[] = [
  {
    path: '/dart/advanced/generics/type-params',
    element: <TypeParams />,
  },
  {
    path: '/dart/advanced/generics/typedefs',
    element: <Typedefs />,
  },
];

export default Generics;
