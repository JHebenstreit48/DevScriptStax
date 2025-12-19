import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreTypes = lazy(
  () =>
    import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/CoreTypes')
);
const InterfaceAndDeclare = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/TypeScript/Basics/Types/InterfaceAndDeclarations'
    )
);

const Types: RouteObject[] = [
  {
    path: '/typescript/basics/types/core',
    element: <CoreTypes />,
  },
  {
    path: '/typescript/basics/types/interfaces',
    element: <InterfaceAndDeclare />,
  },
];

export default Types;
