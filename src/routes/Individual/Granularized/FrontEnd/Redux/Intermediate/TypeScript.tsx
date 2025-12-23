import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypedStoreAndDispatch = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/TypeScript/TypedStoreAndDispatch'));
const TypedHooksAndPayloadAction = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Intermediate/TypeScript/TypedHooksAndPayloadAction'));

const TypeScript: RouteObject[] = [
  {
    path: '/redux/intermediate/typescript/typed-store-and-dispatch',
    element: <TypedStoreAndDispatch />,
  },
  {
    path: '/redux/intermediate/typescript/typed-hooks-and-payloadaction',
    element: <TypedHooksAndPayloadAction />,
  },
];

export default TypeScript;
