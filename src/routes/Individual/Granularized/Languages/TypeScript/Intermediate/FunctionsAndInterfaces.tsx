import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypingFunctions = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/TypeScript/Intermediate/FunctionsAndInterfaces/TypingFunctions'
    )
);
const InterfacesVsTypes = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/TypeScript/Intermediate/FunctionsAndInterfaces/InterfacesVsTypes'
    )
);

const FunctionsAndInterfaces: RouteObject[] = [
  {
    path: '/typescript/intermediate/functions/typing',
    element: <TypingFunctions />,
  },
  {
    path: '/typescript/intermediate/functions/interfaces-types',
    element: <InterfacesVsTypes />,
  },
];

export default FunctionsAndInterfaces;